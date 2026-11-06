// ===== PARTE 2 · TEMA 6: Doble sumatoria ΣΣ (Capítulo 5) =====

// Tabla del texto (pág. 31): 3 personas (i) × 2 pruebas (j)
const TABLA_T6 = `
  <div class="tabla-scroll"><table style="max-width:340px">
    <tr><th></th><th>Prueba 1 (j=1)</th><th>Prueba 2 (j=2)</th></tr>
    <tr><th>Persona 1</th><td>X<sub>11</sub> = 2</td><td>X<sub>12</sub> = 1</td></tr>
    <tr><th>Persona 2</th><td>X<sub>21</sub> = −1</td><td>X<sub>22</sub> = 2</td></tr>
    <tr><th>Persona 3</th><td>X<sub>31</sub> = 3</td><td>X<sub>32</sub> = −2</td></tr>
  </table></div>`;

// Tabla propia para la práctica: 2 personas × 3 pruebas
const TABLA_P6 = `
  <div class="tabla-scroll"><table style="max-width:380px">
    <tr><th></th><th>j = 1</th><th>j = 2</th><th>j = 3</th></tr>
    <tr><th>i = 1</th><td>4</td><td>−2</td><td>1</td></tr>
    <tr><th>i = 2</th><td>0</td><td>3</td><td>5</td></tr>
  </table></div>`;

