// ===== PARTE 1 · TEMA 2: Orden de operaciones (Capítulo 2) =====
TEMAS.push({
  id: 't2',
  parte: 1,
  numero: 2,
  capitulo: 'Capítulo 2',
  titulo: 'Orden de operaciones',
  descripcion: 'Qué se resuelve primero, cómo usar paréntesis y corchetes y cómo eliminarlos.',

  teoria: [
    {
      titulo: '🍳 ¿Por qué importa el orden?',
      html: `
        <p>Mira esta operación: <span class="math">2 + 3 × 4</span>. Dos personas la resuelven distinto:</p>
        <div class="ejemplo math">❌ Sumando primero: (2 + 3) × 4 = 20</div>
        <div class="ejemplo math">✅ Multiplicando primero: 2 + 12 = 14</div>
        <div class="analogia"><span class="emoji">🍳</span><span>Es como una receta: si fríes el huevo antes de romperlo, sale un desastre. En matemáticas hay un <b>orden acordado</b> para que todos lleguemos al mismo resultado. La respuesta correcta es <b>14</b>.</span></div>`
    },
    {
      titulo: '🪜 La escalera de la jerarquía',
      html: `
        <p>Se sube por esta escalera, de arriba hacia abajo:</p>
        <ol>
          <li><b>Paréntesis ( ) y corchetes [ ]</b>, de adentro hacia afuera.</li>
          <li><b>Potencias y raíces.</b></li>
          <li><b>Multiplicación × y división ÷</b>, de izquierda a derecha.</li>
          <li><b>Suma + y resta −</b>, de izquierda a derecha.</li>
        </ol>
        <div class="analogia"><span class="emoji">🧠</span><span>Truco para recordarlo: "<b>Pa</b>pá <b>Po</b>ne <b>Mu</b>cho <b>Su</b>shi 🍣" → <b>Pa</b>réntesis, <b>Po</b>tencias, <b>Mu</b>ltiplicar/dividir, <b>Su</b>mar/restar.</span></div>`,
      quiz: { q: '¿Cuánto es 10 − 2 × 3?', ops: ['24', '4', '18'], ok: 1, exp: 'Primero la multiplicación (2 × 3 = 6) y después la resta: 10 − 6 = 4.' }
    },
    {
      titulo: '🔀 Hermanos del mismo nivel: de izquierda a derecha',
      html: `
        <p>La multiplicación y la división están en el <b>mismo escalón</b>. Ninguna gana: se hacen en el orden en que aparecen, <b>de izquierda a derecha</b>. Lo mismo pasa con la suma y la resta.</p>
        <div class="ejemplo math">12 ÷ 3 × 2 = 4 × 2 = 8 &nbsp;<small>✅</small></div>
        <div class="ejemplo math">12 ÷ (3 × 2) = 12 ÷ 6 = 2 &nbsp;<small>← solo si hay paréntesis</small></div>
        <div class="ejemplo math">10 − 4 + 3 = 6 + 3 = 9 &nbsp;<small>(no 10 − 7 = 3)</small></div>`,
      quiz: { q: '¿Cuánto es 20 ÷ 5 × 2?', ops: ['2', '8'], ok: 1, exp: 'De izquierda a derecha: 20 ÷ 5 = 4 y luego 4 × 2 = 8.' }
    },
    {
      titulo: '🔁 El orden de los factores no altera el producto',
      html: `
        <p>En la suma y en la multiplicación puedes cambiar el orden sin problema (se llama propiedad <b>conmutativa</b>):</p>
        <div class="ejemplo math">6 + 4 + 11 = 11 + 6 + 4 = 21</div>
        <div class="ejemplo math">3 × 5 × 8 = 8 × 5 × 3 = 120</div>
        <p class="alerta">⚠️ Con la resta y la división <b>no</b> funciona: 8 − 3 = 5, pero 3 − 8 = −5.</p>`
    },
    {
      titulo: '🪆 Paréntesis dentro de corchetes',
      html: `
        <p>Lo que está dentro de un paréntesis cuenta como <b>un solo número</b>. Se resuelve como las muñecas rusas: <b>de la más pequeña (adentro) hacia afuera</b>.</p>
        <div class="ejemplo math">[(4)(6 − 3 + 2) + 6] [2]</div>
        <div class="ejemplo math">= [(4)(5) + 6] [2] &nbsp;<small>← primero el paréntesis</small></div>
        <div class="ejemplo math">= [20 + 6] [2] &nbsp;<small>← la multiplicación dentro del corchete</small></div>
        <div class="ejemplo math">= [26] [2] = 52</div>
        <p class="nota">💡 Dos paréntesis o corchetes pegados, como [26][2], significan <b>multiplicación</b>.</p>`
    },
    {
      titulo: '🎭 Quitar paréntesis según el signo de adelante',
      html: `
        <p><b>Si hay un + delante</b>, el paréntesis se quita y los signos de adentro no cambian:</p>
        <div class="ejemplo math">1 + (3 + 5 − 2) = 1 + 3 + 5 − 2 = 7</div>
        <p><b>Si hay un − delante</b>, el paréntesis se quita y <b>todos los signos de adentro cambian</b>:</p>
        <div class="ejemplo math">4 − (6 − 2 − 1) = 4 − 6 + 2 + 1 = 1</div>
        <div class="analogia"><span class="emoji">🎭</span><span>El "−" de afuera es como un hechizo que da vuelta a todos los que están adentro: los + se vuelven − y los − se vuelven +.</span></div>`,
      quiz: { q: 'Al quitar el paréntesis, ¿qué queda de 9 − (4 − 1)?', ops: ['9 − 4 − 1', '9 − 4 + 1', '9 + 4 − 1'], ok: 1, exp: 'El − de adelante cambia los dos signos: +4 pasa a −4 y −1 pasa a +1. El resultado es 6.' }
    },
    {
      titulo: '🎁 Propiedad distributiva',
      html: `
        <p>Si un número multiplica a un paréntesis, <b>multiplica a cada término de adentro</b>, como quien reparte regalos a todos:</p>
        <div class="ejemplo math">3(2 + 3 − 4) = 6 + 9 − 12 = 3 &nbsp;<small>✔ igual que 3 × 1 = 3</small></div>
        <div class="ejemplo math">a(b + c + d) = ab + ac + ad</div>
        <p>Cuando se multiplican dos sumas, va "todos con todos":</p>
        <div class="ejemplo math">(a + b)(c + d) = ac + ad + bc + bd</div>
        <div class="ejemplo math">(2 + 3)(4 + 1) = 8 + 2 + 12 + 3 = 25 &nbsp;<small>✔ igual que 5 × 5</small></div>`
    },
    {
      titulo: '🧅 Método de capas (para ejercicios largos)',
      html: `
        <p>Los ejercicios largos son como una cebolla: se pelan <b>capa por capa</b>.</p>
        <ol>
          <li>Resuelve <b>todos los paréntesis</b> más internos.</li>
          <li>Resuelve lo que queda <b>dentro de cada corchete</b>.</li>
          <li>Multiplica o divide los corchetes entre sí.</li>
          <li>Al final, suma y resta.</li>
        </ol>
        <div class="ejemplo math">5 + 4(3 + 1) + 6 = 5 + 4(4) + 6 = 5 + 16 + 6 = 27</div>
        <p class="nota">💡 Escribe una línea nueva por cada paso. Así los errores de signo se ven al instante.</p>`
    }
  ],

  // ===== EJERCICIOS (cuentan para el progreso) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: `<span class="math">5 + (4 × 3) − (6 × 6) = ?</span>`,
      valor: -19,
      respuesta: '−19',
      pista: 'Los paréntesis van primero: cada uno se convierte en un solo número. Después solo te quedan sumas y restas, de izquierda a derecha.',
      pasos: [
        P('4 × 3 = 12 &nbsp;y&nbsp; 6 × 6 = 36', 'Los paréntesis son el primer escalón de la jerarquía.'),
        P('Queda: 5 + 12 − 36', 'Cada paréntesis ya es un solo número.'),
        P('5 + 12 = 17', 'Suma y resta están en el mismo escalón: se hacen de izquierda a derecha.'),
        P('17 − 36 = −19', 'Como 36 es mayor que 17, el resultado es negativo: 36 − 17 = 19.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `<span class="math">12 ÷ 4 + 2 × 3 = ?</span>`,
      valor: 9,
      respuesta: '9',
      pista: 'No hay paréntesis, así que decide la jerarquía: la división y la multiplicación se resuelven antes que la suma.',
      pasos: [
        P('12 ÷ 4 = 3', 'La división va antes que la suma.'),
        P('2 × 3 = 6', 'La multiplicación también va antes que la suma.'),
        P('3 + 6 = 9', 'Al final, la suma. Si hubiéramos sumado primero (4 + 2) el resultado saldría mal.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">[5 + (4 × 3) − (6 × 6)] × [3 × (5 + 6)] + 10 = ?</span>`,
      valor: -617,
      respuesta: '−617',
      pista: 'Trata cada corchete como un mini ejercicio separado. Recuerda que negativo × positivo da negativo, y que el + 10 se suma recién al final.',
      pasos: [
        P('Primer corchete: 5 + 12 − 36 = −19', 'Es el mismo cálculo del ejercicio 1: primero los paréntesis de adentro.'),
        P('Segundo corchete: 3 × (5 + 6) = 3 × 11 = 33', 'Primero el paréntesis (5 + 6) y luego la multiplicación.'),
        P('(−19) × 33 = −627', 'Hay 1 negativo (impar), así que el resultado es negativo; 19 × 33 = 627.'),
        P('−627 + 10 = −617', 'La suma va al final porque es el último escalón de la jerarquía.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">(6 − 2)(3 + 1) − (${F(7, '−2')}) + (${F(7, '−2')}) + 4(−3)(−2) = ?</span>`,
      valor: 40,
      respuesta: '40',
      pista: 'Mira las dos fracciones: son iguales, pero a una la restas y a la otra la sumas. ¿Qué pasa si a algo le quitas y le pones lo mismo?',
      pasos: [
        P('(6 − 2)(3 + 1) = (4)(4) = 16', 'Primero cada paréntesis; dos paréntesis pegados significan multiplicación.'),
        P(`−(${F(7, '−2')}) + (${F(7, '−2')}) = 0`, 'Restar algo y sumar lo mismo se cancela, sin importar cuánto valga.'),
        P('4(−3)(−2) = +24', 'Hay 2 negativos (par) → positivo; 4 × 3 × 2 = 24.'),
        P('16 + 0 + 24 = 40', 'Sumamos las tres partes.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">[15 + (4 × 2) − (5 × 6 + 5)] × [3 × (5 + 6) × (8 − 12)] + 20 = ?</span>`,
      valor: 1604,
      respuesta: '1604',
      pista: 'Primero resuelve los cuatro paréntesis pequeños (dentro de (5 × 6 + 5) también va la multiplicación antes que la suma). Ojo: (8 − 12) da negativo.',
      pasos: [
        P('4 × 2 = 8; &nbsp;5 × 6 + 5 = 30 + 5 = 35; &nbsp;5 + 6 = 11; &nbsp;8 − 12 = −4', 'Capa 1: todos los paréntesis internos. Dentro de cada uno también se respeta la jerarquía.'),
        P('Primer corchete: 15 + 8 − 35 = −12', 'Capa 2: lo que queda adentro del corchete, de izquierda a derecha.'),
        P('Segundo corchete: 3 × 11 × (−4) = −132', 'Hay 1 negativo (impar) → negativo; 3 × 11 × 4 = 132.'),
        P('(−12) × (−132) = 1584', 'Capa 3: multiplicamos los corchetes. 2 negativos → positivo.'),
        P('1584 + 20 = 1604', 'Capa 4: la suma final.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">−3 · [2 + ${F(5, 2)}] + 7 − 2 · (−4 + 1) = ?</span>`,
      valor: -0.5,
      respuesta: `−${F(1, 2)} = −0,5`,
      pista: 'Para sumar 2 + 5/2, escribe el 2 como fracción con denominador 2. En la otra parte resuelve primero el paréntesis, y cuidado con "−2 por un número negativo".',
      pasos: [
        P(`2 + ${F(5, 2)} = ${F(4, 2)} + ${F(5, 2)} = ${F(9, 2)}`, 'Para sumar un entero con una fracción, lo convertimos a la misma "unidad": 2 enteros son 4 medios.'),
        P(`−3 · ${F(9, 2)} = −${F(27, 2)}`, 'Un entero por una fracción multiplica solo al numerador. Un negativo → resultado negativo.'),
        P('(−4 + 1) = −3 &nbsp;→&nbsp; −2 · (−3) = +6', 'Primero el paréntesis; luego 2 negativos dan positivo.'),
        P(`−${F(27, 2)} + 7 + 6 = −${F(27, 2)} + 13`, 'Juntamos los enteros: 7 + 6 = 13.'),
        P(`13 = ${F(26, 2)} &nbsp;→&nbsp; −${F(27, 2)} + ${F(26, 2)} = −${F(1, 2)}`, 'Pasamos 13 a medios para restar: −27 + 26 = −1.')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: `<span class="math">20 − 4 × 3 + 1 = ?</span>`,
      valor: 9,
      respuesta: '9',
      pasos: [
        P('4 × 3 = 12', 'La multiplicación va primero.'),
        P('20 − 12 + 1 = 8 + 1 = 9', 'Luego resta y suma, de izquierda a derecha.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `<span class="math">(8 + 4) ÷ 3 − 2 = ?</span>`,
      valor: 2,
      respuesta: '2',
      pasos: [
        P('(8 + 4) = 12', 'Primero el paréntesis.'),
        P('12 ÷ 3 = 4 → 4 − 2 = 2', 'Luego la división y al final la resta.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">18 ÷ 3 × 2 − 5 = ?</span>`,
      valor: 7,
      respuesta: '7',
      pasos: [
        P('18 ÷ 3 = 6 → 6 × 2 = 12', 'División y multiplicación están en el mismo escalón: de izquierda a derecha.'),
        P('12 − 5 = 7', 'La resta va al final.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">7 − (3 − 9 + 2) = ?</span>`,
      valor: 11,
      respuesta: '11',
      pasos: [
        P('7 − 3 + 9 − 2', 'El − de adelante cambia todos los signos de adentro.'),
        P('4 + 9 − 2 = 11', 'De izquierda a derecha. (Comprobación: adentro da −4, y 7 − (−4) = 11 ✔)')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">4(2 − 5) − 3(−1 − 2) = ?</span>`,
      valor: -3,
      respuesta: '−3',
      pasos: [
        P('(2 − 5) = −3 &nbsp;y&nbsp; (−1 − 2) = −3', 'Primero los paréntesis.'),
        P('4(−3) = −12 &nbsp;y&nbsp; −3(−3) = +9', 'Luego las multiplicaciones con su regla de signos.'),
        P('−12 + 9 = −3', 'Signos distintos: se restan y gana el 12 (negativo).')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">[2 × (6 − 9) + 4] × [(−3)(2) − 1] = ?</span>`,
      valor: 14,
      respuesta: '14',
      pasos: [
        P('Primer corchete: 2 × (−3) + 4 = −6 + 4 = −2', 'Paréntesis, luego multiplicación, luego suma.'),
        P('Segundo corchete: −6 − 1 = −7', 'Primero (−3)(2) = −6.'),
        P('(−2) × (−7) = 14', '2 negativos → positivo.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">5 − 2[3 − (4 − 7) × 2] = ?</span>`,
      valor: -13,
      respuesta: '−13',
      pasos: [
        P('(4 − 7) = −3', 'El paréntesis más interno.'),
        P('(−3) × 2 = −6 → 3 − (−6) = 9', 'Dentro del corchete, la multiplicación va antes que la resta.'),
        P('2 × 9 = 18', 'El 2 pegado al corchete multiplica.'),
        P('5 − 18 = −13', 'La resta va al final.')
      ]
    }
  ]
});