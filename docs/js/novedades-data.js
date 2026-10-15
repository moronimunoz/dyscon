/* =========================================================
   DATOS DE LAS NOVEDADES - un bloque por noticia
   Para agregar una: copiá un bloque, cambiá el id (sin espacios ni tildes) y completá.
   La lista de novedades.html se ordena sola por fecha (la más nueva primero).
   - categoria: 'Obras' | 'Institucional' | 'Eventos' (tiene que coincidir con un botón de filtro)
   - fecha:     'AAAA-MM-DD'
   - portada:   foto principal, dentro de img/novedades/ (obligatoria: se ve en la tarjeta)
   - resumen:   opcional, una línea para buscadores
   - texto:     lista de párrafos
   - fotos:     opcional, fotos extra dentro de img/novedades/subcarpeta(si es necesario)
   ========================================================= */
const NOVEDADES = [
  {
    id: 'avance-obra-ejemplo',
    titulo: 'Inauguracion de Tecnoteca',
    categoria: 'Obras',
    fecha: '2025-09-25',
    portada: 'novedad1/03.jpg',
    resumen: '',
    texto: ['El intendente Pablo Javkin encabezó este miércoles 12 de noviembre la inauguración oficial de Tecnoteca Rosario, una nueva escuela de tecnología y oficios digitales que funcionará en el Galpón 13 (Estévez Boero 700), sobre la Rambla del Tricentenario. Este espacio educativo integra una de las obras del legado por los 300 años de la ciudad y se proyecta como polo de referencia para el crecimiento tecnológico y comunitario de las juventudes rosarinas.<br>Impulsada por la Municipalidad de Rosario, la Tecnoteca busca acercar a jóvenes al mundo de la tecnología, el trabajo y la creatividad digital. Su creación apunta a fortalecer el talento local y generar nuevas oportunidades para el desarrollo de conocimientos y habilidades tecnológicas. De esta manera, Rosario se consolida como una ciudad líder en innovación y creatividad, conectando talento local con oportunidades reales de formación y crecimiento.'
    ],
    video: 'c6oSxMGdOtA',
    fotos: ['novedad1/01.jpg','novedad1/02.jpg','novedad1/00.jpg']
  },
  {
    id: 'novedad-institucional-ejemplo',
    titulo: 'Novedad institucional: título (EJEMPLO)',
    categoria: 'Institucional',
    fecha: '2026-09-20',
    portada: 'novedad-2.jpg',
    texto: ['Texto de la noticia (EJEMPLO: reemplazar).']
  },
  {
    id: 'evento-ejemplo',
    titulo: 'Evento: título de la novedad (EJEMPLO)',
    categoria: 'Eventos',
    fecha: '2026-08-14',
    portada: 'novedad-3.jpg',
    texto: ['Texto de la noticia (EJEMPLO: reemplazar).']
  }
];
