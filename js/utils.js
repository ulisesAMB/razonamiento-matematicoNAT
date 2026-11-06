// ===== HERRAMIENTAS COMPARTIDAS =====

// Lista global donde cada archivo de tema se registra
window.TEMAS = [];

// Dibuja una fracción apilada: F(3, 4) muestra 3 sobre 4
function F(numerador, denominador) {
  return `<span class="frac"><span>${numerador}</span><span>${denominador}</span></span>`;
}

// Un paso del procedimiento: lo que se hace + por qué se hace
function P(loQueHacemos, porQue) {
  return { lo: loQueHacemos, porque: porQue };
}

// Convierte el texto del alumno a número: acepta "7", "-3/2", "1,5", "−8"
function parseNumero(texto) {
  const s = texto.trim().replace(/\s/g, '').replace(/−/g, '-').replace(',', '.');
  const frac = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (frac) return parseFloat(frac[1]) / parseFloat(frac[2]);
  return s === '' ? NaN : Number(s);
}

// Normaliza respuestas con letras: "-ABC d" -> "-abcd"
function normalizar(texto) {
  return texto.toLowerCase().replace(/\s/g, '').replace(/−/g, '-').replace(/[*·]/g, '');
}

// Revisa si la respuesta es correcta (por número o por texto aceptado)
function esCorrecta(ej, texto) {
  if (ej.acepta && ej.acepta.map(normalizar).includes(normalizar(texto))) return true;
  if (typeof ej.valor === 'number') {
    const n = parseNumero(texto);
    if (isNaN(n)) return false;
    if (Math.abs(n - ej.valor) < (ej.tolerancia || 1e-6)) return true;
    // Decimal redondeado (ej: −16/9 ≈ −1,78): se acepta si está bien redondeado
    // a los decimales que escribió (mínimo 2) y no se aleja más del 1 %.
    const dec = texto.trim().replace(/−/g, '-').match(/^-?\d+[.,](\d{2,})$/);
    if (dec && ej.valor !== 0) {
      const bienRedondeado = Math.abs(n - ej.valor) <= 0.5 * Math.pow(10, -dec[1].length) + 1e-9;
      const cerca = Math.abs((n - ej.valor) / ej.valor) <= 0.01;
      return bienRedondeado && cerca;
    }
  }
  return false;
}

// Confeti que estalla desde un elemento (al acertar)
function confeti(elemento, cantidad) {
  const r = elemento.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  for (let i = 0; i < (cantidad || 28); i++) {
    const p = document.createElement('span');
    p.className = 'confeti';
    p.style.left = cx + 'px';
    p.style.top = cy + 'px';
    const ang = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 110;
    p.style.setProperty('--x', Math.cos(ang) * dist + 'px');
    p.style.setProperty('--y', Math.sin(ang) * dist + 'px');
    p.style.setProperty('--r', Math.random() * 720 + 'deg');
    p.style.width = p.style.height = (5 + Math.random() * 6) + 'px';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1000);
  }
}

// Lluvia de confeti en toda la pantalla (para las felicitaciones)
function lluviaConfeti() {
  for (let i = 0; i < 90; i++) {
    const p = document.createElement('span');
    p.className = 'confeti-lluvia';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDelay = Math.random() * 1.2 + 's';
    p.style.animationDuration = 2 + Math.random() * 1.8 + 's';
    p.style.width = (6 + Math.random() * 6) + 'px';
    p.style.height = (8 + Math.random() * 8) + 'px';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 4500);
  }
}


// Símbolo de sumatoria con sus límites: SUM('n', 'i = 1')
function SUM(arriba, abajo) {
  return `<span class="sigma"><span class="s-ar">${arriba || ''}</span><span class="s-sim">Σ</span><span class="s-ab">${abajo || ''}</span></span>`;
}