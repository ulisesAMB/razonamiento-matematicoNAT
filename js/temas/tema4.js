// ===== PARTE 1 · TEMA 4: Ecuaciones e interpolación lineal (Capítulo 4) =====
TEMAS.push({
  id: 't4',
  parte: 1,
  numero: 4,
  capitulo: 'Capítulo 4',
  titulo: 'Ecuaciones e interpolación',
  descripcion: 'Despejar una incógnita paso a paso y estimar valores que no están en una tabla.',

  teoria: [
    {
      titulo: '⚖️ La ecuación es una balanza',
      html: `
        <p>Una ecuación es como una <b>balanza en equilibrio</b>: lo que está a la izquierda del "=" pesa lo mismo que lo de la derecha.</p>
        <div class="analogia"><span class="emoji">⚖️</span><span>Si sacas 2 kilos de un platillo, tienes que sacar 2 kilos del otro, o la balanza se inclina. <b>Regla de oro: lo que hagas de un lado, hazlo también del otro.</b></span></div>
        <p>El objetivo es <b>dejar la incógnita (la X) sola</b> de un lado. Lo que quede del otro lado es su valor.</p>`
    },
    {
      titulo: '➖ Despejar con suma y resta',
      html: `
        <p>Para "quitar" un número que acompaña a la X, se usa la <b>operación contraria</b>: si está sumando, se resta; si está restando, se suma.</p>
        <div class="ejemplo math">Y + 5 = 2 → Y + 5 − 5 = 2 − 5 → <b>Y = −3</b></div>
        <div class="ejemplo math">Y − 4 = 6 → Y − 4 + 4 = 6 + 4 → <b>Y = 10</b></div>
        <p class="nota">💡 Por eso a veces se dice "pasa al otro lado con el signo cambiado". En realidad es hacer lo mismo en los dos lados.</p>`,
      quiz: { q: 'En X + 7 = 10, ¿qué hacemos para dejar X sola?', ops: ['Sumar 7 a los dos lados', 'Restar 7 a los dos lados', 'Dividir entre 7'], ok: 1, exp: 'El 7 está sumando, así que lo quitamos restando 7 a los dos lados: X = 3.' }
    },
    {
      titulo: '➗ Despejar con multiplicación y división',
      html: `
        <p>Si la X está <b>multiplicada</b>, se divide. Si está <b>dividida</b>, se multiplica:</p>
        <div class="ejemplo math">${F('Y', 2)} = 8 → ${F('Y', 2)} × 2 = 8 × 2 → <b>Y = 16</b></div>
        <div class="ejemplo math">3Y = 7 → ${F('3Y', 3)} = ${F(7, 3)} → <b>Y = ${F(7, 3)} ≈ 2,33</b></div>`
    },
    {
      titulo: '👣 Ecuaciones de dos pasos',
      html: `
        <p>Cuando la X tiene dos cosas encima, se quitan <b>al revés</b> de como se pusieron: primero lo que <b>suma o resta</b>, después lo que <b>multiplica o divide</b>.</p>
        <div class="ejemplo math">2Y + 4 = 10 → 2Y = 6 → <b>Y = 3</b></div>
        <div class="ejemplo math">6 = ${F('Y − 3', 2)} → 12 = Y − 3 → <b>Y = 15</b></div>
        <div class="analogia"><span class="emoji">🎁</span><span>Es como abrir un regalo: primero quitas el moño (lo que suma) y luego el papel (lo que multiplica). Quitas las capas en orden inverso a como se envolvió.</span></div>`,
      quiz: { q: '¿Cuánto vale X en 4X − 2 = 10?', ops: ['2', '3', '12'], ok: 1, exp: 'Sumamos 2: 4X = 12. Dividimos entre 4: X = 3.' }
    },
    {
      titulo: '🙃 Cuando la incógnita está abajo',
      html: `
        <p>Si la X está en el denominador, multiplica los dos lados por ella para subirla:</p>
        <div class="ejemplo math">3 = ${F(2, 'Y')} → 3Y = 2 → <b>Y = ${F(2, 3)}</b></div>
        <p>También se puede <b>dar vuelta</b> (sacar el recíproco) a los dos lados a la vez:</p>
        <div class="ejemplo math">${F(4, 'Y + 2')} = 8 → ${F('Y + 2', 4)} = ${F(1, 8)} → Y + 2 = ${F(4, 8)} → <b>Y = −1,5</b></div>`
    },
    {
      titulo: '🧹 Paréntesis y fracciones',
      html: `
        <p>Con paréntesis, aplica la distributiva o divide todo:</p>
        <div class="ejemplo math">4(Y + 1) = 3 → Y + 1 = ${F(3, 4)} → <b>Y = −${F(1, 4)}</b></div>
        <p>Con varias fracciones, <b>multiplica toda la ecuación por el mínimo común múltiplo</b> de los denominadores. ¡Las fracciones desaparecen!</p>
        <div class="ejemplo math">${F('x', 4)} + ${F('x', 2)} = 3 &nbsp;(todo × 4)&nbsp; → x + 2x = 12 → 3x = 12 → <b>x = 4</b></div>`
    },
    {
      titulo: '✔️ Comprueba siempre',
      html: `
        <p>Reemplaza tu resultado en la ecuación original. Si los dos lados dan lo mismo, ¡está bien!</p>
        <div class="ejemplo math">2Y + 4 = 10, con Y = 3: &nbsp;2(3) + 4 = 10 ✔</div>
        <p class="alerta">⚠️ En el texto, el inciso q) es ${F(3, 'x − 5')} = ${F(7, 'x − 5')}. Esa ecuación <b>no tiene solución</b>: los dos lados tienen el mismo denominador, así que tendría que ser 3 = 7. La respuesta marcada (25/2) es un error, probablemente del enunciado.</p>`
    },
    {
      titulo: '📈 Interpolación lineal',
      html: `
        <p>Sirve para <b>estimar un valor que no aparece en una tabla</b>, usando los dos valores más cercanos. Se supone que entre esos dos puntos el cambio es en línea recta.</p>
        <div class="analogia"><span class="emoji">🚗</span><span>Si a las 2:00 el auto estaba en el km 100 y a las 3:00 en el km 160, a las 2:30 (justo a la mitad) estaría más o menos en el km 130. ¡Eso es interpolar!</span></div>
        <div class="tabla-scroll"><table>
          <tr><th>Número</th><th>Raíz cuadrada</th></tr>
          <tr><td>96</td><td>9,7980</td></tr>
          <tr><td>96,5</td><td><b>X = ?</b></td></tr>
          <tr><td>97</td><td>9,8489</td></tr>
        </table></div>
        <p>Se plantea esta proporción:</p>
        <div class="ejemplo math">${F('96,5 − 96', '97 − 96')} = ${F('X − 9,7980', '9,8489 − 9,7980')} → 0,5 = ${F('X − 9,7980', '0,0509')}</div>
        <div class="ejemplo math">X = 9,7980 + 0,5 × 0,0509 = 9,7980 + 0,02545 = <b>9,82345</b></div>
        <p class="nota">💡 Atajo: X = valor de arriba + (qué fracción del camino avanzaste) × (diferencia de la tabla).</p>`
    }
  ],

  // ===== EJERCICIOS (cuentan para el progreso) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: `<span class="math">X − 2 = 7 &nbsp;&nbsp;→&nbsp; X = ?</span>`,
      valor: 9,
      respuesta: 'X = 9',
      pista: 'Fíjate qué operación acompaña a la X. Para quitarla, usa la operación contraria en los dos lados.',
      pasos: [
        P('X − 2 + 2 = 7 + 2', 'El 2 está restando; para quitarlo sumamos 2. Lo hacemos en los dos lados para que la balanza siga en equilibrio.'),
        P('X = 9', 'Del lado izquierdo, −2 + 2 = 0, así que X queda sola.'),
        P('Comprobación: 9 − 2 = 7 ✔', 'Reemplazamos en la ecuación original y los dos lados coinciden.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `<span class="math">3X − 5 = 16 &nbsp;&nbsp;→&nbsp; X = ?</span>`,
      valor: 7,
      respuesta: 'X = 7',
      pista: 'Sobre la X hay dos operaciones: una resta y una multiplicación. Deshazlas en orden inverso.',
      pasos: [
        P('3X − 5 + 5 = 16 + 5 → 3X = 21', 'Primero quitamos lo que resta (el −5), sumando 5 a los dos lados.'),
        P(`${F('3X', 3)} = ${F(21, 3)} → X = 7`, 'Ahora la X está multiplicada por 3: dividimos los dos lados entre 3.'),
        P('Comprobación: 3(7) − 5 = 21 − 5 = 16 ✔', 'Reemplazamos para estar seguros.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">6(X + 5) = 2X − 4 &nbsp;&nbsp;→&nbsp; X = ?</span>`,
      valor: -8.5,
      respuesta: `X = −${F(17, 2)} = −8,5`,
      pista: 'Empieza con la distributiva: el 6 multiplica a la X y al 5. Luego pasa todas las X a un lado y los números al otro.',
      pasos: [
        P('6X + 30 = 2X − 4', 'Distributiva: el 6 multiplica a cada término del paréntesis (6·X y 6·5).'),
        P('6X − 2X + 30 = −4 → 4X + 30 = −4', 'Restamos 2X a los dos lados para juntar las X en un solo lado.'),
        P('4X = −4 − 30 = −34', 'Restamos 30 a los dos lados para dejar las X solas.'),
        P(`X = ${F(-34, 4)} = −${F(17, 2)} = −8,5`, 'Dividimos entre 4 y simplificamos entre 2.'),
        P('Comprobación: 6(−8,5 + 5) = 6(−3,5) = −21 &nbsp;y&nbsp; 2(−8,5) − 4 = −21 ✔', 'Los dos lados dan lo mismo.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">${F(1, 2)}x + ${F(1, 3)}x = 5 &nbsp;&nbsp;→&nbsp; x = ?</span>`,
      valor: 6,
      respuesta: 'x = 6',
      pista: 'Multiplica toda la ecuación (los dos lados) por un número que elimine los dos denominadores a la vez.',
      pasos: [
        P(`6 · ${F(1, 2)}x + 6 · ${F(1, 3)}x = 6 · 5`, 'Multiplicamos todo por 6, el mínimo común múltiplo de 2 y 3, para que desaparezcan las fracciones.'),
        P('3x + 2x = 30', '6 · ½ = 3 y 6 · ⅓ = 2.'),
        P('5x = 30 → x = 6', 'Juntamos las x (3 + 2 = 5) y dividimos entre 5.'),
        P('Comprobación: ½(6) + ⅓(6) = 3 + 2 = 5 ✔', 'Reemplazamos en la ecuación original.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">3x − (2x − 7x − 1 − 10) = 13x − [5 − (x − 15x)]</span>`,
      valor: -16 / 9,
      respuesta: `x = −${F(16, 9)}`,
      pista: 'Simplifica cada lado <b>por separado</b> antes de igualar. Empieza por los paréntesis de más adentro y cuidado con el signo menos delante de cada paréntesis.',
      pasos: [
        P('Izquierda: 2x − 7x − 1 − 10 = −5x − 11', 'Primero juntamos lo de adentro del paréntesis: las x con las x y los números con los números.'),
        P('3x − (−5x − 11) = 3x + 5x + 11 = 8x + 11', 'El − de adelante cambia los signos de adentro.'),
        P('Derecha: x − 15x = −14x → 5 − (−14x) = 5 + 14x', 'Del paréntesis más interno hacia afuera; otra vez el − cambia el signo.'),
        P('13x − (5 + 14x) = 13x − 5 − 14x = −x − 5', 'El − delante del corchete cambia los dos signos.'),
        P('8x + 11 = −x − 5 → 9x = −16', 'Sumamos x a los dos lados y restamos 11 a los dos lados.'),
        P(`x = −${F(16, 9)}`, 'Dividimos entre 9. No se puede simplificar porque 16 y 9 no tienen divisores en común.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Calcula X por interpolación lineal:
        <div class="tabla-scroll"><table>
          <tr><th>Número</th><th>Raíz cuadrada</th></tr>
          <tr><td>18</td><td>4,2426</td></tr>
          <tr><td>18,5</td><td><b>X</b></td></tr>
          <tr><td>19</td><td>4,3589</td></tr>
        </table></div>`,
      valor: 4.30075,
      tolerancia: 0.001,
      respuesta: 'X ≈ 4,30075',
      pista: 'Mira qué fracción del camino entre 18 y 19 representa 18,5: esa misma fracción es la que debes avanzar entre 4,2426 y 4,3589.',
      pasos: [
        P(`${F('18,5 − 18', '19 − 18')} = ${F('X − 4,2426', '4,3589 − 4,2426')}`, 'Suponemos que entre los dos datos el cambio es en línea recta: avanzamos la misma fracción en las dos columnas.'),
        P(`${F('0,5', 1)} = 0,5 &nbsp;y&nbsp; 4,3589 − 4,2426 = 0,1163`, '18,5 está justo a la mitad entre 18 y 19.'),
        P('X − 4,2426 = 0,5 × 0,1163 = 0,05815', 'Despejamos multiplicando los dos lados por 0,1163.'),
        P('X = 4,2426 + 0,05815 = 4,30075', 'Sumamos 4,2426 a los dos lados. La raíz real de 18,5 es ≈ 4,3012: ¡muy cerca! ✔')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: `<span class="math">X + 8 = 3 &nbsp;→&nbsp; X = ?</span>`,
      valor: -5,
      respuesta: 'X = −5',
      pasos: [
        P('X = 3 − 8', 'El 8 está sumando: restamos 8 a los dos lados.'),
        P('X = −5', 'Comprobación: −5 + 8 = 3 ✔')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `<span class="math">${F('X', 4)} = 6 &nbsp;→&nbsp; X = ?</span>`,
      valor: 24,
      respuesta: 'X = 24',
      pasos: [
        P('X = 6 × 4', 'La X está dividida entre 4: multiplicamos los dos lados por 4.'),
        P('X = 24', 'Comprobación: 24 ÷ 4 = 6 ✔')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">5X − 7 = 2X + 8 &nbsp;→&nbsp; X = ?</span>`,
      valor: 5,
      respuesta: 'X = 5',
      pasos: [
        P('5X − 2X = 8 + 7', 'Las X a la izquierda (restamos 2X) y los números a la derecha (sumamos 7).'),
        P('3X = 15 → X = 5', 'Dividimos entre 3. Comprobación: 25 − 7 = 18 y 10 + 8 = 18 ✔')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">3(X − 2) = X + 10 &nbsp;→&nbsp; X = ?</span>`,
      valor: 8,
      respuesta: 'X = 8',
      pasos: [
        P('3X − 6 = X + 10', 'Distributiva: 3 por cada término.'),
        P('2X = 16 → X = 8', 'Restamos X y sumamos 6 a los dos lados; luego dividimos entre 2.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">${F(12, 'X')} = 4 &nbsp;→&nbsp; X = ?</span>`,
      valor: 3,
      respuesta: 'X = 3',
      pasos: [
        P('12 = 4X', 'La X está abajo: multiplicamos los dos lados por X.'),
        P('X = 12 ÷ 4 = 3', 'Dividimos entre 4. Comprobación: 12 ÷ 3 = 4 ✔')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">${F('X', 3)} + ${F('X', 6)} = 5 &nbsp;→&nbsp; X = ?</span>`,
      valor: 10,
      respuesta: 'X = 10',
      pasos: [
        P('2X + X = 30', 'Multiplicamos todo por 6 (el MCM de 3 y 6): 6·X/3 = 2X y 6·X/6 = X.'),
        P('3X = 30 → X = 10', 'Comprobación: 10/3 + 10/6 = 20/6 + 10/6 = 30/6 = 5 ✔')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `Interpola X:
        <div class="tabla-scroll"><table>
          <tr><th>Número</th><th>Raíz cuadrada</th></tr>
          <tr><td>50</td><td>7,0711</td></tr>
          <tr><td>50,4</td><td><b>X</b></td></tr>
          <tr><td>51</td><td>7,1414</td></tr>
        </table></div>`,
      valor: 7.09922,
      tolerancia: 0.001,
      respuesta: 'X ≈ 7,09922',
      pasos: [
        P('Fracción del camino: (50,4 − 50) ÷ (51 − 50) = 0,4', '50,4 está al 40 % del camino entre 50 y 51.'),
        P('Diferencia de la tabla: 7,1414 − 7,0711 = 0,0703', 'Cuánto cambia la raíz de un número al otro.'),
        P('X = 7,0711 + 0,4 × 0,0703 = 7,0711 + 0,02812 = 7,09922', 'Avanzamos el 40 % de esa diferencia. (La raíz real es ≈ 7,0993 ✔)')
      ]
    }
  ]
});