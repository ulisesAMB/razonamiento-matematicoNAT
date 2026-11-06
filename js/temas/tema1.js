// ===== PARTE 1 · TEMA 1: Símbolos y operaciones (Capítulo 1) =====
TEMAS.push({
  id: 't1',
  parte: 1,
  numero: 1,
  capitulo: 'Capítulo 1',
  titulo: 'Símbolos y operaciones',
  descripcion: 'El idioma de las matemáticas: comparar números, valor absoluto y las reglas de los signos.',

  teoria: [
    {
      titulo: '🐊 Los símbolos para comparar',
      html: `
        <p>Las matemáticas tienen su propio idioma. Estos símbolos dicen si un número es mayor, menor o distinto de otro:</p>
        <div class="tabla-scroll"><table>
          <tr><th>Símbolo</th><th>Se lee</th><th>Ejemplo</th></tr>
          <tr><td class="math">&gt;</td><td>es mayor que</td><td class="math">5 &gt; 4</td></tr>
          <tr><td class="math">&lt;</td><td>es menor que</td><td class="math">7 &lt; 9</td></tr>
          <tr><td class="math">≥</td><td>es mayor o igual a</td><td class="math">X ≥ 3</td></tr>
          <tr><td class="math">≤</td><td>es menor o igual a</td><td class="math">X ≤ 5</td></tr>
          <tr><td class="math">≠</td><td>es distinto de</td><td class="math">3 ≠ 5</td></tr>
        </table></div>
        <div class="analogia"><span class="emoji">🐊</span><span>Imagina que el símbolo es la boca de un cocodrilo con hambre: <b>siempre se abre hacia el número más grande</b>, porque quiere comer más. En <span class="math">9 &gt; 2</span> la boca apunta al 9.</span></div>
        <p class="nota">💡 Con negativos, piensa en la recta numérica: el que está más a la <b>izquierda</b> es el menor. Por eso −8 &lt; −1.</p>`,
      quiz: { q: '¿Cuál de estas comparaciones es correcta?', ops: ['−3 > −1', '−3 < −1', '−3 = −1'], ok: 1, exp: 'En la recta numérica −3 está más a la izquierda que −1, así que es menor.' }
    },
    {
      titulo: '📏 Intervalos: "entre" y "fuera"',
      html: `
        <p>A veces no hablamos de un solo número, sino de un <b>rango</b> de valores.</p>
        <div class="ejemplo math">2 &lt; X &lt; 20</div>
        <p>Se lee "X es mayor que 2 y menor que 20". Es decir, X está <b>entre</b> 2 y 20 (por ejemplo 5, 10 o 19,9).</p>
        <div class="ejemplo math">X &lt; 2 &nbsp;o&nbsp; X &gt; 20</div>
        <p>Aquí X está <b>fuera</b> de ese tramo: puede ser 0, −7 o 25, pero no 10.</p>
        <div class="analogia"><span class="emoji">🎢</span><span>Es como el letrero de un juego mecánico: "pueden subir quienes miden entre 1,20 m y 1,90 m". Si mides 1,50 entras; si mides 1,10 te quedas fuera.</span></div>
        <p class="alerta">⚠️ En el texto dice "X &lt; 2 o X &lt; 20". Es un error de imprenta: lo correcto es <b>X &lt; 2 o X &gt; 20</b>.</p>`,
      quiz: { q: 'Si X = 25, ¿cumple 2 &lt; X &lt; 20?', ops: ['Sí', 'No'], ok: 1, exp: '25 es mayor que 20, así que está fuera del intervalo.' }
    },
    {
      titulo: '🚶 Valor absoluto |X|',
      html: `
        <p>El valor absoluto es la <b>distancia del número al cero</b>. Como una distancia nunca es negativa, en la práctica <b>se le quita el signo</b>.</p>
        <div class="ejemplo math">|+7| = 7 &nbsp;&nbsp;&nbsp; |−8| = 8 &nbsp;&nbsp;&nbsp; |0| = 0</div>
        <div class="analogia"><span class="emoji">🚶</span><span>Si caminas 8 pasos hacia la izquierda o 8 hacia la derecha, en los dos casos caminaste <b>8 pasos</b>. Al valor absoluto no le importa la dirección, solo cuánto.</span></div>
        <p>Si adentro de las barras hay una operación, <b>primero se resuelve</b> y recién después se quita el signo:</p>
        <div class="ejemplo math">|12 − 19| = |−7| = 7</div>
        <p class="alerta">⚠️ Error común: hacer |12 − 19| = 12 + 19. ¡No! Primero se calcula lo de adentro.</p>`,
      quiz: { q: '¿Cuánto es |−12 + 5|?', ops: ['17', '7', '−7'], ok: 1, exp: 'Adentro: −12 + 5 = −7. El valor absoluto de −7 es 7.' }
    },
    {
      titulo: '🤝 Sumar números con el mismo signo',
      html: `
        <p><b>Regla:</b> se suman los números (sin signo) y se <b>conserva el signo</b> que tenían.</p>
        <div class="ejemplo math">2 + 8 = 10</div>
        <div class="ejemplo math">−5 + (−7) = −12</div>
        <div class="analogia"><span class="emoji">💸</span><span>Piensa en dinero: los positivos son lo que <b>tienes</b> y los negativos lo que <b>debes</b>. Si debes 5 y luego debes 7 más, ahora debes 12. Las deudas se juntan.</span></div>`
    },
    {
      titulo: '🪢 Sumar números con signos distintos',
      html: `
        <p><b>Regla:</b> se <b>restan</b> los números (sin signo) y el resultado lleva el signo del que es "más grande" sin contar el signo.</p>
        <div class="ejemplo math">16 + (−10) = 6 &nbsp;<small>← 16 − 10 = 6 y gana el 16, que es positivo</small></div>
        <div class="ejemplo math">3 + (−14) = −11 &nbsp;<small>← 14 − 3 = 11 y gana el 14, que es negativo</small></div>
        <div class="analogia"><span class="emoji">🪢</span><span>Es como jugar a tirar la cuerda: el equipo positivo jala hacia un lado y el negativo hacia el otro. <b>Gana el más fuerte</b>, y gana por la diferencia.</span></div>`,
      quiz: { q: '¿Cuánto es −15 + 9?', ops: ['−24', '−6', '6'], ok: 1, exp: '15 − 9 = 6 y gana el 15, que es negativo: −6.' }
    },
    {
      titulo: '🔄 Restar: cambia el signo y suma',
      html: `
        <p><b>Regla:</b> restar es lo mismo que <b>sumar el opuesto</b>. Cambias el signo del número que se resta y después aplicas las reglas de la suma.</p>
        <div class="ejemplo math">16 − 4 = 16 + (−4) = 12</div>
        <div class="ejemplo math">5 − 8 = 5 + (−8) = −3</div>
        <div class="ejemplo math">9 − (−6) = 9 + (+6) = 15</div>
        <div class="analogia"><span class="emoji">🎁</span><span>¿Por qué "menos un negativo" da positivo? Si alguien te <b>quita una deuda</b> de 6, es como si te regalaran 6. Por eso −(−6) = +6.</span></div>`,
      quiz: { q: '¿Cuánto es 4 − (−6)?', ops: ['−2', '10', '−10'], ok: 1, exp: '−(−6) se convierte en +6, y 4 + 6 = 10.' }
    },
    {
      titulo: '✖️ Multiplicar y dividir: cuenta los negativos',
      html: `
        <p>Aquí hay un truco muy fácil. Primero <b>cuenta cuántos números negativos hay</b>:</p>
        <ul>
          <li>Si hay una cantidad <b>par</b> (2, 4, 6…), el resultado es <b>positivo</b>.</li>
          <li>Si hay una cantidad <b>impar</b> (1, 3, 5…), el resultado es <b>negativo</b>.</li>
        </ul>
        <div class="ejemplo math">2(−5)(−6)(3) = 180 &nbsp;<small>← 2 negativos, par → +</small></div>
        <div class="ejemplo math">−8(−2)(−5)(3) = −240 &nbsp;<small>← 3 negativos, impar → −</small></div>
        <div class="analogia"><span class="emoji">👯</span><span>Los negativos se "anulan" de dos en dos, como bailar en parejas. Si a uno le falta pareja (cantidad impar), el resultado se queda negativo.</span></div>
        <p>Con la división pasa exactamente lo mismo:</p>
        <div class="ejemplo math">${F('−4', '−8')} = ${F(1, 2)} &nbsp;&nbsp;&nbsp; ${F('−2', 5)} = −0,40</div>
        <p class="alerta">⚠️ Errores del texto: 4(−5)(2) da <b>−40</b> (el texto dice 40), y ${F('−3(−4)(−2)', 6)} da <b>−4</b> (el texto dice 4). En los dos hay una cantidad impar de negativos.</p>`,
      quiz: { q: '¿Qué signo tiene (−1)(−2)(−3)(−4)?', ops: ['Positivo', 'Negativo'], ok: 0, exp: 'Hay 4 negativos (cantidad par), así que el resultado es positivo: 24.' }
    },
    {
      titulo: '🔤 Con letras funciona igual',
      html: `
        <p>Las letras representan números que no conocemos, así que <b>las reglas de los signos son las mismas</b>:</p>
        <div class="ejemplo math">−a(−b) = ab &nbsp;<small>← 2 negativos</small></div>
        <div class="ejemplo math">−a(−b)(−c) = −abc &nbsp;<small>← 3 negativos</small></div>
        <div class="ejemplo math">${F('−a', '−b')} = ${F('a', 'b')} &nbsp;&nbsp;&nbsp; ${F('−a', 'b')} = −${F('a', 'b')}</div>
        <p class="nota">🎉 ¡Listo! Ya conoces todas las reglas de este tema. Ahora ve a los ejercicios para ponerlas a prueba.</p>`
    }
  ],

  // ===== EJERCICIOS (cuentan para el progreso) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: `<span class="math">|−9| + |4| − |−6| = ?</span>`,
      valor: 7,
      respuesta: '7',
      pista: 'El valor absoluto convierte cualquier número en positivo. Reemplaza cada barra por su número sin signo y luego opera de izquierda a derecha, respetando el + y el − que están <b>afuera</b> de las barras.',
      pasos: [
        P('|−9| = 9, &nbsp;|4| = 4, &nbsp;|−6| = 6', 'El valor absoluto es la distancia al cero, y una distancia nunca es negativa: solo se quita el signo de adentro.'),
        P('Queda: 9 + 4 − 6', 'Los signos que están afuera de las barras (+ y −) no se tocan; esos sí cuentan.'),
        P('9 + 4 = 13', 'Las sumas y restas se hacen de izquierda a derecha.'),
        P('13 − 6 = 7', 'Terminamos con la última resta.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `<span class="math">(−7) + (−5) − (−3) = ?</span>`,
      valor: -9,
      respuesta: '−9',
      pista: 'Hazlo en dos partes. Primero junta (−7) y (−5): tienen el mismo signo. Después fíjate en el "− (−3)": dos signos menos seguidos se convierten en un signo más.',
      pasos: [
        P('(−7) + (−5) = −12', 'Tienen el mismo signo, así que se suman (7 + 5 = 12) y se conserva el signo negativo: dos deudas se juntan.'),
        P('− (−3) = + 3', 'Restar un negativo es sumar su opuesto: quitar una deuda es como ganar dinero.'),
        P('−12 + 3', 'Ahora tenemos signos distintos.'),
        P('12 − 3 = 9 y gana el negativo → −9', 'Con signos distintos se restan y queda el signo del más grande (el 12, que es negativo).')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">|12 − 19| + |−17 + 12| − |−14 + 5| = ?</span>`,
      valor: 3,
      respuesta: '3',
      pista: 'No quites el signo todavía. Primero resuelve la operación que está <b>dentro</b> de cada barra. Cuando tengas un solo número en cada una, recién conviértelo a positivo.',
      pasos: [
        P('12 − 19 = −7; &nbsp;−17 + 12 = −5; &nbsp;−14 + 5 = −9', 'Primero se resuelve lo de adentro de cada barra, igual que con un paréntesis.'),
        P('|−7| = 7, &nbsp;|−5| = 5, &nbsp;|−9| = 9', 'Ahora sí, el valor absoluto quita el signo.'),
        P('Queda: 7 + 5 − 9', 'Los signos de afuera se mantienen.'),
        P('7 + 5 = 12 → 12 − 9 = 3', 'Operamos de izquierda a derecha.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">(−a)(b)(−c)(−d) = ?</span>`,
      acepta: ['-abcd'],
      respuesta: '−abcd',
      pista: 'Las letras se comportan como números. Olvídate de ellas un momento y cuenta solo los signos menos. Al final escribe todas las letras juntas.',
      pasos: [
        P('Negativos: −a, −c y −d → son 3', 'El signo del resultado depende solo de cuántos negativos hay.'),
        P('3 es impar → el resultado es negativo', 'Los negativos se anulan de dos en dos; con 3, uno se queda sin pareja.'),
        P('Letras juntas: abcd', 'Multiplicar letras es escribirlas una al lado de la otra.'),
        P('Resultado: −abcd', 'Juntamos el signo con las letras.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">${F('(−3)(−4)(−5)', '(−6)')} = ?</span>`,
      valor: 10,
      respuesta: '10',
      pista: 'Separa el problema en dos: el <b>signo</b> y el <b>número</b>. Para el signo, cuenta los negativos de arriba y de abajo juntos. Para el número, multiplica lo de arriba sin signos y divide entre el de abajo.',
      pasos: [
        P('Negativos: 3 arriba + 1 abajo = 4', 'En una división la regla de signos es la misma que en la multiplicación, así que se cuentan todos juntos.'),
        P('4 es par → el resultado es positivo', 'Una cantidad par de negativos siempre da positivo.'),
        P('Arriba sin signos: 3 × 4 × 5 = 60', 'El signo ya lo sabemos; ahora solo calculamos el número.'),
        P('60 ÷ 6 = 10', 'Dividimos entre el número de abajo.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">−${F(1, 2)} + ${F(3, 4)} − (−2) = ?</span>`,
      valor: 2.25,
      respuesta: `${F(9, 4)} = 2,25`,
      pista: 'Empieza por el último término: menos un negativo se vuelve positivo. Luego escribe todo con denominador 4 y suma solo los numeradores.',
      pasos: [
        P('− (−2) = + 2', 'Restar un negativo es sumar su opuesto.'),
        P(`−${F(1, 2)} = −${F(2, 4)} &nbsp;y&nbsp; 2 = ${F(8, 4)}`, 'Para sumar fracciones necesitan el mismo denominador. El 4 sirve para todas: multiplicamos arriba y abajo por el mismo número, así la fracción vale lo mismo.'),
        P(`−${F(2, 4)} + ${F(3, 4)} + ${F(8, 4)}`, 'Ahora todas están "en cuartos".'),
        P(`−2 + 3 + 8 = 9 → ${F(9, 4)} = 2,25`, 'Con el mismo denominador, solo se suman los numeradores. 9 ÷ 4 = 2,25.')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: `<span class="math">|−15| − |8| + |−3| = ?</span>`,
      valor: 10,
      respuesta: '10',
      pasos: [
        P('15 − 8 + 3', 'Cada valor absoluto pierde su signo.'),
        P('15 − 8 = 7 → 7 + 3 = 10', 'De izquierda a derecha.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `<span class="math">(−12) + 7 − (−4) = ?</span>`,
      valor: -1,
      respuesta: '−1',
      pasos: [
        P('−12 + 7 = −5', 'Signos distintos: 12 − 7 = 5 y gana el 12 (negativo).'),
        P('−(−4) = +4 → −5 + 4 = −1', 'Menos un negativo es más; luego 5 − 4 = 1 y gana el negativo.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">|3 − 11| − |−4 − 6| + |0 − 2| = ?</span>`,
      valor: 0,
      respuesta: '0',
      pasos: [
        P('3 − 11 = −8; &nbsp;−4 − 6 = −10; &nbsp;0 − 2 = −2', 'Primero lo de adentro de cada barra.'),
        P('8 − 10 + 2', 'Quitamos los signos de adentro; los de afuera se quedan.'),
        P('8 − 10 = −2 → −2 + 2 = 0', 'De izquierda a derecha.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">(−2)(−3)(−1)(5) = ?</span>`,
      valor: -30,
      respuesta: '−30',
      pasos: [
        P('Negativos: 3 → impar → resultado negativo', 'Primero decidimos el signo.'),
        P('2 × 3 × 1 × 5 = 30 → −30', 'Luego multiplicamos los números sin signo.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">${F('−48', '−6')} − ${F(20, '−4')} = ?</span>`,
      valor: 13,
      respuesta: '13',
      pasos: [
        P(`${F('−48', '−6')} = 8`, '2 negativos (par) → positivo; 48 ÷ 6 = 8.'),
        P(`${F(20, '−4')} = −5`, '1 negativo (impar) → negativo; 20 ÷ 4 = 5.'),
        P('8 − (−5) = 8 + 5 = 13', 'Restar un negativo es sumar.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">${F('(−1)(−2)(−3)(−4)(−5)', '−10')} = ?</span>`,
      valor: 12,
      respuesta: '12',
      pasos: [
        P('Negativos: 5 arriba + 1 abajo = 6 → par → positivo', 'Se cuentan todos los negativos, arriba y abajo.'),
        P('1 × 2 × 3 × 4 × 5 = 120', 'El número de arriba sin signo.'),
        P('120 ÷ 10 = 12', 'Dividimos entre el de abajo.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">|−${F(3, 4)} − ${F(1, 4)}| + (−${F(1, 2)})(−4) = ?</span>`,
      valor: 3,
      respuesta: '3',
      pasos: [
        P(`−${F(3, 4)} − ${F(1, 4)} = −${F(4, 4)} = −1`, 'Mismo denominador: se suman los numeradores, y los dos son negativos.'),
        P('|−1| = 1', 'El valor absoluto quita el signo.'),
        P(`(−${F(1, 2)})(−4) = +2`, '2 negativos → positivo; la mitad de 4 es 2.'),
        P('1 + 2 = 3', 'Sumamos las dos partes.')
      ]
    }
  ]
});