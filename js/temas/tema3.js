// ===== PARTE 1 · TEMA 3: Fracciones y exponentes (Capítulo 3) =====
TEMAS.push({
  id: 't3',
  parte: 1,
  numero: 3,
  capitulo: 'Capítulo 3',
  titulo: 'Fracciones y exponentes',
  descripcion: 'Sumar, multiplicar y simplificar fracciones; las leyes de los exponentes.',

  teoria: [
    {
      titulo: '🍕 ¿Qué es una fracción?',
      html: `
        <div class="ejemplo math" style="font-size:1.4em">${F('numerador', 'denominador')}</div>
        <p>El <b>denominador</b> (abajo) dice en cuántas partes iguales se cortó el entero. El <b>numerador</b> (arriba) dice cuántas partes tomas.</p>
        <div class="analogia"><span class="emoji">🍕</span><span>${F(3, 8)} de pizza: la cortaron en 8 pedazos y tú comiste 3. Si comes ${F(8, 8)}, te comiste la pizza entera, o sea 1.</span></div>`,
      quiz: { q: '¿Qué fracción es más grande?', ops: [`${F(1, 2)}`, `${F(1, 4)}`], ok: 0, exp: 'La mitad de una pizza es más que un cuarto: mientras más grande el denominador, más pequeños son los pedazos.' }
    },
    {
      titulo: '➕ Sumar fracciones',
      html: `
        <p>Solo se pueden sumar pedazos <b>del mismo tamaño</b>. Por eso primero se busca un denominador común.</p>
        <ol>
          <li>Busca el <b>mínimo común denominador</b>: el número más pequeño que se puede dividir entre todos los denominadores.</li>
          <li>Convierte cada fracción a ese denominador, multiplicando <b>arriba y abajo por lo mismo</b>.</li>
          <li>Suma los numeradores y deja el denominador igual.</li>
        </ol>
        <div class="ejemplo math">${F(1, 3)} + ${F(1, 2)} = ${F(2, 6)} + ${F(3, 6)} = ${F(5, 6)}</div>
        <p>Atajo, o "regla de la cruz", para dos fracciones:</p>
        <div class="ejemplo math">${F('a', 'b')} + ${F('c', 'd')} = ${F('ad + cb', 'bd')}</div>
        <p class="alerta">⚠️ Error común: ${F(1, 3)} + ${F(1, 2)} ≠ ${F(2, 5)}. ¡Los denominadores nunca se suman!</p>`,
      quiz: { q: '¿Cuánto es ' + F(1, 4) + ' + ' + F(1, 4) + '?', ops: [F(2, 8), F(1, 2), F(2, 4) + ' y también ' + F(1, 2)], ok: 2, exp: 'Mismo denominador: 1 + 1 = 2 cuartos, que simplificado es un medio. Las dos formas valen lo mismo.' }
    },
    {
      titulo: '✖️ Multiplicar fracciones',
      html: `
        <p>Multiplicar es la operación más fácil con fracciones: <b>arriba por arriba y abajo por abajo</b>. ¡No hace falta denominador común!</p>
        <div class="ejemplo math">${F(2, 5)} · ${F(3, 7)} = ${F('2 · 3', '5 · 7')} = ${F(6, 35)}</div>
        <p>Un <b>entero por una fracción</b> multiplica solo al numerador (el entero es como ${F(4, 1)}):</p>
        <div class="ejemplo math">${F(2, 5)} · 4 = ${F(8, 5)} = 1,60</div>`
    },
    {
      titulo: '🙃 Dividir fracciones: da la vuelta y multiplica',
      html: `
        <p>Para dividir, se multiplica por la segunda fracción <b>dada vuelta</b> (su recíproco):</p>
        <div class="ejemplo math">${F(2, 3)} ÷ ${F(4, 5)} = ${F(2, 3)} · ${F(5, 4)} = ${F(10, 12)} = ${F(5, 6)}</div>
        <div class="analogia"><span class="emoji">🤸</span><span>Frase para recordarlo: "la primera se queda quieta, la segunda da una voltereta, y luego se multiplica".</span></div>
        <p class="nota">💡 No está explícito en el texto, pero lo vas a necesitar.</p>`
    },
    {
      titulo: '✂️ Simplificar y cancelar',
      html: `
        <p>Simplificar es escribir la misma fracción con números más pequeños. Se divide arriba y abajo entre el <b>mismo</b> número:</p>
        <div class="ejemplo math">${F(12, 60)} = ${F('12 ÷ 12', '60 ÷ 12')} = ${F(1, 5)}</div>
        <p>Al multiplicar varias fracciones, puedes <b>cancelar</b> antes de calcular (un número de arriba con uno de abajo):</p>
        <div class="ejemplo math">${F(5, 12)} · ${F(4, 9)} · ${F(3, 10)} = ${F('5 · 4 · 3', '12 · 9 · 10')} = ${F(60, 1080)} = ${F(1, 18)}</div>
        <p>Truco: 4 · 3 = 12 se cancela con el 12 de abajo, y el 5 con el 10 (queda un 2 abajo): ${F(1, '9 · 2')} = ${F(1, 18)}.</p>`
    },
    {
      titulo: '💯 Fracción → decimal → porcentaje',
      html: `
        <div class="ejemplo math">${F(3, 7)} = 3 ÷ 7 = 0,428571… ≈ 0,43</div>
        <div class="ejemplo math">0,43 × 100 = 43 %</div>
        <p class="nota">💡 La raya de la fracción significa "dividido entre". Para pasar a porcentaje, multiplica por 100: la coma se corre dos lugares a la derecha.</p>`,
      quiz: { q: '¿Qué porcentaje es ' + F(1, 4) + '?', ops: ['14 %', '25 %', '40 %'], ok: 1, exp: '1 ÷ 4 = 0,25 y 0,25 × 100 = 25 %.' }
    },
    {
      titulo: '🔋 ¿Qué es una potencia?',
      html: `
        <p>Una potencia es una <b>multiplicación repetida</b>:</p>
        <div class="ejemplo math">4<sup>2</sup> = 4 · 4 = 16 &nbsp;&nbsp;&nbsp; 4<sup>3</sup> = 4 · 4 · 4 = 64</div>
        <div class="ejemplo math">a<sup>N</sup> = a · a · a ··· a &nbsp;(N veces)</div>
        <p>El número grande es la <b>base</b> y el pequeñito de arriba es el <b>exponente</b> (cuántas veces se repite).</p>
        <p class="alerta">⚠️ 4<sup>3</sup> NO es 4 × 3 = 12. Es 4 · 4 · 4 = 64.</p>
        <p class="nota">💡 Cualquier número (distinto de 0) elevado a la 0 da 1: a<sup>0</sup> = 1.</p>`
    },
    {
      titulo: '📜 Las leyes de los exponentes',
      html: `
        <div class="tabla-scroll"><table>
          <tr><th>Ley</th><th>Fórmula</th><th>Ejemplo</th></tr>
          <tr><td>Multiplicar, misma base: <b>se suman</b></td><td class="math">a<sup>N</sup> · a<sup>P</sup> = a<sup>N+P</sup></td><td class="math">2<sup>2</sup> · 2<sup>4</sup> = 2<sup>6</sup></td></tr>
          <tr><td>Dividir, misma base: <b>se restan</b></td><td class="math">${F('a<sup>N</sup>', 'a<sup>P</sup>')} = a<sup>N−P</sup></td><td class="math">${F('2<sup>4</sup>', '2<sup>2</sup>')} = 2<sup>2</sup></td></tr>
          <tr><td>Exponente negativo: <b>se da vuelta</b></td><td class="math">a<sup>−N</sup> = ${F(1, 'a<sup>N</sup>')}</td><td class="math">2<sup>−3</sup> = ${F(1, 8)}</td></tr>
          <tr><td>Potencia de potencia: <b>se multiplican</b></td><td class="math">(a<sup>N</sup>)<sup>P</sup> = a<sup>N·P</sup></td><td class="math">(3<sup>2</sup>)<sup>3</sup> = 3<sup>6</sup></td></tr>
        </table></div>
        <div class="analogia"><span class="emoji">🧮</span><span>¿Por qué se suman? 2<sup>2</sup> · 2<sup>4</sup> = (2·2)·(2·2·2·2): son 6 doses multiplicados, o sea 2<sup>6</sup>. ¡La ley sale de contar!</span></div>
        <p class="alerta">⚠️ Estas leyes funcionan <b>solo con la misma base</b>: 2<sup>3</sup> · 5<sup>2</sup> no se puede juntar así.</p>`,
      quiz: { q: '¿Cuánto es 5<sup>3</sup> · 5<sup>2</sup>?', ops: ['5<sup>6</sup>', '5<sup>5</sup>', '25<sup>5</sup>'], ok: 1, exp: 'Misma base, se multiplican: los exponentes se suman, 3 + 2 = 5.' }
    }
  ],

  // ===== EJERCICIOS (cuentan para el progreso) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: `<span class="math">${F(1, 4)} + ${F(2, 3)} = ?</span>`,
      valor: 11 / 12,
      respuesta: F(11, 12),
      pista: 'Solo puedes sumar fracciones con el mismo denominador. Busca el número más pequeño que sea múltiplo de 4 y de 3.',
      pasos: [
        P('Mínimo común denominador de 4 y 3: 12', 'Necesitamos pedazos del mismo tamaño. 12 es el primer número que se divide exacto entre 4 y entre 3.'),
        P(`${F(1, 4)} = ${F('1 · 3', '4 · 3')} = ${F(3, 12)}`, 'Multiplicamos arriba y abajo por 3: así la fracción vale lo mismo, pero ahora está en doceavos.'),
        P(`${F(2, 3)} = ${F('2 · 4', '3 · 4')} = ${F(8, 12)}`, 'Ahora multiplicamos arriba y abajo por 4.'),
        P(`${F(3, 12)} + ${F(8, 12)} = ${F(11, 12)}`, 'Con el mismo denominador se suman solo los numeradores. 11 y 12 no tienen divisores en común, así que ya está simplificada.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `<span class="math">3<sup>2</sup> × 3<sup>4</sup> × 3<sup>3</sup> = ?</span>`,
      valor: 19683,
      acepta: ['3^9'],
      respuesta: '3<sup>9</sup> = 19 683',
      pista: 'Las tres potencias tienen la misma base. Revisa en la tabla qué pasa con los exponentes al multiplicar. Puedes responder con ^ o calcular el número.',
      pasos: [
        P('Las tres tienen la misma base: 3', 'Las leyes de exponentes solo funcionan con la misma base.'),
        P('2 + 4 + 3 = 9', 'Al multiplicar potencias de igual base, los exponentes se suman: son 2 + 4 + 3 treses multiplicados.'),
        P('3<sup>9</sup> = 19 683', 'Si quieres el número: 3 multiplicado 9 veces por sí mismo.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">${F(-1, 15)} + ${F(-1, 20)} + ${F(-1, 12)} = ?</span>`,
      valor: -0.2,
      respuesta: `−${F(1, 5)}`,
      pista: 'Las tres son negativas, así que el resultado también. Prueba con los múltiplos de 20 hasta encontrar uno que también se divida entre 15 y entre 12.',
      pasos: [
        P('Denominador común de 15, 20 y 12: 60', '60 ÷ 15 = 4, 60 ÷ 20 = 3 y 60 ÷ 12 = 5: es el más pequeño que sirve para los tres.'),
        P(`−${F(4, 60)} − ${F(3, 60)} − ${F(5, 60)}`, 'Cada numerador se multiplica por lo mismo que su denominador (×4, ×3 y ×5).'),
        P(`−${F(12, 60)}`, 'Todos son negativos: se suman (4 + 3 + 5 = 12) y se conserva el signo.'),
        P(`−${F(12, 60)} = −${F(1, 5)}`, 'Simplificamos dividiendo arriba y abajo entre 12.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">2<sup>−3</sup> × 2<sup>−2</sup> × ${F(1, '2<sup>4</sup>')} = ?</span>`,
      valor: 1 / 512,
      acepta: ['2^-9', '2^(-9)'],
      respuesta: `2<sup>−9</sup> = ${F(1, 512)}`,
      pista: 'Escribe la fracción del final como potencia de 2 con exponente negativo (1/aⁿ = a⁻ⁿ). Así tendrás tres potencias de la misma base.',
      pasos: [
        P(`${F(1, '2<sup>4</sup>')} = 2<sup>−4</sup>`, 'La ley del exponente negativo funciona en los dos sentidos: "dar vuelta" la fracción cambia el signo del exponente.'),
        P('−3 + (−2) + (−4) = −9', 'Misma base multiplicándose: se suman los exponentes, con cuidado con los signos.'),
        P(`2<sup>−9</sup> = ${F(1, '2<sup>9</sup>')}`, 'Un exponente negativo significa "uno sobre" la potencia positiva.'),
        P(`2<sup>9</sup> = 512 → ${F(1, 512)}`, '2·2·2·2·2·2·2·2·2 = 512.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">(${F('5m', '9n')}) (${F('3n', '15m<sup>2</sup>')}) = ?</span>`,
      acepta: ['1/(9m)', '1/9m'],
      respuesta: F(1, '9m'),
      pista: 'Multiplica numeradores entre sí y denominadores entre sí. Después simplifica por partes: primero los números y luego cada letra.',
      pasos: [
        P(`${F('5m · 3n', '9n · 15m<sup>2</sup>')} = ${F('15mn', '135nm<sup>2</sup>')}`, 'Fracciones: arriba por arriba y abajo por abajo.'),
        P(`${F(15, 135)} = ${F(1, 9)}`, '135 ÷ 15 = 9, así que dividimos arriba y abajo entre 15.'),
        P(`${F('n', 'n')} = 1`, 'La n está arriba y abajo: se cancela (cualquier cosa dividida entre sí misma da 1).'),
        P(`${F('m', 'm<sup>2</sup>')} = ${F(1, 'm')}`, 'Una m de arriba se cancela con una de las dos m de abajo, y queda una m abajo.'),
        P(`${F(1, 9)} · ${F(1, 'm')} = ${F(1, '9m')}`, 'Juntamos lo que quedó.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">(${F('x<sup>−3</sup> y<sup>−4</sup> z<sup>−2</sup>', '2x<sup>−3</sup> y<sup>−1</sup>')})<sup>2</sup> = ?</span>`,
      acepta: ['1/(4y^6z^4)', '1/4y^6z^4', '1/(4z^4y^6)'],
      respuesta: F(1, '4y<sup>6</sup>z<sup>4</sup>'),
      pista: 'Trabaja primero dentro del paréntesis, letra por letra: resta el exponente de abajo al de arriba (cuidado al restar negativos). Al final eleva todo al cuadrado, incluido el 2.',
      pasos: [
        P('x: &nbsp;−3 − (−3) = 0 → x<sup>0</sup> = 1', 'División de igual base: se restan los exponentes. Exponente 0 da 1, así que la x desaparece.'),
        P('y: &nbsp;−4 − (−1) = −3 → y<sup>−3</sup>', 'Restar un negativo es sumar: −4 + 1 = −3.'),
        P('z se queda: z<sup>−2</sup>', 'Solo está arriba, no hay nada con qué combinarla.'),
        P(`${F('y<sup>−3</sup>z<sup>−2</sup>', 2)} = ${F(1, '2y<sup>3</sup>z<sup>2</sup>')}`, 'Los exponentes negativos se pasan abajo con exponente positivo.'),
        P(`(${F(1, '2y<sup>3</sup>z<sup>2</sup>')})<sup>2</sup> = ${F(1, '4y<sup>6</sup>z<sup>4</sup>')}`, 'Al elevar al cuadrado, cada parte se eleva: 2² = 4 y en las letras se multiplican los exponentes (3·2 = 6, 2·2 = 4).')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: `<span class="math">${F(2, 5)} + ${F(1, 3)} = ?</span>`,
      valor: 11 / 15,
      respuesta: F(11, 15),
      pasos: [
        P(`${F(6, 15)} + ${F(5, 15)}`, 'Denominador común 15: el primero ×3 y el segundo ×5.'),
        P(`= ${F(11, 15)}`, 'Se suman los numeradores.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: `<span class="math">${F(3, 4)} · ${F(8, 9)} = ?</span>`,
      valor: 2 / 3,
      respuesta: F(2, 3),
      pasos: [
        P(`${F('3 · 8', '4 · 9')} = ${F(24, 36)}`, 'Arriba por arriba y abajo por abajo.'),
        P(`${F(24, 36)} = ${F(2, 3)}`, 'Simplificamos dividiendo entre 12.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">${F(5, 6)} − ${F(3, 4)} = ?</span>`,
      valor: 1 / 12,
      respuesta: F(1, 12),
      pasos: [
        P(`${F(10, 12)} − ${F(9, 12)}`, 'Denominador común 12: el primero ×2 y el segundo ×3.'),
        P(`= ${F(1, 12)}`, 'Se restan los numeradores: 10 − 9 = 1.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">${F(2, 3)} ÷ ${F(4, 9)} = ?</span>`,
      valor: 1.5,
      respuesta: `${F(3, 2)} = 1,5`,
      pasos: [
        P(`${F(2, 3)} · ${F(9, 4)}`, 'Para dividir, la segunda fracción se da vuelta y se multiplica.'),
        P(`${F(18, 12)} = ${F(3, 2)}`, 'Multiplicamos y simplificamos entre 6.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: `<span class="math">${F('5<sup>7</sup>', '5<sup>4</sup>')} = ?</span>`,
      valor: 125,
      acepta: ['5^3'],
      respuesta: '5<sup>3</sup> = 125',
      pasos: [
        P('5<sup>7−4</sup> = 5<sup>3</sup>', 'División con la misma base: se restan los exponentes.'),
        P('5 · 5 · 5 = 125', 'Calculamos la potencia.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">(2<sup>3</sup>)<sup>2</sup> × 2<sup>−4</sup> = ?</span>`,
      valor: 4,
      acepta: ['2^2'],
      respuesta: '2<sup>2</sup> = 4',
      pasos: [
        P('(2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup>', 'Potencia de potencia: los exponentes se multiplican.'),
        P('2<sup>6</sup> × 2<sup>−4</sup> = 2<sup>6 + (−4)</sup> = 2<sup>2</sup> = 4', 'Multiplicación de igual base: se suman los exponentes.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: `<span class="math">${F('a<sup>2</sup> b<sup>−3</sup>', 'a<sup>−1</sup> b<sup>2</sup>')} = ?</span>`,
      acepta: ['a^3/b^5', 'a^3b^-5', 'a^3*b^-5'],
      respuesta: F('a<sup>3</sup>', 'b<sup>5</sup>'),
      pasos: [
        P('a: &nbsp;2 − (−1) = 3 → a<sup>3</sup>', 'División: se restan los exponentes, y restar un negativo es sumar.'),
        P('b: &nbsp;−3 − 2 = −5 → b<sup>−5</sup>', 'Igual con la b.'),
        P(`a<sup>3</sup> b<sup>−5</sup> = ${F('a<sup>3</sup>', 'b<sup>5</sup>')}`, 'El exponente negativo pasa abajo como positivo.')
      ]
    }
  ]
});