TEMAS.push({
  id: 't6',
  parte: 2,
  numero: 6,
  capitulo: 'Capítulo 5',
  titulo: 'Doble sumatoria',
  descripcion: 'Sumar datos ordenados en una tabla (personas × pruebas) con ΣΣ.',

  teoria: [
    {
      titulo: '🎬 Datos en forma de tabla',
      html: `
        <p>A veces los datos no son una lista, sino una <b>tabla</b>: varias personas que dan varias pruebas, o varios grupos con varias personas.</p>
        <p>Para ubicar cada dato se usan <b>dos subíndices</b>: X<sub>ij</sub>.</p>
        <ul>
          <li><b>i</b> = la fila (la persona).</li>
          <li><b>j</b> = la columna (la prueba o el grupo).</li>
        </ul>
        <div class="analogia"><span class="emoji">🎬</span><span>Es como la entrada del cine: "fila 3, asiento 2". X<sub>32</sub> es el dato de la <b>persona 3</b> en la <b>prueba 2</b>. ¡Primero la fila, después la columna!</span></div>
        ${TABLA_T6}`,
      quiz: { q: 'En la tabla de arriba, ¿cuánto vale X<sub>21</sub>?', ops: ['1', '−1', '2'], ok: 1, exp: 'Fila 2 (persona 2), columna 1 (prueba 1): X₂₁ = −1.' }
    },
    {
      titulo: '📊 Sumar una columna o una fila',
      html: `
        <p>Con una <b>sola Σ</b> sumas una columna o una fila.</p>
        <p><b>Total de la prueba 1</b> (toda la columna j = 1, varía i):</p>
        <div class="ejemplo math">${SUM(3, 'i = 1')} X<sub>i1</sub> = X<sub>11</sub> + X<sub>21</sub> + X<sub>31</sub> = 2 + (−1) + 3 = 4</div>
        <p><b>Total de la persona 1</b> (toda la fila i = 1, varía j):</p>
        <div class="ejemplo math">${SUM(2, 'j = 1')} X<sub>1j</sub> = X<sub>11</sub> + X<sub>12</sub> = 2 + 1 = 3</div>
        <p class="nota">💡 Mira qué índice está escrito <b>debajo de la Σ</b>: ese es el que va cambiando. El otro se queda fijo.</p>`
    },
    {
      titulo: '🧺 La doble suma: el total de todo',
      html: `
        <div class="ejemplo math">${SUM(2, 'j = 1')}${SUM(3, 'i = 1')} X<sub>ij</sub> = suma de <b>todas</b> las casillas</div>
        <p>Se lee de adentro hacia afuera: primero se suma cada columna y después se suman esos totales.</p>
        <div class="ejemplo math">Columna 1: 2 − 1 + 3 = 4 &nbsp;&nbsp; Columna 2: 1 + 2 − 2 = 1 &nbsp;&nbsp;→&nbsp; Total = 4 + 1 = <b>5</b></div>
        <div class="analogia"><span class="emoji">🧺</span><span>Es como contar huevos en una caja: puedes contar fila por fila o columna por columna. <b>Siempre te da el mismo total.</b></span></div>
        <p>Por eso el texto dice que el orden no importa:</p>
        <div class="ejemplo math">${SUM('k', 'j = 1')}${SUM('n', 'i = 1')} X<sub>ij</sub> = ${SUM('n', 'i = 1')}${SUM('k', 'j = 1')} X<sub>ij</sub></div>
        <div class="ejemplo math">Por filas: (2 + 1) + (−1 + 2) + (3 − 2) = 3 + 1 + 1 = <b>5</b> ✔</div>`,
      quiz: { q: 'Si una tabla tiene 3 filas y 4 columnas, ¿cuántos términos suma ΣΣX<sub>ij</sub>?', ops: ['7', '12', '4'], ok: 1, exp: 'Suma todas las casillas: 3 × 4 = 12 datos.' }
    },
    {
      titulo: '✨ Cuadrados en la doble suma',
      html: `
        <p>Las reglas son las mismas que en la sumatoria simple. Fíjate dónde está el ²:</p>
        <p><b>ΣΣ X<sub>ij</sub><sup>2</sup></b>: cada casilla al cuadrado y después sumas.</p>
        <div class="ejemplo math">4 + 1 + 1 + 4 + 9 + 4 = 23</div>
        <p><b>(ΣΣ X<sub>ij</sub>)<sup>2</sup></b>: primero el total y después al cuadrado.</p>
        <div class="ejemplo math">5<sup>2</sup> = 25 &nbsp;≠ 23</div>
        <p><b>Σ<sub>i</sub> (Σ<sub>j</sub> X<sub>ij</sub>)<sup>2</sup></b>: el total de <b>cada fila</b> al cuadrado y después sumas.</p>
        <div class="ejemplo math">Filas: 3, 1, 1 → 3<sup>2</sup> + 1<sup>2</sup> + 1<sup>2</sup> = 9 + 1 + 1 = 11</div>`
    },
    {
      titulo: '📝 Propiedades que también valen aquí',
      html: `
        <p>Si la tabla tiene N casillas en total (filas × columnas):</p>
        <div class="ejemplo math">ΣΣ c·X<sub>ij</sub> = c · ΣΣ X<sub>ij</sub></div>
        <div class="ejemplo math">ΣΣ k = N · k</div>
        <div class="ejemplo math">ΣΣ (c·X<sub>ij</sub> + k) = c · ΣΣ X<sub>ij</sub> + N · k</div>
        <p class="alerta">⚠️ Error del texto (pág. 31): en la segunda columna escribe "X<sub>31</sub> = −2". Debe ser <b>X<sub>32</sub> = −2</b> (persona 3, prueba 2). Aquí ya está corregido.</p>`
    }
  ],

  // ===== EJERCICIOS (tabla del texto, pág. 31) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: `Con esta tabla, calcula <span class="math">ΣΣ X<sub>ij</sub></span> ${TABLA_T6}`,
      valor: 5,
      respuesta: '5',
      pista: 'Es la suma de todas las casillas. Puedes sumar cada columna y luego los dos totales.',
      pasos: [
        P('Columna 1: 2 + (−1) + 3 = 4', 'La Σ de adentro suma las personas de la prueba 1.'),
        P('Columna 2: 1 + 2 + (−2) = 1', 'Lo mismo con la prueba 2.'),
        P('4 + 1 = 5', 'La Σ de afuera suma los totales de las columnas.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `Con la misma tabla, calcula <span class="math">${SUM(3, 'i = 1')} X<sub>i2</sub></span> (el total de la prueba 2) ${TABLA_T6}`,
      valor: 1,
      respuesta: '1',
      pista: 'El índice que cambia es i (las personas). La j está fija en 2: solo sumas la segunda columna.',
      pasos: [
        P('X<sub>12</sub> + X<sub>22</sub> + X<sub>32</sub>', 'i va de 1 a 3 y j se queda en 2.'),
        P('= 1 + 2 + (−2) = 1', 'Reemplazamos y sumamos.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Calcula <span class="math">ΣΣ X<sub>ij</sub><sup>2</sup></span> ${TABLA_T6}`,
      valor: 23,
      respuesta: '23',
      pista: 'El ² está pegado a la X: eleva al cuadrado cada una de las 6 casillas y después suma. Los negativos al cuadrado dan positivo.',
      pasos: [
        P('2<sup>2</sup> + 1<sup>2</sup> + (−1)<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + (−2)<sup>2</sup>', 'Cada casilla se eleva al cuadrado.'),
        P('= 4 + 1 + 1 + 4 + 9 + 4', '(−1)² = 1 y (−2)² = 4: un negativo al cuadrado es positivo.'),
        P('= 23', 'Sumamos los 6 cuadrados.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Calcula <span class="math">ΣΣ (2X<sub>ij</sub> − 1)</span> ${TABLA_T6}`,
      valor: 4,
      respuesta: '4',
      pista: 'Usa las propiedades: el 2 sale afuera y el −1 se resta una vez por cada casilla. ¿Cuántas casillas hay?',
      pasos: [
        P('= 2 · ΣΣ X<sub>ij</sub> − N · 1', 'Propiedades: el 2 sale afuera y la constante se suma N veces.'),
        P('N = 3 personas × 2 pruebas = 6 casillas', 'Hay que contar cuántas veces se resta el 1.'),
        P('= 2 · 5 − 6 = 10 − 6 = 4', 'Ya sabemos que ΣΣ X<sub>ij</sub> = 5.'),
        P('Comprobación casilla por casilla: 3 + 1 − 3 + 3 + 5 − 5 = 4 ✔', '2·2−1 = 3, 2·1−1 = 1, 2·(−1)−1 = −3, 2·2−1 = 3, 2·3−1 = 5, 2·(−2)−1 = −5.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Calcula <span class="math">${SUM('', 'i')} (${SUM('', 'j')} X<sub>ij</sub>)<sup>2</sup></span> &nbsp;(el total de cada persona, al cuadrado, y luego sumados) ${TABLA_T6}`,
      valor: 11,
      respuesta: '11',
      pista: 'Trabaja de adentro hacia afuera: primero el total de cada fila (cada persona), luego eleva cada total al cuadrado, y al final suma.',
      pasos: [
        P('Persona 1: 2 + 1 = 3 &nbsp;·&nbsp; Persona 2: −1 + 2 = 1 &nbsp;·&nbsp; Persona 3: 3 + (−2) = 1', 'La Σ de adentro tiene la j: suma a lo largo de cada fila.'),
        P('3<sup>2</sup> = 9, &nbsp;1<sup>2</sup> = 1, &nbsp;1<sup>2</sup> = 1', 'El ² afecta al total de cada fila.'),
        P('9 + 1 + 1 = 11', 'La Σ de afuera (con la i) suma esos cuadrados.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Calcula <span class="math">${SUM('', 'j')} (${SUM('', 'i')} X<sub>ij</sub>)<sup>2</sup></span> &nbsp;(el total de cada prueba, al cuadrado, y luego sumados) ${TABLA_T6}`,
      valor: 17,
      respuesta: '17',
      pista: 'Ahora la Σ de adentro tiene la i: suma cada columna. Eleva cada total al cuadrado y suma. ¿Da lo mismo que el ejercicio anterior?',
      pasos: [
        P('Prueba 1: 2 − 1 + 3 = 4 &nbsp;·&nbsp; Prueba 2: 1 + 2 − 2 = 1', 'La Σ de adentro (con i) suma a lo largo de cada columna.'),
        P('4<sup>2</sup> = 16 &nbsp;y&nbsp; 1<sup>2</sup> = 1', 'Cada total al cuadrado.'),
        P('16 + 1 = 17', 'La Σ de afuera suma los cuadrados.'),
        P('17 ≠ 11 del ejercicio anterior', 'Cuando hay un cuadrado de por medio, sí importa si agrupas por filas o por columnas. Solo la suma simple ΣΣX<sub>ij</sub> da igual en cualquier orden.')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (tabla propia, no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: `¿Cuánto vale X<sub>23</sub>? ${TABLA_P6}`,
      valor: 5,
      respuesta: '5',
      pasos: [
        P('Fila i = 2, columna j = 3', 'Primero el índice de la fila, después el de la columna.'),
        P('X<sub>23</sub> = 5', 'Leemos la casilla en la tabla.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `Calcula <span class="math">${SUM(3, 'j = 1')} X<sub>1j</sub></span> ${TABLA_P6}`,
      valor: 3,
      respuesta: '3',
      pasos: [
        P('X<sub>11</sub> + X<sub>12</sub> + X<sub>13</sub>', 'La i está fija en 1 (primera fila) y j va de 1 a 3.'),
        P('= 4 + (−2) + 1 = 3', 'Sumamos la fila.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Calcula <span class="math">ΣΣ X<sub>ij</sub></span> ${TABLA_P6}`,
      valor: 11,
      respuesta: '11',
      pasos: [
        P('Fila 1: 4 − 2 + 1 = 3 &nbsp;·&nbsp; Fila 2: 0 + 3 + 5 = 8', 'Sumamos por filas (también se puede por columnas).'),
        P('3 + 8 = 11', 'Total de todas las casillas.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Calcula <span class="math">${SUM(2, 'i = 1')} X<sub>i3</sub></span> ${TABLA_P6}`,
      valor: 6,
      respuesta: '6',
      pasos: [
        P('X<sub>13</sub> + X<sub>23</sub>', 'j fija en 3 (tercera columna) e i va de 1 a 2.'),
        P('= 1 + 5 = 6', 'Sumamos la columna.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Calcula <span class="math">ΣΣ X<sub>ij</sub><sup>2</sup></span> ${TABLA_P6}`,
      valor: 55,
      respuesta: '55',
      pasos: [
        P('16 + 4 + 1 + 0 + 9 + 25', 'Cada casilla al cuadrado: (−2)² = 4.'),
        P('= 55', 'Sumamos los 6 cuadrados.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Calcula <span class="math">${SUM('', 'i')} (${SUM('', 'j')} X<sub>ij</sub>)<sup>2</sup></span> ${TABLA_P6}`,
      valor: 73,
      respuesta: '73',
      pasos: [
        P('Totales de las filas: 3 y 8', 'La Σ de adentro (con j) suma cada fila.'),
        P('3<sup>2</sup> + 8<sup>2</sup> = 9 + 64 = 73', 'Cada total al cuadrado y luego la suma.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Calcula <span class="math">ΣΣ (X<sub>ij</sub> − 2)</span> ${TABLA_P6}`,
      valor: -1,
      respuesta: '−1',
      pasos: [
        P('ΣΣ X<sub>ij</sub> − N · 2', 'La constante 2 se resta una vez por cada casilla.'),
        P('N = 2 × 3 = 6 → 11 − 12 = −1', 'Hay 6 casillas y el total es 11.')
      ]
    }
  ]
});