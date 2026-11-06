// ===== LAS 3 PARTES DEL CURSO =====
// Cada parte tiene su color (tema), su símbolo y la lista de temas que tendrá.
window.PARTES = [
  {
    id: 'p1',
    numero: 1,
    tema: 'oro',
    color: '#e6c050',
    simbolo: '±',
    titulo: 'Aritmética y álgebra',
    capitulos: 'Capítulos 1 al 4',
    intro: 'Es la <b>base de todo el curso</b>. Aquí aprendes a manejar signos, el orden de las operaciones, fracciones, potencias y ecuaciones. Si dominas esto, lo demás será mucho más fácil.',
    plan: ['Símbolos y operaciones', 'Orden de operaciones', 'Fracciones y exponentes', 'Ecuaciones e interpolación']
  },
  {
    id: 'p2',
    numero: 2,
    tema: 'lila',
    color: '#e879f9',
    simbolo: 'Σ',
    titulo: 'Sumatoria',
    capitulos: 'Capítulo 5',
    intro: 'La <b>sumatoria</b> es una forma corta de escribir sumas largas. Es el puente entre el álgebra y la estadística: casi todas las fórmulas de estadística usan el símbolo Σ.',
    plan: ['Sumatoria simple', 'Doble sumatoria']
  },
  {
    id: 'p3',
    numero: 3,
    tema: 'rojo',
    color: '#f87171',
    simbolo: '∩',
    titulo: 'Estadística y probabilidad',
    capitulos: 'Capítulos 6 al 8',
    intro: 'Aquí usas todo lo anterior para <b>entender datos y medir la suerte</b>: cómo se clasifica la información, qué tan probable es que algo pase y de cuántas formas se pueden ordenar las cosas.',
    plan: ['Estadística y escalas de medición', 'Probabilidad y conjuntos', 'Reglas de contar']
  }
];