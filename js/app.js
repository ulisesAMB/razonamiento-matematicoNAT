// ===== LÓGICA PRINCIPAL DE LA PÁGINA =====
(function () {
  const $ = s => document.querySelector(s);
  const app = $('#app');
  const K_PROG = 'rm-progreso';
  const K_EST = 'rm-estado';
  const pocoMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const NIVELES = {
    facil:   { etiqueta: 'Fácil',   emoji: '🟢' },
    medio:   { etiqueta: 'Medio',   emoji: '🟡' },
    dificil: { etiqueta: 'Difícil', emoji: '🔴' }
  };
  const TEXTOS = {
    pista:   { abrir: '💡 Ver pista',         cerrar: '💡 Ocultar pista' },
    proc:    { abrir: '📝 Ver procedimiento', cerrar: '📝 Ocultar procedimiento' },
    revelar: { abrir: '🎯 Revelar respuesta', cerrar: '🙈 Ocultar respuesta' },
    mproc:   { abrir: '📝 Procedimiento',     cerrar: '📝 Ocultar pasos' },
    mresp:   { abrir: '🎯 Respuesta',         cerrar: '🙈 Ocultar respuesta' }
  };
  const ELOGIOS = ['¡Excelente!', '¡Muy bien!', '¡Así se hace!', '¡Lo dominas!', '¡Brillante!', '¡Eso es!'];
  const ANIMOS = ['Aún no, revisa los signos.', 'Casi, intenta de nuevo.', 'Revisa el orden de las operaciones.', 'No pasa nada, usa la pista 💡'];
  const azar = lista => lista[Math.floor(Math.random() * lista.length)];

  // ---------- Guardado en el navegador (no se pierde al volver a entrar) ----------
  const leer = (k, def) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch (e) { return def; } };
  const escribir = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  // Progreso (si existía el de la versión anterior, se recupera)
  let progreso = leer(K_PROG, null) || leer('rm-parte1-progreso', {}) || {};
  const guardarProg = () => escribir(K_PROG, progreso);

  // Dónde se quedó la persona (vista, parte, tema, pestaña y paso de la teoría)
  const estado = Object.assign(
    { vista: 'inicio', parteId: null, temaId: null, tab: 'aprender', paso: {}, ultimo: null },
    leer(K_EST, {})
  );
  const guardarEstado = () => escribir(K_EST, estado);

  // ---------- Consultas ----------
  const parte = id => PARTES.find(p => p.id === id);
  const parteNum = n => PARTES.find(p => p.numero === n);
  const tema = id => TEMAS.find(t => t.id === id);
  const temasDe = p => TEMAS.filter(t => t.parte === p.numero).sort((a, b) => a.numero - b.numero);
  const resueltos = t => t.ejercicios.filter((_, i) => progreso[`${t.id}-${i}`] === 'ok').length;

  // La práctica extra NO cuenta: solo la explicación y los 6 ejercicios
  function pctTema(t) {
    const hechos = resueltos(t) + (progreso[`${t.id}-teoria`] ? 1 : 0);
    return Math.round(hechos / (t.ejercicios.length + 1) * 100);
  }
  function pctParte(p) {
    const suma = temasDe(p).reduce((s, t) => s + pctTema(t), 0);
    return Math.round(suma / p.plan.length); // se divide entre todos los temas que tendrá
  }

  // ---------- Anillo de progreso (SVG) ----------
  function anillo(pct, color, tam) {
    const r = 15.5, c = 2 * Math.PI * r;
    return `<svg class="anillo" viewBox="0 0 36 36" width="${tam || 34}" height="${tam || 34}" aria-hidden="true">
      <circle class="anillo-fondo" cx="18" cy="18" r="${r}"/>
      <circle class="anillo-val" cx="18" cy="18" r="${r}" style="stroke:${color};stroke-dasharray:${c.toFixed(2)};stroke-dashoffset:${(c * (1 - pct / 100)).toFixed(2)}"/>
      <text x="18" y="21.3" text-anchor="middle">${pct}</text>
    </svg>`;
  }

  // ---------- Cambio de color al cambiar de parte ----------
  function aplicarTema(p, animar) {
    const nuevo = p ? p.tema : 'oro';
    if (document.body.dataset.tema === nuevo) return;
    if (!animar || pocoMovimiento) { document.body.dataset.tema = nuevo; return; }
    const c = document.createElement('div');
    c.className = 'cortina';
    c.dataset.tema = nuevo;
    c.innerHTML = p
      ? `<div><span class="simbolo">${p.simbolo}</span><small>Parte ${p.numero}</small><strong>${p.titulo}</strong></div>`
      : `<div><span class="simbolo">√</span><small>Razonamiento Matemático</small><strong>Inicio</strong></div>`;
    document.body.appendChild(c);
    setTimeout(() => { document.body.dataset.tema = nuevo; }, 480);
    setTimeout(() => c.remove(), 1450);
  }

  // ---------- Barra superior ----------
  function renderTop() {
    const p = parte(estado.parteId);
    $('#logo').textContent = p ? p.simbolo : '√';
    const t = tema(estado.temaId);
    $('#subtitulo').textContent = estado.vista === 'tema' && t
      ? `Parte ${p.numero} · Tema ${t.numero}`
      : (p ? `Parte ${p.numero} · ${p.titulo}` : 'Inicio');
    $('#anillos').innerHTML = PARTES.map(x => `
      <button class="anillo-btn ${p && p.id === x.id ? 'actual' : ''}" style="--pc:${x.color}" data-parte="${x.id}" title="Parte ${x.numero}: ${pctParte(x)}%">
        ${anillo(pctParte(x), x.color)}<span>P${x.numero}</span>
      </button>`).join('');
  }

  // ---------- Menú lateral ----------
  function renderMenu() {
    let html = `<button class="menu-link ${estado.vista === 'inicio' ? 'activo' : ''}" data-inicio>
        <span class="num">⌂</span><span class="info"><span class="tit">Inicio</span></span></button>`;
    PARTES.forEach(p => {
      const actualParte = estado.parteId === p.id;
      const pc = pctParte(p);
      html += `<button class="menu-link ${actualParte && estado.vista === 'parte' ? 'activo' : ''}" data-parte="${p.id}">
          <span class="parte-chip" style="--pc:${p.color}">${p.simbolo}</span>
          <span class="info"><span class="tit">Parte ${p.numero} · ${p.titulo}</span><span class="mini"><span style="width:${pc}%;background:${p.color}"></span></span></span>
          ${pc === 100 ? '<span class="check">✓</span>' : ''}
        </button>`;
      if (actualParte) {
        const cargados = temasDe(p);
        p.plan.forEach((nombre, k) => {
          const t = cargados[k];
          if (!t) {
            html += `<div class="menu-link sub bloqueado"><span class="num">🔒</span><span class="info"><span class="tit">${nombre}</span></span></div>`;
            return;
          }
          const activo = estado.vista === 'tema' && estado.temaId === t.id;
          const pt = pctTema(t);
          html += `<button class="menu-link sub ${activo ? 'activo' : ''}" data-abrir="${t.id}">
              <span class="num">${t.numero}</span>
              <span class="info"><span class="tit">${t.titulo}</span><span class="mini"><span style="width:${pt}%"></span></span></span>
              ${pt === 100 ? '<span class="check">✓</span>' : ''}
            </button>`;
        });
      }
    });
    $('#menu').innerHTML = html;
    const p = parte(estado.parteId);
    $('#resetBtn').textContent = p ? `↺ Reiniciar progreso de la Parte ${p.numero}` : '↺ Reiniciar todo el progreso';
  }

  // ---------- INICIO ----------
  function renderInicio() {
    const ult = tema(estado.ultimo);
    app.innerHTML = `
      <section class="hero nuevo" data-simbolo="√">
        <span class="cap">Razonamiento Matemático · Psicología UMSA</span><br>
        <h1>Aprende paso a paso</h1>
        <p>El curso está dividido en <b>3 partes</b>. Cada una tiene su propio color, su explicación divertida, ejercicios con procedimiento explicado y una zona de práctica extra. Tu avance se guarda solo, así que puedes volver cuando quieras.</p>
        <div class="como">
          <div><b>1.</b> 📘 Aprende con la explicación</div>
          <div><b>2.</b> ✏️ Resuelve los ejercicios</div>
          <div><b>3.</b> 🎯 Practica todo lo que quieras</div>
        </div>
        ${ult ? `<button class="btn primario" data-abrir="${ult.id}">▶ Continuar: ${ult.titulo}</button>` : ''}
      </section>

      <h3 class="grupo-titulo">🗺️ Las 3 partes del curso</h3>
      <div class="partes-grid">
        ${PARTES.map((p, i) => `
          <button class="parte-card nuevo" style="--pc:${p.color};animation-delay:${.1 + i * .1}s" data-parte="${p.id}">
            <div class="parte-top">
              <span class="parte-num">Parte ${p.numero} · ${p.capitulos}</span>
              ${anillo(pctParte(p), p.color, 46)}
            </div>
            <h3>${p.simbolo} ${p.titulo}</h3>
            <ul>${p.plan.map(n => `<li>${n}</li>`).join('')}</ul>
            <span class="ir">${temasDe(p).length ? 'Entrar ▶' : 'Próximamente 🚧'}</span>
          </button>`).join('')}
      </div>`;
  }

  // ---------- PÁGINA DE UNA PARTE ----------
  function renderParte(p) {
    const cargados = temasDe(p);
    app.innerHTML = `
      <section class="hero nuevo" data-simbolo="${p.simbolo}">
        <span class="cap">Parte ${p.numero} · ${p.capitulos}</span><br>
        <h1>${p.titulo}</h1>
        <p>${p.intro}</p>
        <div class="chips">
          <span class="chip">📚 ${p.plan.length} temas</span>
          <span class="chip">✏️ 6 ejercicios por tema</span>
          <span class="chip">🎯 7 de práctica extra</span>
          <span class="chip">📈 Progreso: ${pctParte(p)}%</span>
        </div>
      </section>
      ${cargados.length ? `
      <section class="card nuevo" style="animation-delay:.1s">
        <h2>¿Qué vas a aprender?</h2>
        <p>Cada tema se apoya en el anterior, así que conviene seguirlos en orden:</p>
        <div class="ruta">
          ${p.plan.map((nombre, k) => {
            const t = cargados[k];
            return `<div class="ruta-paso ${t ? '' : 'bloqueado'}">
              <span class="num">${t ? t.numero : '🔒'}</span>
              <div><b>${t ? t.titulo : nombre}</b>${t ? ` <span style="color:var(--suave)">· ${t.capitulo}</span><small>${t.descripcion}</small>` : '<small>Próximamente</small>'}</div>
            </div>`;
          }).join('')}
        </div>
        <p class="nota">💡 Tu progreso de esta parte sube con la <b>explicación</b> y los <b>6 ejercicios</b> de cada tema. La <b>práctica extra</b> es libre: no cuenta, es para que practiques sin presión.</p>
        <div style="text-align:center;margin-top:14px">
          <button class="btn primario" data-abrir="${cargados[0].id}">Comenzar con el Tema ${cargados[0].numero} ▶</button>
        </div>
      </section>
      <h3 class="grupo-titulo">📚 Temas</h3>
      <div class="grid">
        ${cargados.map((t, i) => `
          <button class="tema-card nuevo" style="animation-delay:${.15 + i * .08}s" data-abrir="${t.id}">
            <span class="num">${t.numero}</span>
            <h3>${t.titulo}</h3>
            <p>${t.descripcion}</p>
            <span class="mini"><span style="width:${pctTema(t)}%"></span></span>
            <small>${pctTema(t)}% completado</small>
          </button>`).join('')}
      </div>` : `
      <section class="card construccion nuevo">
        <div class="grande">🚧</div>
        <h2>Esta parte está en construcción</h2>
        <p>Muy pronto tendrá su explicación, ejercicios y práctica. Mientras tanto, mira los temas que vienen:</p>
        <ul style="text-align:left;display:inline-block">${p.plan.map(n => `<li>${n}</li>`).join('')}</ul>
      </section>`}`;
  }

  // ---------- PÁGINA DE UN TEMA ----------
  function renderTema(t) {
    const p = parteNum(t.parte);
    const lista = temasDe(p);
    const idx = lista.indexOf(t);
    const prev = lista[idx - 1], next = lista[idx + 1];
    app.innerHTML = `
      <section class="hero nuevo" data-simbolo="${p.simbolo}">
        <span class="cap">Parte ${p.numero} · ${t.capitulo} · Tema ${t.numero}</span><br>
        <h1>${t.titulo}</h1>
        <p>${t.descripcion}</p>
      </section>
      <div class="tabs">
        <button class="tab ${estado.tab === 'aprender' ? 'on' : ''}" data-tab="aprender">📘 Aprende<small>Explicación</small></button>
        <button class="tab ${estado.tab === 'ejercicios' ? 'on' : ''}" data-tab="ejercicios">✏️ Ejercicios<small><span id="contador">${resueltos(t)}/${t.ejercicios.length}</span> resueltos</small></button>
        <button class="tab ${estado.tab === 'practica' ? 'on' : ''}" data-tab="practica">🎯 Práctica<small>${(t.practica || []).length} extra · libre</small></button>
      </div>
      <div id="contenido"></div>
      <div class="nav-temas">
        ${prev ? `<button class="btn suave" data-abrir="${prev.id}">◀ ${prev.titulo}</button>` : `<button class="btn suave" data-parte="${p.id}">◀ Parte ${p.numero}</button>`}
        ${next ? `<button class="btn suave" data-abrir="${next.id}">${next.titulo} ▶</button>` : `<button class="btn suave" data-parte="${p.id}">Volver a la Parte ${p.numero} ▶</button>`}
      </div>`;
    if (estado.tab === 'ejercicios') renderEjercicios(t);
    else if (estado.tab === 'practica') renderPractica(t);
    else renderAprender(t);
  }

  // ---------- Explicación paso a paso ----------
  function renderAprender(t, desplazar) {
    const total = t.teoria.length;
    if (estado.paso[t.id] === undefined) estado.paso[t.id] = progreso[`${t.id}-teoria`] ? total - 1 : 0;
    const paso = Math.min(estado.paso[t.id], total - 1);
    const fin = paso >= total - 1;

    const tarjetas = t.teoria.slice(0, paso + 1).map((c, i) => `
      <article class="card ${i === paso ? 'nuevo' : ''}">
        <div class="paso-num">Paso ${i + 1} de ${total}</div>
        <h2>${c.titulo}</h2>
        ${c.html}
        ${c.quiz ? renderQuiz(c.quiz, i) : ''}
      </article>`).join('');

    $('#contenido').innerHTML = `
      <div class="stepper">
        <div class="stepper-bar"><span style="width:${(paso + 1) / total * 100}%"></span></div>
        <small>Avance de la explicación: ${paso + 1} de ${total}</small>
      </div>
      ${tarjetas}
      <div class="acciones-teoria">
        ${fin
          ? `<div class="fin-teoria">🏆 ¡Terminaste la explicación de este tema!</div>
             <button class="btn suave" data-repasar>↺ Repasar desde el inicio</button>
             <button class="btn primario" data-tab="ejercicios">Ir a los ejercicios ✏️</button>`
          : `<button class="btn primario" data-siguiente>Siguiente paso ▶</button>`}
      </div>`;

    if (fin && !progreso[`${t.id}-teoria`]) {
      const antes = { tema: pctTema(t), parte: pctParte(parteNum(t.parte)) };
      progreso[`${t.id}-teoria`] = true;
      guardarProg();
      refrescarProgreso();
      const titulo = document.querySelector('.fin-teoria');
      if (titulo) confeti(titulo);
      revisarLogros(t, antes);
    }
    if (desplazar) {
      const nueva = document.querySelector('#contenido .card.nuevo');
      if (nueva) nueva.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Pregunta rápida dentro de un paso de la teoría
  function renderQuiz(q, i) {
    return `<div class="quiz" data-quiz="${i}">
      <div class="quiz-q">🤔 Pregunta rápida: ${q.q}</div>
      <div class="quiz-ops">${q.ops.map((o, k) => `<button class="quiz-op" data-op="${k}">${o}</button>`).join('')}</div>
      <div class="quiz-exp" hidden></div>
    </div>`;
  }
  function responderQuiz(btn) {
    const caja = btn.closest('.quiz');
    const t = tema(estado.temaId);
    const q = t.teoria[+caja.dataset.quiz].quiz;
    const k = +btn.dataset.op;
    const exp = caja.querySelector('.quiz-exp');
    if (k === q.ok) {
      caja.querySelectorAll('.quiz-op').forEach(b => { b.disabled = true; });
      btn.classList.add('bien');
      exp.innerHTML = '✅ ¡Correcto! ' + q.exp;
      confeti(btn, 16);
    } else {
      btn.classList.remove('malo'); void btn.offsetWidth; btn.classList.add('malo');
      exp.innerHTML = '❌ Esa no es. Piensa otra vez 😉';
    }
    exp.hidden = false;
  }

  // ---------- Pasos del procedimiento (qué se hace + por qué) ----------
  function renderPasos(pasos) {
    return pasos.map((p, k) => {
      const lo = typeof p === 'string' ? p : p.lo;
      const porque = typeof p === 'string' ? '' : p.porque;
      return `<li style="--d:${k}"><span class="paso-lo">${lo}</span>${porque ? `<span class="paso-porque">${porque}</span>` : ''}</li>`;
    }).join('');
  }

  // ---------- Zona para responder: escribir o elegir una opción ----------
  function zonaRespuesta(ej, mini, resuelto) {
    if (ej.opciones) {
      return `<div class="opciones">${ej.opciones.map((o, k) =>
        `<button class="opcion ${resuelto && k === ej.correcta ? 'bien' : ''}" data-opcion="${k}" ${resuelto ? 'disabled' : ''}>${o}</button>`).join('')}</div>`;
    }
    return `<div class="responder">
        <input type="text" placeholder="${mini ? 'Tu respuesta…' : 'Escribe tu respuesta…'}" autocomplete="off">
        <button class="btn primario ${mini ? 'chico' : ''}" data-comprobar>Comprobar</button>
      </div>
      ${mini ? '' : '<div class="ayuda-formato">Fracciones con <b>/</b> (ej: -3/2) · decimales con coma (ej: 0,62) · potencias con <b>^</b></div>'}`;
  }

  // ---------- Ejercicios (cuentan para el progreso) ----------
  function renderEjercicios(t) {
    let html = `
      <div class="card toolbar-practica nuevo">
        <span>✏️ <b>Intenta primero tú.</b> Abre el procedimiento solo para comparar; la respuesta se revela al final.</span>
        <button class="btn suave chico" data-todo="abrir">👁 Mostrar procedimientos</button>
        <button class="btn suave chico" data-todo="cerrar">🙈 Ocultar todo</button>
      </div>`;

    ['facil', 'medio', 'dificil'].forEach(nivel => {
      const lista = t.ejercicios.map((ej, i) => ({ ej, i })).filter(x => x.ej.nivel === nivel);
      if (!lista.length) return;
      html += `<h3 class="grupo-titulo">${NIVELES[nivel].emoji} Nivel ${NIVELES[nivel].etiqueta}</h3>`;
      html += lista.map(({ ej, i }) => {
        const ok = progreso[`${t.id}-${i}`] === 'ok';
        return `
        <article class="card ejercicio nuevo ${ok ? 'resuelto' : ''}" style="animation-delay:${i * .05}s" data-tipo="ej" data-i="${i}">
          <header>
            <span class="badge ${nivel}">${NIVELES[nivel].etiqueta}</span>
            <span class="ej-num">Ejercicio ${i + 1}</span>
            <span class="estado-ej">${ok ? '✓ Resuelto' : ''}</span>
          </header>
          <div class="enunciado">${ej.enunciado}</div>
          ${zonaRespuesta(ej, false, ok)}
          <div class="feedback"></div>
          <div class="botones">
            <button class="btn suave" data-toggle="pista">${TEXTOS.pista.abrir}</button>
            <button class="btn suave" data-toggle="proc">${TEXTOS.proc.abrir}</button>
          </div>
          <div class="desplegable" data-panel="pista"><div>
            <div class="pista">💡 ${ej.pista}</div>
          </div></div>
          <div class="desplegable" data-panel="proc"><div>
            <div class="solucion">
              <h4>📝 Procedimiento</h4>
              <ol>${renderPasos(ej.pasos)}</ol>
              <div class="revelar-zona" style="--d:${ej.pasos.length}">
                <button class="btn primario btn-revelar" data-toggle="revelar">${TEXTOS.revelar.abrir}</button>
                <div class="desplegable" data-panel="revelar"><div>
                  <div class="respuesta-box"><small>Respuesta</small>${ej.respuesta}</div>
                </div></div>
              </div>
            </div>
          </div></div>
        </article>`;
      }).join('');
    });
    $('#contenido').innerHTML = html;
  }

  // ---------- Práctica extra (NO cuenta para el progreso) ----------
  function renderPractica(t) {
    const lista = t.practica || [];
    let html = `
      <div class="card aviso-practica nuevo">
        <span class="emoji">🎯</span>
        <span><b>Zona de práctica libre.</b> Son ejercicios nuevos (2 fáciles, 3 medios y 2 difíciles) para reforzar. <b>No cuentan para tu progreso</b>, así que equivócate todo lo que quieras.</span>
      </div>`;
    ['facil', 'medio', 'dificil'].forEach(nivel => {
      const grupo = lista.map((ej, i) => ({ ej, i })).filter(x => x.ej.nivel === nivel);
      if (!grupo.length) return;
      html += `<h3 class="grupo-titulo">${NIVELES[nivel].emoji} ${NIVELES[nivel].etiqueta}</h3><div class="mini-grid">`;
      html += grupo.map(({ ej, i }) => `
        <article class="card mini-ej nuevo" data-tipo="pr" data-i="${i}">
          <header>
            <span class="badge ${nivel}">${NIVELES[nivel].etiqueta}</span>
            <span class="ej-num">Práctica ${i + 1}</span>
          </header>
          <div class="enunciado">${ej.enunciado}</div>
          ${zonaRespuesta(ej, true, false)}
          <div class="feedback"></div>
          <div class="botones">
            <button class="btn suave chico" data-toggle="mproc">${TEXTOS.mproc.abrir}</button>
            <button class="btn suave chico" data-toggle="mresp">${TEXTOS.mresp.abrir}</button>
          </div>
          <div class="desplegable" data-panel="mproc"><div>
            <div class="solucion"><ol>${renderPasos(ej.pasos)}</ol></div>
          </div></div>
          <div class="desplegable" data-panel="mresp"><div>
            <div class="respuesta-box"><small>Respuesta</small>${ej.respuesta}</div>
          </div></div>
        </article>`).join('');
      html += '</div>';
    });
    $('#contenido').innerHTML = html;
  }

  // Abre o cierra un panel (pista, procedimiento, respuesta…)
  function togglePanel(card, nombre, forzar) {
    const panel = card.querySelector(`[data-panel="${nombre}"]`);
    const btn = card.querySelector(`[data-toggle="${nombre}"]`);
    if (!panel || !btn) return;
    const abrir = forzar === undefined ? !panel.classList.contains('abierto') : forzar;
    panel.classList.toggle('abierto', abrir);
    btn.textContent = abrir ? TEXTOS[nombre].cerrar : TEXTOS[nombre].abrir;
    if (nombre === 'revelar') {
      btn.classList.toggle('btn-revelar', !abrir);
      if (abrir) confeti(btn);
    } else {
      btn.classList.toggle('on', abrir);
    }
    // Al cerrar el procedimiento, la respuesta también se oculta
    if (nombre === 'proc' && !abrir) togglePanel(card, 'revelar', false);
  }

  // ---------- Revisar respuesta (escrita o de opción múltiple) ----------
  function comprobar(card, opcion) {
    const t = tema(estado.temaId);
    const i = +card.dataset.i;
    const esPractica = card.dataset.tipo === 'pr';
    const ej = esPractica ? t.practica[i] : t.ejercicios[i];
    const fb = card.querySelector('.feedback');
    const elegido = opcion !== undefined ? card.querySelector(`[data-opcion="${opcion}"]`) : null;
    let correcto;

    if (elegido) {
      correcto = opcion === ej.correcta;
    } else {
      const valor = card.querySelector('input').value;
      if (!valor.trim()) {
        fb.className = 'feedback mal';
        fb.textContent = 'Escribe tu respuesta primero ✍️';
        return;
      }
      correcto = esCorrecta(ej, valor);
    }
    if (!correcto) {
      fb.className = 'feedback mal';
      fb.textContent = '❌ ' + (elegido ? 'Esa no es. Piensa otra vez 😉' : azar(ANIMOS));
      if (elegido) { elegido.classList.remove('malo'); void elegido.offsetWidth; elegido.classList.add('malo'); }
      card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
      return;
    }
    fb.className = 'feedback ok';
    if (elegido) {
      card.querySelectorAll('.opcion').forEach(o => { o.disabled = true; o.classList.remove('malo'); });
      elegido.classList.add('bien');
    }
    confeti(elegido || card.querySelector('[data-comprobar]'));

    if (esPractica) { // práctica: solo felicita, no guarda nada
      fb.textContent = '✅ ' + azar(ELOGIOS);
      card.classList.add('acertado');
      return;
    }
    fb.textContent = '✅ ' + azar(ELOGIOS) + ' Puedes abrir el procedimiento para comparar.';
    card.classList.remove('resuelto'); void card.offsetWidth; card.classList.add('resuelto');
    card.querySelector('.estado-ej').textContent = '✓ Resuelto';
    if (progreso[`${t.id}-${i}`] !== 'ok') {
      const antes = { tema: pctTema(t), parte: pctParte(parteNum(t.parte)) };
      progreso[`${t.id}-${i}`] = 'ok';
      guardarProg();
      $('#contador').textContent = `${resueltos(t)}/${t.ejercicios.length}`;
      refrescarProgreso();
      revisarLogros(t, antes);
    }
  }

  // ---------- Logros: tema al 100 % y parte al 100 % ----------
  function revisarLogros(t, antes) {
    const p = parteNum(t.parte);
    if (antes.parte < 100 && pctParte(p) === 100) {
      setTimeout(() => celebrar(p), 900);
    } else if (antes.tema < 100 && pctTema(t) === 100) {
      toast(`⭐ ¡Tema ${t.numero} completado al 100 %!`);
    }
  }

  function toast(texto) {
    const v = document.querySelector('.toast');
    if (v) v.remove();
    const d = document.createElement('div');
    d.className = 'toast';
    d.textContent = texto;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 3100);
  }

  function celebrar(p) {
    const sig = parteNum(p.numero + 1);
    const fondo = document.createElement('div');
    fondo.className = 'modal-fondo';
    fondo.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-label="Felicitaciones">
        <svg class="carita" viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <radialGradient id="caraGrad" cx="40%" cy="35%" r="70%">
              <stop offset="0%" stop-color="#fff6c8"/><stop offset="100%" stop-color="${p.color}"/>
            </radialGradient>
          </defs>
          <path class="estrella" d="M14 14 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" fill="${p.color}"/>
          <path class="estrella" d="M100 10 l2.5 5.5 6 1 -4.5 4 1 6 -5 -3 -5 3 1 -6 -4.5 -4 6 -1z" fill="#fff"/>
          <circle cx="60" cy="64" r="44" fill="url(#caraGrad)"/>
          <ellipse class="ojo" cx="45" cy="56" rx="5.5" ry="8" fill="#1a1a1a"/>
          <ellipse class="ojo" cx="75" cy="56" rx="5.5" ry="8" fill="#1a1a1a"/>
          <circle cx="47" cy="53" r="2" fill="#fff"/><circle cx="77" cy="53" r="2" fill="#fff"/>
          <circle cx="36" cy="74" r="7" fill="#ff7aa8" opacity=".55"/><circle cx="84" cy="74" r="7" fill="#ff7aa8" opacity=".55"/>
          <path d="M44 76 Q60 94 76 76" stroke="#1a1a1a" stroke-width="5" fill="#7a1f2b" stroke-linecap="round"/>
        </svg>
        <h2>¡Muy bien hecho! 🎉</h2>
        <p>Completaste la <b>Parte ${p.numero}: ${p.titulo}</b> al 100 %.<br>Ya dominas este tema. ¡Tú sí puedes con todo lo que viene! 💪</p>
        <div class="modal-botones">
          ${sig ? `<button class="btn primario" data-modal-ir="${sig.id}">Ir a la Parte ${sig.numero} ▶</button>` : ''}
          <button class="btn suave" data-modal-cerrar>¡Gracias! 😊</button>
        </div>
      </div>`;
    document.body.appendChild(fondo);
    lluviaConfeti();
  }
  function cerrarModal() {
    const m = document.querySelector('.modal-fondo');
    if (m) m.remove();
  }

  // ---------- Navegación ----------
  function refrescarProgreso() { renderTop(); renderMenu(); }

  function ir(vista, opciones) {
    const o = opciones || {};
    const parteAntes = estado.parteId;
    estado.vista = vista;
    if (vista === 'inicio') { estado.parteId = null; estado.temaId = null; }
    if (vista === 'parte') { estado.parteId = o.parteId; estado.temaId = null; }
    if (vista === 'tema') {
      const t = tema(o.temaId);
      estado.temaId = t.id;
      estado.parteId = parteNum(t.parte).id;
      estado.tab = o.tab || 'aprender';
      estado.ultimo = t.id;
    }
    aplicarTema(parte(estado.parteId), parteAntes !== estado.parteId);
    cerrarMenu();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function render() {
    // Si lo guardado ya no existe (por ejemplo, un tema borrado), volver al inicio
    if (estado.vista === 'tema' && !tema(estado.temaId)) estado.vista = estado.parteId ? 'parte' : 'inicio';
    if (estado.vista === 'parte' && !parte(estado.parteId)) estado.vista = 'inicio';
    if (estado.vista === 'inicio') estado.parteId = null;
    guardarEstado();
    renderTop();
    renderMenu();
    if (estado.vista === 'tema') renderTema(tema(estado.temaId));
    else if (estado.vista === 'parte') renderParte(parte(estado.parteId));
    else renderInicio();
  }

  function abrirMenu() { $('#sidebar').classList.add('abierto'); $('#velo').classList.add('abierto'); }
  function cerrarMenu() { $('#sidebar').classList.remove('abierto'); $('#velo').classList.remove('abierto'); }

  // ---------- Eventos ----------
  document.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    const t = tema(estado.temaId);
    const card = b.closest('.ejercicio, .mini-ej');

    if (b.hasAttribute('data-modal-cerrar')) return cerrarModal();
    if (b.dataset.modalIr) { cerrarModal(); return ir('parte', { parteId: b.dataset.modalIr }); }
    if (b.dataset.abrir) return ir('tema', { temaId: b.dataset.abrir });
    if (b.dataset.parte) return ir('parte', { parteId: b.dataset.parte });
    if (b.hasAttribute('data-inicio')) return ir('inicio');
    if (b.dataset.tab) { estado.tab = b.dataset.tab; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (b.hasAttribute('data-siguiente')) { estado.paso[t.id]++; guardarEstado(); renderAprender(t, true); return; }
    if (b.hasAttribute('data-repasar')) { estado.paso[t.id] = 0; guardarEstado(); renderAprender(t); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (b.classList.contains('quiz-op')) return responderQuiz(b);
    if (b.dataset.opcion !== undefined) return comprobar(card, +b.dataset.opcion);
    if (b.hasAttribute('data-comprobar')) return comprobar(card);
    if (b.dataset.toggle) return togglePanel(card, b.dataset.toggle);
    if (b.dataset.todo) {
      const abrir = b.dataset.todo === 'abrir';
      document.querySelectorAll('.ejercicio').forEach(c => togglePanel(c, 'proc', abrir));
      return;
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.matches('.responder input')) comprobar(e.target.closest('.ejercicio, .mini-ej'));
    if (e.key === 'Escape') { cerrarModal(); cerrarMenu(); }
  });

  // Clic fuera de la ventana de felicitación la cierra
  document.addEventListener('click', e => { if (e.target.classList.contains('modal-fondo')) cerrarModal(); });

  $('#goHome').addEventListener('click', () => ir('inicio'));
  $('#menuBtn').addEventListener('click', () => $('#sidebar').classList.contains('abierto') ? cerrarMenu() : abrirMenu());
  $('#velo').addEventListener('click', cerrarMenu);
  $('#resetBtn').addEventListener('click', () => {
    const p = parte(estado.parteId);
    const pregunta = p ? `¿Borrar el progreso de la Parte ${p.numero}?` : '¿Borrar TODO el progreso de las 3 partes?';
    if (!confirm(pregunta)) return;
    if (p) {
      temasDe(p).forEach(t => {
        Object.keys(progreso).forEach(k => { if (k.startsWith(t.id + '-')) delete progreso[k]; });
        delete estado.paso[t.id];
      });
    } else {
      progreso = {};
      estado.paso = {};
    }
    guardarProg();
    render();
  });

  // ---------- Arranque: vuelve a donde se quedó ----------
  if (estado.vista === 'tema' && !tema(estado.temaId)) estado.vista = 'inicio';
  if (estado.vista === 'inicio') estado.parteId = null;
  document.body.dataset.tema = (parte(estado.parteId) || { tema: 'oro' }).tema;
  render();
})();