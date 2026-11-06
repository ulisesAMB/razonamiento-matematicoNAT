// ===== PARTE 3 · TEMA 8: Probabilidad y conjuntos (Capítulo 7) =====

// Diagrama de Venn de dos sucesos A y B dentro de S
const VENN = `
  <svg class="venn" viewBox="0 0 320 180" role="img" aria-label="Diagrama de Venn de A y B">
    <rect x="4" y="4" width="312" height="172" rx="14" style="fill:none;stroke:var(--suave);stroke-width:2"/>
    <text x="16" y="26">S</text>
    <circle cx="125" cy="95" r="62" style="fill:rgba(var(--rgb),.22);stroke:var(--acento);stroke-width:2.5"/>
    <circle cx="195" cy="95" r="62" style="fill:rgba(var(--rgb),.22);stroke:var(--acento-claro);stroke-width:2.5"/>
    <text x="88" y="100">A</text><text x="222" y="100">B</text>
    <text x="146" y="100" style="font-size:13px">A∩B</text>
  </svg>`;

// Casas del ejercicio del texto (pág. 40): (dormitorios, baños)
const CASAS = 'S = {(1,1), (2,1), (2,2), (3,1), (3,2), (3,3)}<br>E = {(2,2), (3,1)} &nbsp;·&nbsp; F = {(2,1), (3,1), (3,2)} &nbsp;·&nbsp; G = {(1,1), (2,1), (2,2)}';

