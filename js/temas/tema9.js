// ===== PARTE 3 · TEMA 9: Reglas de contar (Capítulo 8) =====
TEMAS.push({
  id: 't9',
  parte: 3,
  numero: 9,
  capitulo: 'Capítulo 8',
  titulo: 'Reglas de contar',
  descripcion: 'Factorial, variaciones, permutaciones, combinaciones y arreglos con repetición.',

  teoria: [
    {
      titulo: '🤔 ¿Para qué sirven las reglas de contar?',
      html: `
        <p>Para calcular probabilidades hay que saber <b>cuántos resultados posibles hay</b>. Cuando son pocos, se cuentan con los dedos; cuando son miles, necesitamos <b>fórmulas</b>.</p>
        <div class="analogia"><span class="emoji">👕</span><span><b>Principio de multiplicación:</b> si tienes 3 poleras y 2 pantalones, puedes vestirte de 3 × 2 = <b>6</b> formas. Cuando una elección se hace en varias etapas, <b>se multiplican</b> las opciones de cada etapa.</span></div>`,
      quiz: { q: 'Un menú tiene 4 entradas y 3 postres. ¿Cuántas combinaciones de entrada + postre hay?', ops: ['7', '12', '43'], ok: 1, exp: 'Principio de multiplicación: 4 × 3 = 12.' }
    },
    {
      titulo: '❗ Notación factorial n!',
      html: `
        <p><b>n!</b> (se lee "n factorial") es multiplicar todos los números desde 1 hasta n:</p>
        <div class="ejemplo math">5! = 1 · 2 · 3 · 4 · 5 = 120</div>
        <div class="ejemplo math">n! · (n + 1) = (n + 1)! &nbsp;&nbsp;<small>ej: 4! · 5 = 5!</small></div>
        <div class="ejemplo math">0! = 1 &nbsp;&nbsp;<small>← por convención (hay 1 forma de ordenar "nada")</small></div>
        <p class="nota">💡 Truco para simplificar: ${F('7!', '5!')} = ${F('7 · 6 · 5!', '5!')} = 7 · 6 = 42. ¡No hace falta calcular 7! completo!</p>`,
      quiz: { q: '¿Cuánto es 4!?', ops: ['10', '16', '24'], ok: 2, exp: '1 · 2 · 3 · 4 = 24.' }
    },
    {
      titulo: '🥇 Variaciones: el orden SÍ importa',
      html: `
        <p>Escoger <b>r</b> elementos de <b>n</b> cuando el <b>orden importa</b> (abc ≠ bac):</p>
        <div class="ejemplo math">V<sub>n,r</sub> = ${F('n!', '(n − r)!')}</div>
        <div class="analogia"><span class="emoji">🏆</span><span>Un <b>podio</b>: no es lo mismo quedar 1.º que 3.º. Con 4 corredores (a, b, c, d) y 3 lugares del podio: V<sub>4,3</sub> = 4 · 3 · 2 = <b>24</b>.</span></div>
        <p>Truco rápido: empieza en n y multiplica hacia abajo <b>r números</b>. V<sub>10,3</sub> = 10 · 9 · 8 = 720.</p>`
    },
    {
      titulo: '🔀 Permutaciones: ordenar a todos',
      html: `
        <p>Es una variación en la que <b>se usan todos</b> los elementos (r = n). Solo cambia el orden:</p>
        <div class="ejemplo math">P<sub>r</sub> = r!</div>
        <div class="ejemplo math">Con a, b, c: P<sub>3</sub> = 3! = 6 → abc, acb, bac, bca, cab, cba</div>
        <div class="analogia"><span class="emoji">📚</span><span>¿De cuántas formas ordenas 4 libros en un estante? Para el primer lugar tienes 4 opciones, luego 3, luego 2, luego 1: 4! = <b>24</b>.</span></div>`
    },
    {
      titulo: '🍨 Combinaciones: el orden NO importa',
      html: `
        <p>Escoger <b>r</b> de <b>n</b> cuando el <b>orden no importa</b> (abc = bac = cba, es el mismo grupo):</p>
        <div class="ejemplo math">C<sub>n,r</sub> = ${F('n!', 'r! · (n − r)!')}</div>
        <div class="analogia"><span class="emoji">🍨</span><span>Un helado de <b>chocolate y fresa</b> es el mismo que uno de <b>fresa y chocolate</b>. Si hay 6 sabores y eliges 2: C<sub>6,2</sub> = ${F('6 · 5', '2 · 1')} = <b>15</b> helados distintos.</span></div>
        <div class="ejemplo math">C<sub>4,3</sub> = ${F('4!', '3! · 1!')} = ${F(24, 6)} = 4</div>
        <p>Relaciones útiles: C<sub>n,n</sub> = 1 · C<sub>n,0</sub> = 1 · C<sub>n,1</sub> = n · C<sub>n,n−r</sub> = C<sub>n,r</sub></p>`,
      quiz: { q: 'Elegir a 3 delegados de un curso (todos con el mismo cargo) es…', ops: ['Variación', 'Combinación'], ok: 1, exp: 'Los 3 delegados tienen el mismo cargo: elegir a Ana, Beto y Caro es el mismo grupo que Caro, Ana y Beto.' }
    },
    {
      titulo: '🔐 Con repetición: nʳ',
      html: `
        <p>Si cada posición puede usar <b>cualquiera</b> de los n elementos (se pueden repetir), se multiplica n por sí mismo r veces:</p>
        <div class="ejemplo math">Arreglos con repetición = n<sup>r</sup></div>
        <div class="analogia"><span class="emoji">🔐</span><span>Un candado de 4 anillos con los dígitos 1 al 5: cada anillo tiene 5 opciones → 5<sup>4</sup> = <b>625</b> combinaciones. Como una es la correcta, puedes fallar como máximo <b>624</b> veces.</span></div>
        <div class="ejemplo math">Examen de 12 preguntas con 5 alternativas: 5<sup>12</sup> = 244 140 625 formas de responder</div>`
    },
    {
      titulo: '🚩 Permutaciones con elementos repetidos',
      html: `
        <p>Si al ordenar hay elementos <b>iguales</b>, se divide entre los factoriales de cada grupo repetido (porque cambiarlos de lugar entre sí no crea algo nuevo):</p>
        <div class="ejemplo math">${F('n!', 'p<sub>1</sub>! · p<sub>2</sub>! · … · p<sub>k</sub>!')}</div>
        <div class="ejemplo math">5 banderas: 2 amarillas y 3 rojas → ${F('5!', '2! · 3!')} = ${F(120, 12)} = <b>10</b> señales</div>
        <div class="ejemplo math">12 estudiantes en 3 carros (3, 4 y 5 lugares) → ${F('12!', '3! · 4! · 5!')} = <b>27 720</b></div>`
    },
    {
      titulo: '🧭 ¿Qué fórmula uso?',
      html: `
        <p>Hazte estas preguntas en orden:</p>
        <ol>
          <li><b>¿Se pueden repetir los elementos?</b> Sí → <b>n<sup>r</sup></b>.</li>
          <li><b>¿Hay elementos iguales que ordenar?</b> Sí → <b>n! / (p₁! p₂! …)</b>.</li>
          <li><b>¿Importa el orden?</b>
            <ul>
              <li>Sí, y uso todos → <b>Permutación r!</b></li>
              <li>Sí, y uso solo algunos → <b>Variación n!/(n−r)!</b></li>
              <li>No → <b>Combinación n!/(r!(n−r)!)</b></li>
            </ul>
          </li>
        </ol>
        <div class="analogia"><span class="emoji">🗝️</span><span>Pista para saber si importa el orden: si los elegidos tienen <b>puestos o cargos distintos</b> (1.º, 2.º, presidente, tesorero…), importa. Si forman un <b>grupo</b> donde todos valen igual, no importa.</span></div>`,
      quiz: { q: 'Formar números de 3 cifras distintas con 1, 2, 3, 4, 5 es…', ops: ['Variación', 'Combinación', 'Con repetición'], ok: 0, exp: '123 y 321 son números distintos (importa el orden) y las cifras no se repiten.' }
    }
  ],

  // ===== EJERCICIOS (del texto, págs. 44 a 47) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: 'Con las cifras 1, 2, 3, 4, 5, ¿cuántos números de <b>tres cifras distintas</b> podemos formar?',
      valor: 60,
      respuesta: '60',
      pista: '¿Importa el orden? (¿es lo mismo 123 que 321?). ¿Se pueden repetir las cifras?',
      pasos: [
        P('Importa el orden y no hay repetición → Variación', '123 y 321 son números diferentes, y las cifras deben ser distintas.'),
        P(`V<sub>5,3</sub> = ${F('5!', '(5 − 3)!')} = ${F('5!', '2!')}`, 'n = 5 cifras disponibles, r = 3 lugares.'),
        P('= 5 · 4 · 3 = 60', 'Para las centenas hay 5 opciones, para las decenas quedan 4 y para las unidades quedan 3.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: '¿De cuántas maneras distintas pueden colocarse <b>cuatro libros</b> en un estante?',
      valor: 24,
      respuesta: '24',
      pista: 'Se usan todos los libros y solo cambia el orden en que quedan.',
      pasos: [
        P('Se ordenan todos → Permutación', 'Los 4 libros siempre están; lo único que cambia es su posición.'),
        P('P<sub>4</sub> = 4! = 4 · 3 · 2 · 1', '4 opciones para el primer lugar, 3 para el segundo, 2 para el tercero y 1 para el último.'),
        P('= 24', 'Multiplicamos.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: '¿Cuántos <b>tribunales de cuatro profesores</b> se pueden formar con <b>seis</b> profesores?',
      valor: 15,
      respuesta: '15',
      pista: 'En un tribunal, ¿importa quién fue elegido primero? Si los 4 tienen el mismo papel, el orden no importa.',
      pasos: [
        P('El orden no importa → Combinación', 'Un tribunal con Ana, Beto, Caro y Dani es el mismo sin importar en qué orden se los nombró.'),
        P(`C<sub>6,4</sub> = ${F('6!', '4! · 2!')}`, 'n = 6 profesores, r = 4 en el tribunal.'),
        P(`= ${F('6 · 5 · 4!', '4! · 2')} = ${F(30, 2)} = 15`, 'Cancelamos el 4! de arriba con el de abajo.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: '<b>Diez personas</b> compiten por <b>tres premios distintos</b> (cada una gana como máximo uno). ¿De cuántas maneras se pueden repartir?',
      valor: 720,
      respuesta: '720',
      pista: 'Los premios son distintos: no es lo mismo ganar el primero que el tercero. ¿Variación o combinación?',
      pasos: [
        P('Los premios son distintos → importa el orden → Variación', 'Que Ana gane el 1.º y Beto el 2.º es diferente a lo contrario.'),
        P(`V<sub>10,3</sub> = ${F('10!', '7!')}`, 'n = 10 personas, r = 3 premios.'),
        P('= 10 · 9 · 8 = 720', '10 candidatos para el primer premio, 9 para el segundo y 8 para el tercero.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: 'Lanzamos una moneda <b>12 veces</b>. ¿De cuántas maneras podemos obtener <b>7 caras y 5 cruces</b>?',
      valor: 792,
      respuesta: '792',
      pista: 'Es como ordenar 12 letras donde 7 son C y 5 son X. Las C son iguales entre sí, igual que las X.',
      pasos: [
        P('Ordenar 12 resultados: 7 iguales (C) y 5 iguales (X)', 'Es una permutación con elementos repetidos.'),
        P(`${F('12!', '7! · 5!')}`, 'Dividimos entre 7! y 5! porque intercambiar dos caras entre sí no cambia nada.'),
        P(`= ${F('12 · 11 · 10 · 9 · 8', '5 · 4 · 3 · 2 · 1')} = ${F(95040, 120)} = 792`, 'Cancelamos el 7! y calculamos.'),
        P('Es lo mismo que C<sub>12,7</sub>', 'Elegir en cuáles de los 12 lanzamientos salen las 7 caras.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: '<b>Doce estudiantes</b> van a Cochabamba en tres carros: 3 en el carro 1, 4 en el carro 2 y 5 en el carro 3. ¿De cuántas formas se pueden acomodar?',
      valor: 27720,
      respuesta: '27 720',
      pista: 'Solo importa en qué carro va cada uno, no el asiento. Es una permutación con grupos repetidos de 3, 4 y 5.',
      pasos: [
        P('n = 12, &nbsp;p₁ = 3, &nbsp;p₂ = 4, &nbsp;p₃ = 5', 'Dentro de cada carro el orden no importa, así que cada carro es un "grupo".'),
        P(`${F('12!', '3! · 4! · 5!')}`, 'Fórmula de permutaciones con repetición.'),
        P(`= ${F('479 001 600', '6 · 24 · 120')} = ${F('479 001 600', '17 280')}`, '12! = 479 001 600; 3! = 6, 4! = 24 y 5! = 120.'),
        P('= 27 720', 'Dividimos.')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (propia, no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: '¿De cuántas formas se pueden ordenar <b>5 personas</b> en una fila?',
      valor: 120,
      respuesta: '120',
      pasos: [P('5! = 5 · 4 · 3 · 2 · 1 = 120', 'Se ordenan todos: permutación.')]
    },
    {
      nivel: 'facil',
      enunciado: 'Calcula <span class="math">' + F('6!', '4!') + '</span>',
      valor: 30,
      respuesta: '30',
      pasos: [P(`${F('6 · 5 · 4!', '4!')} = 6 · 5 = 30`, 'Escribimos 6! como 6 · 5 · 4! y cancelamos el 4!.')]
    },
    {
      nivel: 'medio',
      enunciado: 'En un club de <b>8 personas</b> hay que elegir <b>presidente y secretario</b>. ¿Cuántas formas hay?',
      valor: 56,
      respuesta: '56',
      pasos: [
        P('Cargos distintos → importa el orden → Variación', 'Ser presidente no es lo mismo que ser secretario.'),
        P('V<sub>8,2</sub> = 8 · 7 = 56', '8 opciones para presidente y 7 para secretario.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: 'De <b>7 amigos</b> se eligen <b>3</b> para un equipo (todos con el mismo papel). ¿Cuántos equipos distintos hay?',
      valor: 35,
      respuesta: '35',
      pasos: [
        P('Mismo papel → no importa el orden → Combinación', 'Un equipo es un grupo.'),
        P(`C<sub>7,3</sub> = ${F('7 · 6 · 5', '3 · 2 · 1')} = ${F(210, 6)} = 35`, 'Variación dividida entre 3! (los órdenes del mismo grupo).')
      ]
    },
    {
      nivel: 'medio',
      enunciado: '¿Cuántas <b>contraseñas de 3 dígitos</b> (del 0 al 9) hay si los dígitos <b>se pueden repetir</b>?',
      valor: 1000,
      respuesta: '1000',
      pasos: [P('10<sup>3</sup> = 10 · 10 · 10 = 1000', 'Con repetición: cada posición tiene las 10 opciones.')]
    },
    {
      nivel: 'dificil',
      enunciado: '¿Cuántas palabras distintas (con o sin sentido) se forman con las letras de <b>CASA</b>?',
      valor: 12,
      respuesta: '12',
      pasos: [
        P('4 letras, la A se repite 2 veces', 'Es una permutación con elementos repetidos.'),
        P(`${F('4!', '2!')} = ${F(24, 2)} = 12`, 'Dividimos entre 2! porque cambiar las dos A entre sí no crea una palabra nueva.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: 'Se forma una comisión con <b>2 hombres</b> (de 5) y <b>2 mujeres</b> (de 4). ¿Cuántas comisiones distintas hay?',
      valor: 60,
      respuesta: '60',
      pasos: [
        P(`C<sub>5,2</sub> = ${F('5 · 4', 2)} = 10`, 'Formas de elegir a los hombres (el orden no importa).'),
        P(`C<sub>4,2</sub> = ${F('4 · 3', 2)} = 6`, 'Formas de elegir a las mujeres.'),
        P('10 × 6 = 60', 'Principio de multiplicación: cada grupo de hombres se combina con cada grupo de mujeres.')
      ]
    }
  ]
});