// ===== PARTE 2 · TEMA 5: Sumatoria simple Σ (Capítulo 5) =====
TEMAS.push({
  id: 't5',
  parte: 2,
  numero: 5,
  capitulo: 'Capítulo 5',
  titulo: 'Sumatoria simple',
  descripcion: 'El símbolo Σ: qué significa, cómo se desarrolla y sus propiedades (y sus trampas).',

  teoria: [
    {
      titulo: '🛒 ¿Qué significa Σ?',
      html: `
        <p>La letra griega <b>Σ</b> (sigma) es una orden muy simple: <b>"suma todo"</b>. Sirve para escribir sumas largas en poco espacio, y en estadística aparece en casi todas las fórmulas.</p>
        <div class="ejemplo math">${SUM(6, 'i = 1')} X<sub>i</sub> = X<sub>1</sub> + X<sub>2</sub> + X<sub>3</sub> + X<sub>4</sub> + X<sub>5</sub> + X<sub>6</sub></div>
        <div class="analogia"><span class="emoji">🛒</span><span>Imagina una lista de compras con 6 precios: X<sub>1</sub> es el primer precio, X<sub>2</sub> el segundo… Σ X<sub>i</sub> es <b>el total que pagas en la caja</b>.</span></div>
        <p>En general, con n datos:</p>
        <div class="ejemplo math">${SUM('n', 'i = 1')} X<sub>i</sub> = X<sub>1</sub> + X<sub>2</sub> + X<sub>3</sub> + … + X<sub>n</sub></div>`
    },
    {
      titulo: '🔍 Las partes del símbolo',
      html: `
        <div class="ejemplo math" style="font-size:1.3em">${SUM('n', 'i = 1')} X<sub>i</sub></div>
        <ul>
          <li><b>i</b> es el <b>índice</b>: el contador que va cambiando (1, 2, 3, …).</li>
          <li><b>i = 1</b> (abajo) dice <b>dónde empieza</b> el contador.</li>
          <li><b>n</b> (arriba) dice <b>dónde termina</b>.</li>
          <li><b>X<sub>i</sub></b> es <b>lo que se suma</b> cada vez.</li>
        </ul>
        <p>Por eso el texto dice: <i>"Sume los n términos obtenidos sustituyendo el subíndice i por 1, 2, 3, … n"</i>.</p>
        <p class="nota">💡 Cantidad de términos = (número de arriba) − (número de abajo) + 1.</p>`,
      quiz: { q: `¿Cuántos términos tiene ${SUM(7, 'i = 3')} X<sub>i</sub>?`, ops: ['4', '5', '7'], ok: 1, exp: 'Va de i = 3 hasta i = 7: X₃, X₄, X₅, X₆, X₇. Son 7 − 3 + 1 = 5 términos.' }
    },
    {
      titulo: '🧩 Cuando hay una operación adentro',
      html: `
        <p>Si dentro de la Σ hay una operación, se hace <b>con cada dato por separado</b> y después se suma todo:</p>
        <div class="ejemplo math">${SUM(4, 'i = 1')} (X<sub>i</sub> − 5)<sup>3</sup> = (X<sub>1</sub> − 5)<sup>3</sup> + (X<sub>2</sub> − 5)<sup>3</sup> + (X<sub>3</sub> − 5)<sup>3</sup> + (X<sub>4</sub> − 5)<sup>3</sup></div>
        <p><b>Receta en 3 pasos:</b></p>
        <ol>
          <li><b>Reemplaza</b> cada X<sub>i</sub> por su valor.</li>
          <li><b>Calcula</b> la operación para cada uno.</li>
          <li><b>Suma</b> todos los resultados.</li>
        </ol>
        <p>Ejemplo con X<sub>1</sub> = 2, X<sub>2</sub> = 3, X<sub>3</sub> = 4:</p>
        <div class="ejemplo math">Σ (X<sub>i</sub> − 1) = (2 − 1) + (3 − 1) + (4 − 1) = 1 + 2 + 3 = 6</div>`,
      quiz: { q: 'Con X = 2, 3, 4, ¿cuánto es Σ 2X<sub>i</sub>?', ops: ['9', '18', '24'], ok: 1, exp: '2·2 + 2·3 + 2·4 = 4 + 6 + 8 = 18. (También 2 × 9 = 18, como veremos en las propiedades.)' }
    },
    {
      titulo: '🎈 Propiedad 1: sumar una constante',
      html: `
        <p>Si lo que sumas es siempre el <b>mismo número k</b>, sumarlo n veces es multiplicar:</p>
        <div class="ejemplo math">${SUM('n', 'i = 1')} k = k + k + … + k = <b>n · k</b></div>
        <div class="analogia"><span class="emoji">🎈</span><span>Si 10 amigos te regalan 5 Bs cada uno, recibes 5 + 5 + … + 5 (10 veces) = 10 × 5 = <b>50 Bs</b>.</span></div>`,
      quiz: { q: `¿Cuánto es ${SUM(4, 'i = 1')} 7?`, ops: ['7', '11', '28'], ok: 2, exp: 'Es sumar 7 cuatro veces: 4 × 7 = 28.' }
    },
    {
      titulo: '🧲 Propiedad 2: sacar constantes',
      html: `
        <p>Un número que multiplica a todos los datos <b>puede salir afuera</b> de la Σ:</p>
        <div class="ejemplo math">Σ cX<sub>i</sub> = c · Σ X<sub>i</sub></div>
        <p>Un número que se suma a cada dato se suma <b>n veces</b>:</p>
        <div class="ejemplo math">Σ (X<sub>i</sub> + k) = Σ X<sub>i</sub> + n·k</div>
        <p>Las dos juntas forman la propiedad general:</p>
        <div class="ejemplo math">Σ (cX<sub>i</sub> + k) = c · Σ X<sub>i</sub> + n·k</div>
        <p class="alerta">⚠️ Error del texto (pág. 26): escribe Σ(cX<sub>i</sub> <b>−</b> k) = cΣX<sub>i</sub> <b>+</b> nk. Los signos deben coincidir: Σ(cX<sub>i</sub> + k) = cΣX<sub>i</sub> + nk, o bien Σ(cX<sub>i</sub> − k) = cΣX<sub>i</sub> − nk. Su propia demostración usa el +.</p>`
    },
    {
      titulo: '➕ Propiedad 3: suma de dos variables',
      html: `
        <p>La sumatoria de una suma se puede <b>separar</b> en dos sumatorias:</p>
        <div class="ejemplo math">Σ (X<sub>i</sub> + Y<sub>i</sub>) = Σ X<sub>i</sub> + Σ Y<sub>i</sub></div>
        <div class="analogia"><span class="emoji">🍎</span><span>Si cada amigo trae manzanas (X) y naranjas (Y), da igual contar "fruta por fruta de cada amigo" o "todas las manzanas + todas las naranjas". El total es el mismo.</span></div>`
    },
    {
      titulo: '🧮 Propiedad 4: el cuadrado de una diferencia',
      html: `
        <div class="ejemplo math">Σ (X<sub>i</sub> − k)<sup>2</sup> = Σ X<sub>i</sub><sup>2</sup> − 2k · Σ X<sub>i</sub> + n·k<sup>2</sup></div>
        <p>Sale de desarrollar (X<sub>i</sub> − k)<sup>2</sup> = X<sub>i</sub><sup>2</sup> − 2kX<sub>i</sub> + k<sup>2</sup> y aplicar las propiedades anteriores a cada parte. ¡Esta fórmula es la base de la <b>varianza</b> en estadística!</p>
        <p class="alerta">⚠️ Error del texto (pág. 27): escribe ΣX<sub>1</sub><sup>2</sup>; debe ser ΣX<sub>i</sub><sup>2</sup> (con i, no con 1).</p>`
    },
    {
      titulo: '🚨 Las dos trampas más comunes',
      html: `
        <p><b>Trampa 1:</b> la suma de los cuadrados <b>NO</b> es el cuadrado de la suma.</p>
        <div class="ejemplo math">Con X = 2, 3, 4: &nbsp; Σ X<sub>i</sub><sup>2</sup> = 4 + 9 + 16 = <b>29</b> &nbsp;≠&nbsp; (Σ X<sub>i</sub>)<sup>2</sup> = 9<sup>2</sup> = <b>81</b></div>
        <div class="analogia"><span class="emoji">👀</span><span>Fíjate <b>dónde está el ²</b>: si está pegado a la X, primero elevas cada dato y luego sumas. Si está afuera del paréntesis, primero sumas todo y luego elevas.</span></div>
        <p><b>Trampa 2:</b> la suma de los productos <b>NO</b> es el producto de las sumas.</p>
        <div class="ejemplo math">Σ X<sub>i</sub>Y<sub>i</sub> ≠ Σ X<sub>i</sub> · Σ Y<sub>i</sub></div>`,
      quiz: { q: 'Con X = 1, 2, 3, ¿cuánto es Σ X<sub>i</sub><sup>2</sup>?', ops: ['14', '36', '12'], ok: 0, exp: '1 + 4 + 9 = 14. El 36 sería (1 + 2 + 3)² = 6², que es otra cosa.' }
    }
  ],

  // ===== EJERCICIOS (del texto, pág. 31) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: `Si X<sub>1</sub> = 3, X<sub>2</sub> = −1, X<sub>3</sub> = 4, calcula <span class="math">${SUM(3, 'i = 1')} X<sub>i</sub></span>`,
      valor: 6,
      respuesta: '6',
      pista: 'Σ significa "suma todo". Escribe X₁ + X₂ + X₃ y reemplaza cada uno por su valor, con cuidado con el negativo.',
      pasos: [
        P('Σ X<sub>i</sub> = X<sub>1</sub> + X<sub>2</sub> + X<sub>3</sub>', 'El índice i va de 1 a 3, así que hay 3 términos.'),
        P('= 3 + (−1) + 4', 'Reemplazamos cada X por su valor.'),
        P('= 6', '3 − 1 = 2 y 2 + 4 = 6.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `Con los mismos datos (3, −1, 4), calcula <span class="math">Σ 4X<sub>i</sub></span>`,
      valor: 24,
      respuesta: '24',
      pista: 'Puedes multiplicar cada dato por 4 y sumar, o usar la propiedad: un número que multiplica a todos puede salir afuera de la Σ.',
      pasos: [
        P('Σ 4X<sub>i</sub> = 4 · Σ X<sub>i</sub>', 'Propiedad 2: el 4 multiplica a todos los datos, así que sale afuera.'),
        P('= 4 · 6 = 24', 'Ya sabemos que Σ X<sub>i</sub> = 6.'),
        P('Comprobación: 12 + (−4) + 16 = 24 ✔', 'Haciéndolo dato por dato da lo mismo.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Con X = 3, −1, 4, calcula <span class="math">Σ X<sub>i</sub><sup>2</sup></span>`,
      valor: 26,
      respuesta: '26',
      pista: 'El ² está pegado a la X: primero elevas al cuadrado <b>cada dato</b> y después sumas. Recuerda que un negativo al cuadrado da positivo.',
      pasos: [
        P('Σ X<sub>i</sub><sup>2</sup> = 3<sup>2</sup> + (−1)<sup>2</sup> + 4<sup>2</sup>', 'El exponente afecta a cada dato por separado.'),
        P('= 9 + 1 + 16', '(−1)² = (−1)(−1) = +1: dos negativos dan positivo.'),
        P('= 26', 'Sumamos los cuadrados.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Con X = 3, −1, 4, calcula <span class="math">(Σ X<sub>i</sub>)<sup>2</sup></span>`,
      valor: 36,
      respuesta: '36',
      pista: 'Ahora el ² está <b>afuera</b> del paréntesis: primero sumas todo y al final elevas al cuadrado. Compara con el ejercicio anterior.',
      pasos: [
        P('Σ X<sub>i</sub> = 3 − 1 + 4 = 6', 'Primero lo de adentro del paréntesis: la suma.'),
        P('(6)<sup>2</sup> = 36', 'Después elevamos el total al cuadrado.'),
        P('36 ≠ 26', 'Por eso Σ X<sub>i</sub><sup>2</sup> y (Σ X<sub>i</sub>)<sup>2</sup> son cosas distintas: la trampa 1.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Con X = 3, −1, 4, calcula <span class="math">Σ (X<sub>i</sub> − 3)<sup>2</sup></span>`,
      valor: 17,
      respuesta: '17',
      pista: 'Puedes hacerlo dato por dato (resta 3 a cada uno y eleva al cuadrado) o con la propiedad 4. ¡Hazlo de las dos formas para comprobar!',
      pasos: [
        P('(3 − 3)<sup>2</sup> + (−1 − 3)<sup>2</sup> + (4 − 3)<sup>2</sup>', 'Forma 1: reemplazamos cada dato dentro de la expresión.'),
        P('= 0<sup>2</sup> + (−4)<sup>2</sup> + 1<sup>2</sup> = 0 + 16 + 1 = 17', 'Primero el paréntesis, luego el cuadrado de cada uno, y al final la suma.'),
        P('Forma 2: Σ X<sub>i</sub><sup>2</sup> − 2·3·Σ X<sub>i</sub> + 3·3<sup>2</sup>', 'Propiedad 4 con k = 3 y n = 3 datos.'),
        P('= 26 − 36 + 27 = 17 ✔', 'Usamos Σ X<sub>i</sub><sup>2</sup> = 26 y Σ X<sub>i</sub> = 6. Las dos formas coinciden.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Con X = 3, −1, 4, calcula <span class="math">Σ (2X<sub>i</sub><sup>2</sup> − ${F('X<sub>i</sub>', 3)} + 4)</span>`,
      valor: 62,
      respuesta: '62',
      pista: 'Separa la Σ en tres partes (propiedad 3), saca las constantes afuera (propiedad 2) y recuerda que el 4 se suma n = 3 veces.',
      pasos: [
        P(`= 2·Σ X<sub>i</sub><sup>2</sup> − ${F(1, 3)}·Σ X<sub>i</sub> + Σ 4`, 'Separamos la sumatoria en tres y sacamos los números que multiplican.'),
        P('2 · 26 = 52', 'Ya sabemos que Σ X<sub>i</sub><sup>2</sup> = 26.'),
        P(`${F(1, 3)} · 6 = 2`, 'Ya sabemos que Σ X<sub>i</sub> = 6.'),
        P('Σ 4 = 3 · 4 = 12', 'Propiedad 1: sumar la constante 4 tres veces.'),
        P('52 − 2 + 12 = 62', 'Juntamos las tres partes con sus signos.')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (propia, no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: `Si Y = 2, 5, −1, 4, calcula <span class="math">${SUM(4, 'i = 1')} Y<sub>i</sub></span>`,
      valor: 10,
      respuesta: '10',
      pasos: [
        P('2 + 5 + (−1) + 4', 'Se suman los 4 datos.'),
        P('= 10', '7 − 1 = 6 y 6 + 4 = 10.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `Calcula <span class="math">${SUM(5, 'i = 1')} 3</span>`,
      valor: 15,
      respuesta: '15',
      pasos: [
        P('3 + 3 + 3 + 3 + 3', 'La constante 3 se suma 5 veces (i va de 1 a 5).'),
        P('= 5 · 3 = 15', 'Propiedad 1: n · k.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Si Y = 2, 5, −1, 4, calcula <span class="math">Σ Y<sub>i</sub><sup>2</sup></span>`,
      valor: 46,
      respuesta: '46',
      pasos: [
        P('4 + 25 + 1 + 16', 'Cada dato al cuadrado: (−1)² = 1.'),
        P('= 46', 'Sumamos los cuadrados.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Si Y = 2, 5, −1, 4, calcula <span class="math">Σ (Y<sub>i</sub> + 2)</span>`,
      valor: 18,
      respuesta: '18',
      pasos: [
        P('Σ Y<sub>i</sub> + 4 · 2', 'Propiedad 2: el 2 se suma una vez por cada uno de los 4 datos.'),
        P('= 10 + 8 = 18', 'Comprobación: 4 + 7 + 1 + 6 = 18 ✔')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `Si Y = 2, 5, −1, 4, calcula <span class="math">Σ (${F('Y<sub>i</sub>', 2)} − 1)</span>`,
      valor: 1,
      respuesta: '1',
      pasos: [
        P(`${F(1, 2)} · Σ Y<sub>i</sub> − 4 · 1`, 'Sacamos el ½ afuera y el −1 se resta 4 veces.'),
        P('= 5 − 4 = 1', 'La mitad de 10 es 5.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Si Y = 2, 5, −1, 4, calcula <span class="math">Σ (Y<sub>i</sub> − 1)<sup>2</sup></span>`,
      valor: 30,
      respuesta: '30',
      pasos: [
        P('1<sup>2</sup> + 4<sup>2</sup> + (−2)<sup>2</sup> + 3<sup>2</sup> = 1 + 16 + 4 + 9 = 30', 'Dato por dato: restamos 1, elevamos al cuadrado y sumamos.'),
        P('Con la fórmula: 46 − 2·1·10 + 4·1<sup>2</sup> = 46 − 20 + 4 = 30 ✔', 'Propiedad 4 con k = 1 y n = 4.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Si X = 1, 2, 3 &nbsp;y&nbsp; Y = 4, 0, −2, calcula <span class="math">Σ X<sub>i</sub>Y<sub>i</sub></span>`,
      valor: -2,
      respuesta: '−2',
      pasos: [
        P('(1)(4) + (2)(0) + (3)(−2)', 'Multiplicamos cada X con su Y del mismo número (X₁ con Y₁, X₂ con Y₂…).'),
        P('= 4 + 0 − 6 = −2', 'Y sumamos los productos.'),
        P('Ojo: Σ X<sub>i</sub> · Σ Y<sub>i</sub> = 6 · 2 = 12 ≠ −2', 'Trampa 2: la suma de productos no es el producto de las sumas.')
      ]
    }
  ]
});