TEMAS.push({
  id: 't8',
  parte: 3,
  numero: 8,
  capitulo: 'Capítulo 7',
  titulo: 'Probabilidad y conjuntos',
  descripcion: 'Experimento aleatorio, espacio muestral, sucesos y sus operaciones: unión, intersección, complemento y diferencia.',

  teoria: [
    {
      titulo: '🎲 ¿Qué es la probabilidad?',
      html: `
        <p>Es un número <b>entre 0 y 1</b> que dice qué tan posible es que algo pase.</p>
        <div class="ejemplo math">0 ≤ P(suceso) ≤ 1</div>
        <ul>
          <li><b>P = 1</b>: es seguro que pasa (suceso cierto). ☀️ "Mañana saldrá el sol".</li>
          <li><b>P = 0</b>: es imposible. 🐷 "Sacar un 7 con un dado normal".</li>
          <li>Mientras más cerca de 1, más probable.</li>
        </ul>
        <p>Cuando todos los resultados tienen la misma oportunidad, se calcula así:</p>
        <div class="ejemplo math">P(A) = ${F('casos favorables', 'casos posibles')} &nbsp;<small>← regla de Laplace</small></div>
        <div class="ejemplo math">P(sacar par con un dado) = ${F(3, 6)} = 0,5 &nbsp;<small>(2, 4 y 6 de 6 caras)</small></div>`,
      quiz: { q: '¿Cuál de estos valores NO puede ser una probabilidad?', ops: ['0,99', '1,2', '0'], ok: 1, exp: 'Una probabilidad nunca pasa de 1 (ni es menor que 0). 1,2 es imposible.' }
    },
    {
      titulo: '🪙 Experimento aleatorio y espacio muestral',
      html: `
        <p><b>Experimento aleatorio:</b> una acción cuyo resultado <b>no se puede predecir con certeza</b>, aunque se repita igual. Por ejemplo: lanzar una moneda, aplicar un test o lanzar un dado.</p>
        <p><b>Espacio muestral (S):</b> la lista de <b>todos</b> los resultados posibles.</p>
        <div class="ejemplo math">Un dado: &nbsp;S = {1, 2, 3, 4, 5, 6}</div>
        <div class="ejemplo math">Dos monedas: &nbsp;S = {(C,C), (C,X), (X,C), (X,X)} &nbsp;<small>← 4 resultados</small></div>
        <div class="analogia"><span class="emoji">🪙</span><span>Ojo: (C,X) y (X,C) son distintos: en uno la cara salió en la primera moneda y en el otro en la segunda.</span></div>`
    },
    {
      titulo: '🎯 Tipos de sucesos',
      html: `
        <p>Un <b>suceso</b> es cualquier grupo (subconjunto) de resultados de S. Con S = {a, b, c, d, e, f}:</p>
        <div class="tabla-scroll"><table>
          <tr><th>Tipo</th><th>Qué es</th><th>Ejemplo</th></tr>
          <tr><td><b>Simple</b></td><td>Tiene un solo elemento</td><td>C = {e}</td></tr>
          <tr><td><b>Compuesto</b></td><td>Tiene dos o más</td><td>A = {b, c}</td></tr>
          <tr><td><b>Seguro</b></td><td>Es todo S (siempre pasa)</td><td>{a, b, c, d, e, f}</td></tr>
          <tr><td><b>Imposible</b></td><td>No tiene elementos de S: ∅</td><td>D = {g, h}</td></tr>
        </table></div>`
    },
    {
      titulo: '🔗 Unión (∪) e intersección (∩)',
      html: `
        ${VENN}
        <p><b>Unión A ∪ B</b> ("A <b>o</b> B"): los elementos que están en A, en B o en los dos. Es <b>todo lo pintado</b>.</p>
        <p><b>Intersección A ∩ B</b> ("A <b>y</b> B"): solo los que están <b>en los dos a la vez</b>. Es el pedacito del medio.</p>
        <p>Ejemplo del texto con S = {a, b, c, d, e, f, g, h, i, j}, A = {c, d, f, g} y B = {a, c, f, i, j}:</p>
        <div class="ejemplo math">A ∪ B = {a, c, d, f, g, i, j} &nbsp;&nbsp; A ∩ B = {c, f}</div>
        <p class="nota">💡 En la unión cada elemento se escribe <b>una sola vez</b>, aunque esté en los dos.</p>`,
      quiz: { q: 'Si A = {1, 2, 3} y B = {3, 4}, ¿qué es A ∩ B?', ops: ['{1, 2, 3, 4}', '{3}', '{1, 2, 4}'], ok: 1, exp: 'El único elemento que está en los dos conjuntos es el 3.' }
    },
    {
      titulo: '🙅 Complemento y diferencia',
      html: `
        <p><b>Complemento A′</b>: todo lo que está en S pero <b>no</b> en A ("no A").</p>
        <div class="ejemplo math">A′ = {a, b, e, h, i, j} &nbsp;&nbsp; B′ = {b, d, e, g, h}</div>
        <p><b>Diferencia A − B</b>: lo que está en A pero <b>no</b> en B ("A quitándole lo de B").</p>
        <div class="ejemplo math">A − B = {d, g} &nbsp;&nbsp; B − A = {a, i, j}</div>
        <p class="alerta">⚠️ La unión y la intersección no cambian si das vuelta el orden (A ∪ B = B ∪ A), pero la diferencia <b>sí</b>: A − B ≠ B − A.</p>`
    },
    {
      titulo: '🚫 Sucesos mutuamente excluyentes',
      html: `
        <p>Dos sucesos son <b>mutuamente excluyentes</b> si <b>no tienen ningún elemento en común</b>:</p>
        <div class="ejemplo math">A ∩ B = ∅</div>
        <div class="analogia"><span class="emoji">🚦</span><span>Un semáforo no puede estar en rojo y en verde al mismo tiempo: si pasa uno, el otro queda excluido.</span></div>
        <div class="ejemplo math">A = {a, f, h} &nbsp;y&nbsp; B = {c, d, e, g} → no comparten nada → excluyentes ✔</div>`,
      quiz: { q: 'Al lanzar un dado, ¿"sacar par" y "sacar 4" son excluyentes?', ops: ['Sí', 'No'], ok: 1, exp: 'El 4 es par: los dos sucesos comparten el 4, así que pueden pasar a la vez.' }
    },
    {
      titulo: '🧮 Las fórmulas de probabilidad',
      html: `
        <p>El texto pide estos cálculos, así que aquí están las reglas:</p>
        <div class="ejemplo math"><b>Complemento:</b> &nbsp;P(A′) = 1 − P(A)</div>
        <div class="ejemplo math"><b>Unión:</b> &nbsp;P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</div>
        <div class="ejemplo math"><b>Si son excluyentes:</b> &nbsp;P(A ∩ B) = 0 → P(A ∪ B) = P(A) + P(B)</div>
        <div class="ejemplo math"><b>Ni A ni B:</b> &nbsp;P(A′ ∩ B′) = 1 − P(A ∪ B)</div>
        <div class="analogia"><span class="emoji">🎨</span><span>¿Por qué se resta P(A ∩ B) en la unión? Mira el diagrama: al sumar A y B, el pedacito del medio se pinta <b>dos veces</b>. Lo restamos una vez para no contarlo doble.</span></div>
        <p class="alerta">⚠️ En el texto (pág. 41, ejercicio 4) se pide P(A ∩ B) dos veces. Seguramente uno de los incisos era otro, como P(A′ ∩ B′).</p>`,
      quiz: { q: 'Si P(A) = 0,3, ¿cuánto es P(A′)?', ops: ['0,3', '0,7', '1,3'], ok: 1, exp: 'P(A′) = 1 − 0,3 = 0,7.' }
    }
  ],

  // ===== EJERCICIOS (del texto, págs. 39 a 41) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: 'Con S = {a, b, c, d, e, f, g, h, i, j}, A = {c, d, f, g} y B = {a, c, f, i, j}: ¿cuántos elementos tiene <b>A ∪ B</b>?',
      valor: 7,
      respuesta: '7 &nbsp;→ {a, c, d, f, g, i, j}',
      pista: 'La unión junta los elementos de los dos conjuntos, pero los repetidos se escriben una sola vez.',
      pasos: [
        P('Juntamos A y B: c, d, f, g, a, c, f, i, j', 'La unión toma todo lo que está en A o en B.'),
        P('Quitamos los repetidos (c y f): {a, c, d, f, g, i, j}', 'En un conjunto cada elemento aparece una sola vez.'),
        P('Son 7 elementos', 'Comprobación: 4 de A + 5 de B − 2 compartidos = 7 ✔')
      ]
    },
    {
      nivel: 'facil',
      enunciado: 'Si <b>P(A) = 0,38</b>, ¿cuánto vale <b>P(A′)</b>?',
      valor: 0.62,
      respuesta: '0,62',
      pista: 'A y "no A" juntos cubren todo lo posible, y todo lo posible tiene probabilidad 1.',
      pasos: [
        P('P(A′) = 1 − P(A)', 'O pasa A o no pasa: entre los dos suman 1.'),
        P('= 1 − 0,38 = 0,62', 'Restamos.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: 'A y B son <b>mutuamente excluyentes</b>, con P(A) = 0,38 y P(B) = 0,42. ¿Cuánto vale <b>P(A ∪ B)</b>?',
      valor: 0.8,
      respuesta: '0,80',
      pista: 'Si son excluyentes, ¿cuánto vale P(A ∩ B)? Úsalo en la fórmula de la unión.',
      pasos: [
        P('Excluyentes → P(A ∩ B) = 0', 'No tienen nada en común, así que no pueden pasar juntos.'),
        P('P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 'Fórmula general de la unión.'),
        P('= 0,38 + 0,42 − 0 = 0,80', 'No hay nada que descontar porque no hay parte compartida.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: 'P(A) = 0,15, P(B) = 0,45 y <b>P(A ∩ B) = 0,15</b>. ¿Cuánto vale <b>P(A ∪ B)</b>?',
      valor: 0.45,
      respuesta: '0,45',
      pista: 'Ahora sí hay una parte compartida: réstala una vez para no contarla doble.',
      pasos: [
        P('P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 'La parte del medio se contó dos veces al sumar A y B.'),
        P('= 0,15 + 0,45 − 0,15 = 0,45', 'Sumamos y restamos la intersección.'),
        P('Curioso: P(A ∩ B) = P(A)', 'Significa que A está completamente dentro de B; por eso la unión es igual a P(B).')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: 'Con los mismos datos (P(A) = 0,15, P(B) = 0,45, P(A ∩ B) = 0,15), ¿cuál es la probabilidad de que <b>no pase ni A ni B</b>, es decir <b>P(A′ ∩ B′)</b>?',
      valor: 0.55,
      respuesta: '0,55',
      pista: '"Ni A ni B" es lo que queda afuera de los dos círculos del diagrama. Es el complemento de la unión.',
      pasos: [
        P('A′ ∩ B′ = lo que está fuera de A y fuera de B', 'En el diagrama de Venn es la zona afuera de los dos círculos.'),
        P('Esa zona es el complemento de A ∪ B', 'Todo lo que no está en la unión.'),
        P('P(A′ ∩ B′) = 1 − P(A ∪ B) = 1 − 0,45 = 0,55', 'Usamos la unión del ejercicio anterior.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Un estudiante busca casa (dormitorios, baños): <div class="ejemplo math" style="font-size:.95em">${CASAS}</div> ¿Qué par de sucesos es <b>mutuamente excluyente</b>?`,
      opciones: ['E y F', 'E y G', 'E y F ∩ G'],
      correcta: 2,
      respuesta: 'E y F ∩ G',
      pista: 'Para cada par, busca si comparten algún elemento. Para el tercero, primero calcula F ∩ G.',
      pasos: [
        P('E ∩ F = {(3,1)} → comparten algo', 'No son excluyentes.'),
        P('E ∩ G = {(2,2)} → comparten algo', 'Tampoco son excluyentes.'),
        P('F ∩ G = {(2,1)}', 'Lo único que está en F y en G a la vez.'),
        P('E ∩ {(2,1)} = ∅ → no comparten nada', 'E no contiene (2,1), así que E y F ∩ G sí son mutuamente excluyentes.')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (propia, no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: 'La probabilidad de que llueva mañana es 0,3. ¿Cuál es la probabilidad de que <b>no</b> llueva?',
      valor: 0.7,
      respuesta: '0,7',
      pasos: [P('P(no llueva) = 1 − 0,3 = 0,7', 'Llover y no llover juntos suman 1.')]
    },
    {
      nivel: 'facil',
      enunciado: 'Lanzas un dado. ¿Cuál es la probabilidad de sacar <b>más de 4</b>?',
      valor: 1 / 3,
      respuesta: `${F(2, 6)} = ${F(1, 3)} ≈ 0,33`,
      pasos: [
        P('Casos favorables: 5 y 6 → 2', '"Más de 4" no incluye al 4.'),
        P(`P = ${F(2, 6)} = ${F(1, 3)}`, 'Favorables entre posibles (6 caras), y simplificamos.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: 'S = {1, …, 8}, A = {2, 4, 6, 8}, B = {1, 2, 3, 4}. ¿Cuántos elementos tiene <b>A ∩ B</b>?',
      valor: 2,
      respuesta: '2 &nbsp;→ {2, 4}',
      pasos: [P('Los que están en los dos: 2 y 4', 'La intersección es lo común.')]
    },
    {
      nivel: 'medio',
      enunciado: 'Con los mismos conjuntos, ¿cuántos elementos tiene <b>A ∪ B</b>?',
      valor: 6,
      respuesta: '6 &nbsp;→ {1, 2, 3, 4, 6, 8}',
      pasos: [P('4 + 4 − 2 = 6', 'Sumamos los de A y B y restamos los 2 que se repiten.')]
    },
    {
      nivel: 'medio',
      enunciado: 'P(A) = 0,5, P(B) = 0,4 y P(A ∩ B) = 0,2. ¿Cuánto vale <b>P(A ∪ B)</b>?',
      valor: 0.7,
      respuesta: '0,7',
      pasos: [P('0,5 + 0,4 − 0,2 = 0,7', 'Fórmula de la unión: restamos la parte que se contó dos veces.')]
    },
    {
      nivel: 'dificil',
      enunciado: 'Con los mismos datos, ¿cuánto vale <b>P(A′ ∩ B′)</b> (que no pase ninguno)?',
      valor: 0.3,
      respuesta: '0,3',
      pasos: [P('1 − P(A ∪ B) = 1 − 0,7 = 0,3', '"Ni A ni B" es el complemento de la unión.')]
    },
    {
      nivel: 'dificil',
      enunciado: 'Lanzas <b>dos monedas</b>. ¿Cuál es la probabilidad de obtener <b>al menos una cara</b>?',
      valor: 0.75,
      respuesta: `${F(3, 4)} = 0,75`,
      pasos: [
        P('S = {(C,C), (C,X), (X,C), (X,X)}', '4 resultados igual de posibles.'),
        P('Con al menos una cara: (C,C), (C,X), (X,C) → 3', 'Solo (X,X) no tiene cara.'),
        P(`P = ${F(3, 4)} = 0,75`, 'Otra forma: 1 − P(ninguna cara) = 1 − ¼ = ¾.')
      ]
    }
  ]
});