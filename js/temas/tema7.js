// ===== PARTE 3 · TEMA 7: Estadística y escalas de medición (Capítulo 6) =====
const ESCALAS = ['Nominal', 'Ordinal', 'Intervalo', 'Razón'];
const TIPO_VAR = ['Discreta', 'Continua'];

TEMAS.push({
  id: 't7',
  parte: 3,
  numero: 7,
  capitulo: 'Capítulo 6',
  titulo: 'Estadística y escalas de medición',
  descripcion: 'Qué es la estadística, población y muestra, las 4 escalas de medición y los tipos de variable.',

  teoria: [
    {
      titulo: '🕵️ ¿Qué es la estadística?',
      html: `
        <p>Es la ciencia que se encarga de <b>recopilar, organizar, presentar, analizar e interpretar datos numéricos</b>, para tomar mejores decisiones.</p>
        <div class="analogia"><span class="emoji">🕵️</span><span>Piensa en un detective: junta pistas (datos), las ordena, busca patrones y al final llega a una conclusión. ¡La estadística es el detective de los números!</span></div>
        <p>En psicología se usa muchísimo: para medir la ansiedad, comparar terapias, analizar tests…</p>`
    },
    {
      titulo: '🍲 Población, muestra y las dos ramas',
      html: `
        <p><b>Población:</b> todos los individuos, objetos o mediciones que nos interesan.<br>
        <b>Muestra:</b> una parte de esa población.</p>
        <div class="analogia"><span class="emoji">🍲</span><span>Para saber si la sopa está salada no te tomas toda la olla: pruebas <b>una cucharada</b>. La olla es la población y la cucharada es la muestra.</span></div>
        <div class="tabla-scroll"><table>
          <tr><th>Rama</th><th>¿Qué hace?</th><th>Ejemplo</th></tr>
          <tr><td><b>Descriptiva</b></td><td>Organiza y resume los datos que ya tienes.</td><td>"El promedio de este curso fue 68."</td></tr>
          <tr><td><b>Inferencial</b></td><td>Usa una muestra para sacar conclusiones de toda la población.</td><td>"Con 200 encuestados, estimamos que el 60 % de la carrera duerme poco."</td></tr>
        </table></div>`,
      quiz: { q: 'Probar una cucharada para saber cómo está toda la olla es…', ops: ['Estadística descriptiva', 'Estadística inferencial'], ok: 1, exp: 'Usas una parte (muestra) para concluir algo sobre el todo (población): eso es inferir.' }
    },
    {
      titulo: '📐 ¿Qué es medir?',
      html: `
        <p><b>Medir</b> es asignar números a los objetos según ciertas reglas.</p>
        <p>Cada característica se presenta en distintas <b>modalidades</b>:</p>
        <ul>
          <li>"Sexo": 2 modalidades (varón y mujer).</li>
          <li>"Religión": muchas modalidades (católico, budista, ateo…).</li>
          <li>"Peso": infinitas modalidades, porque entre 60 kg y 61 kg siempre cabe otro valor (60,5; 60,51…).</li>
        </ul>
        <p class="nota">💡 La regla de oro: los números solo pueden decir lo que de verdad se puede comprobar en la realidad. Por eso existen <b>4 escalas</b>, cada una con más "poderes" que la anterior.</p>`
    },
    {
      titulo: '🏷️ Escala nominal: solo nombres',
      html: `
        <p>Es el nivel más bajo. Solo sirve para <b>clasificar en categorías</b>. Los números, si los hay, son solo etiquetas.</p>
        <div class="ejemplo">Marca de zapatos (Nike, Adidas…), color de ojos, religión, nacionalidad, tipo de fruta.</div>
        <p>Lo único que se puede decir es si dos cosas son <b>iguales o distintas</b> (=, ≠) y <b>contar</b> cuántas hay en cada categoría.</p>
        <div class="analogia"><span class="emoji">⚽</span><span>El número 10 en la camiseta de un jugador no significa que sea "más" que el 9. Es solo un nombre.</span></div>`
    },
    {
      titulo: '🥇 Escala ordinal: hay un orden',
      html: `
        <p>Además de clasificar, permite <b>ordenar</b>: decir quién tiene más y quién menos (&gt;, &lt;).</p>
        <div class="ejemplo">Puestos en un concurso de oratoria (1.º, 2.º, 3.º), nivel de rendimiento (malo, regular, bueno).</div>
        <p class="alerta">⚠️ No dice <b>cuánta</b> diferencia hay. Entre el 1.º y el 2.º puede haber mucha distancia y entre el 2.º y el 3.º muy poca.</p>`,
      quiz: { q: 'Clasificar a los estudiantes como "malo, regular, bueno" es una escala…', ops: ['Nominal', 'Ordinal'], ok: 1, exp: 'Las categorías tienen un orden (bueno > regular > malo), pero no sabemos cuánta distancia hay entre ellas.' }
    },
    {
      titulo: '🌡️ Escala de intervalo: distancias iguales, sin cero real',
      html: `
        <p>Tiene orden y además <b>intervalos iguales</b>: la distancia entre 2 y 3 es la misma que entre 51 y 52. Se pueden comparar diferencias (A − B = C − D).</p>
        <p>Pero su cero es <b>arbitrario</b>: no significa "nada".</p>
        <div class="ejemplo">Temperatura en grados <b>Celsius</b>: 0 °C es donde se congela el agua, no la ausencia total de calor.</div>
        <div class="analogia"><span class="emoji">🌡️</span><span>Por eso <b>20 °C no es el doble de calor que 10 °C</b>. En calor real (Kelvin) son 293 K y 283 K, y 293 no es el doble de 283.</span></div>`
    },
    {
      titulo: '⚖️ Escala de razón: cero absoluto',
      html: `
        <p>Es el nivel más alto. Tiene todo lo anterior y además un <b>cero absoluto</b> (0 = ausencia total). Por eso permite hacer <b>proporciones</b> ("el doble", "la mitad").</p>
        <div class="ejemplo">Peso, tiempo de reacción, estatura, cantidad de objetos, temperatura en <b>Kelvin</b>.</div>
        <p>Una persona de 80 kg pesa <b>el doble</b> que una de 40 kg, porque 0 kg significa "no pesa nada".</p>
        <div class="tabla-scroll"><table>
          <tr><th>Escala</th><th>Clasifica</th><th>Ordena</th><th>Distancias iguales</th><th>Cero absoluto</th></tr>
          <tr><td><b>Nominal</b></td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
          <tr><td><b>Ordinal</b></td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
          <tr><td><b>Intervalo</b></td><td>✅</td><td>✅</td><td>✅</td><td>❌</td></tr>
          <tr><td><b>Razón</b></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
        </table></div>
        <div class="analogia"><span class="emoji">🧠</span><span>Para recordar el orden: <b>N-O-I-R</b> ("negro" en francés 🖤): Nominal, Ordinal, Intervalo, Razón. Cada escala gana un poder nuevo.</span></div>
        <p class="nota">💡 Pregunta clave para distinguir intervalo de razón: <b>¿el 0 significa "nada"?</b> Si sí, es razón.</p>`,
      quiz: { q: 'El tiempo que tardas en reaccionar a un sonido (en segundos) se mide en escala…', ops: ['Intervalo', 'Razón'], ok: 1, exp: '0 segundos significa "no tardó nada" (cero absoluto), y 2 s es el doble de 1 s.' }
    },
    {
      titulo: '🔢 Tipos de variable',
      html: `
        <p>Una <b>variable</b> es una característica que se puede representar con números.</p>
        <ul>
          <li><b>Cualitativa:</b> no es numérica (género, religión, estado civil, color de ojos).</li>
          <li><b>Cuantitativa:</b> se expresa con números. Puede ser:
            <ul>
              <li><b>Discreta:</b> solo toma ciertos valores, con "saltos" entre ellos. <b>Se cuenta.</b> (número de hermanos: 0, 1, 2… ¡nadie tiene 2,5 hermanos!)</li>
              <li><b>Continua:</b> puede tomar cualquier valor dentro de un rango. <b>Se mide.</b> (peso, tiempo, estatura)</li>
            </ul>
          </li>
        </ul>
        <div class="analogia"><span class="emoji">🪜</span><span>Discreta es como una <b>escalera</b>: pisas peldaño por peldaño. Continua es como una <b>rampa</b>: puedes pararte en cualquier punto.</span></div>`,
      quiz: { q: 'El número de palabras que una persona recuerda es una variable…', ops: ['Discreta', 'Continua'], ok: 0, exp: 'Las palabras se cuentan (5, 6, 7…); no se puede recordar 6,3 palabras.' }
    }
  ],

  // ===== EJERCICIOS (del texto, pág. 36) =====
  ejercicios: [
    {
      nivel: 'facil',
      enunciado: '¿Qué tipo de variable es el <b>número de mujeres en tu grupo</b>?',
      opciones: TIPO_VAR,
      correcta: 0,
      respuesta: 'Discreta',
      pista: 'Pregúntate: ¿se cuenta o se mide? ¿Puede haber 12,5 mujeres?',
      pasos: [
        P('Las personas se <b>cuentan</b>: 10, 11, 12…', 'Las variables que se cuentan son discretas.'),
        P('No existe un valor intermedio como 12,5', 'Entre un valor y el siguiente hay un "salto".'),
        P('→ Discreta', 'Es cuantitativa y solo toma valores enteros.')
      ]
    },
    {
      nivel: 'facil',
      enunciado: '¿En qué escala se mide el <b>color favorito</b> de los estudiantes de Psicología?',
      opciones: ESCALAS,
      correcta: 0,
      respuesta: 'Nominal',
      pista: '¿Se puede decir que un color es "más" o "mayor" que otro? Si solo sirve para clasificar, es la escala más básica.',
      pasos: [
        P('Rojo, azul, verde… son solo categorías', 'Sirven para clasificar a las personas en grupos.'),
        P('Ningún color es "mayor" que otro', 'No hay orden posible.'),
        P('→ Nominal', 'Solo permite decir igual o distinto, y contar cuántos hay en cada grupo.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: '¿En qué escala se mide la <b>eficiencia en estadística</b> clasificada como mala, regular y buena?',
      opciones: ESCALAS,
      correcta: 1,
      respuesta: 'Ordinal',
      pista: 'Las categorías tienen un orden claro. Pero ¿sabemos si la distancia de "mala" a "regular" es igual a la de "regular" a "buena"?',
      pasos: [
        P('Buena > regular > mala', 'Sí se pueden ordenar, así que es más que nominal.'),
        P('No sabemos cuánto mejor es "buena" que "regular"', 'No hay distancias iguales medibles entre categorías.'),
        P('→ Ordinal', 'Tiene orden, pero no intervalos iguales.')
      ]
    },
    {
      nivel: 'medio',
      enunciado: '¿Qué tipo de variable es el <b>peso del alimento ingerido</b>?',
      opciones: TIPO_VAR,
      correcta: 1,
      respuesta: 'Continua',
      pista: 'El peso, ¿se cuenta o se mide con una balanza? ¿Puede valer 250,37 gramos?',
      pasos: [
        P('El peso se <b>mide</b> con una balanza', 'Las variables que se miden suelen ser continuas.'),
        P('Puede valer 250 g, 250,4 g, 250,37 g…', 'Entre dos valores siempre cabe otro intermedio.'),
        P('→ Continua', 'Toma cualquier valor dentro de un rango.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: '¿En qué escala se mide la <b>fecha de nacimiento</b> de los estudiantes?',
      opciones: ESCALAS,
      correcta: 2,
      respuesta: 'Intervalo',
      pista: 'Las fechas tienen orden y distancias iguales (un año dura lo mismo siempre). Pero ¿el "año 0" significa que el tiempo no existía?',
      pasos: [
        P('Tiene orden: 2004 es antes que 2006', 'Ya es más que ordinal.'),
        P('Distancias iguales: de 2004 a 2005 hay lo mismo que de 2020 a 2021', 'Se pueden comparar diferencias.'),
        P('Pero el año 0 es un punto elegido por convención, no "ausencia de tiempo"', 'No tiene cero absoluto, igual que los grados Celsius.'),
        P('→ Intervalo', 'Por eso no tiene sentido decir que el año 2000 es "el doble" que el año 1000.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: '¿En qué escala se mide <b>el tiempo que tarda una persona en reaccionar a un sonido</b>?',
      opciones: ESCALAS,
      correcta: 3,
      respuesta: 'Razón',
      pista: 'Usa la pregunta clave: ¿el 0 significa "nada"? ¿Tiene sentido decir que alguien tardó el doble que otro?',
      pasos: [
        P('Tiene orden y distancias iguales (1 segundo siempre dura lo mismo)', 'Cumple todo lo de la escala de intervalo.'),
        P('0 segundos = no tardó nada', 'El cero es absoluto: es ausencia real de tiempo.'),
        P('0,6 s es el doble de 0,3 s', 'Como hay cero absoluto, las proporciones tienen sentido.'),
        P('→ Razón', 'Es el nivel más alto de medición.')
      ]
    }
  ],

  // ===== PRÁCTICA EXTRA (propia, no cuenta para el progreso) =====
  practica: [
    {
      nivel: 'facil',
      enunciado: '¿Escala de la <b>marca de celular</b> (Samsung, Xiaomi, iPhone…)?',
      opciones: ESCALAS, correcta: 0, respuesta: 'Nominal',
      pasos: [P('Son solo categorías sin orden', 'Ninguna marca es "mayor" que otra en sí misma.')]
    },
    {
      nivel: 'facil',
      enunciado: '¿Qué tipo de variable es el <b>número de hermanos</b>?',
      opciones: TIPO_VAR, correcta: 0, respuesta: 'Discreta',
      pasos: [P('Se cuenta: 0, 1, 2, 3…', 'Nadie tiene 1,5 hermanos: hay saltos entre los valores.')]
    },
    {
      nivel: 'medio',
      enunciado: '¿Escala del <b>puesto de llegada</b> en una carrera (1.º, 2.º, 3.º)?',
      opciones: ESCALAS, correcta: 1, respuesta: 'Ordinal',
      pasos: [P('Hay orden, pero no distancias iguales', 'El 1.º pudo ganar por 1 segundo y el 2.º por 10 minutos.')]
    },
    {
      nivel: 'medio',
      enunciado: '¿Qué tipo de variable es la <b>estatura</b> en centímetros?',
      opciones: TIPO_VAR, correcta: 1, respuesta: 'Continua',
      pasos: [P('Se mide y puede valer 165,3 cm o 165,34 cm', 'Entre dos valores siempre hay otro posible.')]
    },
    {
      nivel: 'medio',
      enunciado: 'Se encuesta a 200 de los 3000 estudiantes de la carrera para <b>estimar</b> cuántas horas duermen <b>todos</b>. ¿Qué rama de la estadística es?',
      opciones: ['Descriptiva', 'Inferencial'], correcta: 1, respuesta: 'Inferencial',
      pasos: [P('Se usa una muestra (200) para concluir sobre la población (3000)', 'Sacar conclusiones del todo a partir de una parte es inferir.')]
    },
    {
      nivel: 'dificil',
      enunciado: '¿Escala de la <b>temperatura en °C</b> de La Paz?',
      opciones: ESCALAS, correcta: 2, respuesta: 'Intervalo',
      pasos: [
        P('Distancias iguales: de 5 °C a 6 °C hay lo mismo que de 20 °C a 21 °C', 'Tiene intervalos iguales.'),
        P('0 °C no es "ausencia de calor"', 'El cero es arbitrario, así que no es razón.')
      ]
    },
    {
      nivel: 'dificil',
      enunciado: '¿Escala del <b>ingreso mensual</b> en bolivianos?',
      opciones: ESCALAS, correcta: 3, respuesta: 'Razón',
      pasos: [
        P('0 Bs significa "no gana nada"', 'Tiene cero absoluto.'),
        P('4000 Bs es el doble de 2000 Bs', 'Las proporciones tienen sentido, así que es razón.')
      ]
    }
  ]
});