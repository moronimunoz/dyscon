/* =========================================================
   DATOS DE LAS NOVEDADES - un bloque por noticia
   Para agregar una: copiá un bloque, cambiá el id (sin espacios ni tildes) y completá.
   La lista de novedades.html se ordena sola por fecha (la más nueva primero).
   - categoria: 'Obras' | 'Institucional' | 'Eventos' (tiene que coincidir con un botón de filtro)
   - id: lo que se vera en la URL. Ej. <a href="novedad.html?id=${n.id}"> (usar munisculas y _, espacios no)
   - fecha:     'AAAA-MM-DD'
   - portada:   foto principal, dentro de img/novedades/ (obligatoria: se ve en la tarjeta)
   - resumen:   opcional, una línea para buscadores
   - texto:     lista de párrafos
   - fotos:     opcional, fotos extra dentro de img/novedades/subcarpeta(si es necesario)
   - video(youtube): De una URL Ej. https://www.youtube.com/watch?v=c6oSxMGdOtA&t=1s
       solo se usa lo que contiene 'v=[CODIGO_DE_16_CHART]&t=1s' en este caso seria 'c6oSxMGdOtA'.
   ========================================================= */
const NOVEDADES = [
  {
    id: 'inauguracion_de_tecnoteca',
    titulo: 'Inauguracion de Tecnoteca',
    categoria: 'Obras',
    fecha: '2025-09-25',
    portada: '2026_09_20_tecnoteca/03.jpg',
    resumen: '',
    texto: ['El intendente Pablo Javkin encabezó este miércoles 12 de noviembre la inauguración oficial de Tecnoteca Rosario, una nueva escuela de tecnología y oficios digitales que funcionará en el Galpón 13 (Estévez Boero 700), sobre la Rambla del Tricentenario. Este espacio educativo integra una de las obras del legado por los 300 años de la ciudad y se proyecta como polo de referencia para el crecimiento tecnológico y comunitario de las juventudes rosarinas.<br>Impulsada por la Municipalidad de Rosario, la Tecnoteca busca acercar a jóvenes al mundo de la tecnología, el trabajo y la creatividad digital. Su creación apunta a fortalecer el talento local y generar nuevas oportunidades para el desarrollo de conocimientos y habilidades tecnológicas. De esta manera, Rosario se consolida como una ciudad líder en innovación y creatividad, conectando talento local con oportunidades reales de formación y crecimiento.'
    ],
    video: 'c6oSxMGdOtA',
    fotos: ['2026_09_20_tecnoteca/01.jpg','2026_09_20_tecnoteca/02.jpg','2026_09_20_tecnoteca/00.jpg']
  },
  {
    id: 'nace_nodo',
    titulo: 'Nace Nodo, el parque industrial que apunta a captar empresas alimenticias',
    categoria: 'Eventos',
    fecha: '2026-03-21',
    portada: '2026_03_21_nodo/02.jpg',
    resumen: 'Nace Nodo, el parque industrial que apunta a captar empresas alimenticias',
    texto: ['Con foco en la industria alimenticia y una apuesta fuerte a la infraestructura, un nuevo parque industrial busca abrirse camino en el cordón sur del Gran Rosario. Se trata de <strong>Nodo</strong>, un desarrollo privado impulsado por <strong>Grupo Nasini</strong> Inversiones junto a <strong>Mariano Schor</strong>, de la constructora <strong>Dyscon</strong>, que ya puso en marcha las obras y apunta a captar empresas que hoy operan “atrapadas” dentro del tejido urbano.<br>Según explicó <strong>Nasini</strong>, el foco en las alimenticias surgió tras detectar una demanda creciente de empresas que necesitan expandirse pero enfrentan limitaciones dentro de las ciudades.<br>“Hay muchas industrias alimenticias que quedaron atrapadas dentro del eje urbano, con problemas logísticos, de habilitaciones y de crecimiento”, señaló. “Muchas veces no se mudan porque los parques industriales no tienen los servicios específicos que necesitan”.<br>Por eso, Nodo incorporó infraestructura especialmente diseñada para ese segmento: planta potabilizadora de agua, red cloacal, acceso a gas y capacidad eléctrica industrial.<br><br>Enlace de Instagram (Presione aqui): <a href="https://www.instagram.com/econodoproductivo/" target="_blank" rel="noopener"><strong>Eco Nodo Productivo<strong></a>'],
    fotos: ['2026_03_21_nodo/00.jpeg','2026_03_21_nodo/01.jpg','2026_03_21_nodo/02.jpg','2026_03_21_nodo/03.jpg']
  },
  {
    id: 'reinauguracion_monumento',
    titulo: 'Reinauguracion del Monumento Nacional a la Bandera',
    categoria: 'Obras',
    fecha: '2026-07-17',
    portada: '2026_07_17_monumento/02.jpeg',
    resumen: '',
    texto: ['El <strong>Monumento Nacional a la Bandera en Rosario</strong> fue reinaugurado oficialmente el miércoles 17 de junio de 2026, tras una restauración integral que concluyó más de una década de obras inconclusas.  La iniciativa, asumida por <strong>el gobierno de la provincia de Santa Fe</strong> bajo la conducción de Maximiliano Pullaro, permitió recuperar sectores históricos como la Fuente de las Proas, la Sala de las Banderas y el mirador de la torre principal, que ahora cuenta con un nuevo ascensor.<br>La celebración culminó el 20 de junio de 2026 con el acto central por el Día de la Bandera, que contó con la presencia del presidente <strong>Javier Milei</strong> y el gobernador <strong>Maximiliano Pullaro</strong>, seguido de una gran fiesta popular con el cierre musical de <strong>Abel Pintos</strong>.  Durante las jornadas de reinauguración, miles de estudiantes de todo el país participaron de la tradicional Promesa de Lealtad a la Bandera en el Patio Cívico. <br><br><strong>Aspectos clave de la restauración:</strong><br><strong>· Inversión y gestión:</strong> La provincia asumió una deuda millonaria y financió los trabajos pendientes que los gobiernos nacionales anteriores no completaron. <br><strong>· Recuperación patrimonial:</strong> Se restauraron esculturas, elementos de bronce, la llama votiva y se renovaron los sistemas eléctricos e iluminación con tecnología LED.<br><strong>· Accesibilidad:</strong> Se incorporaron mejoras en accesibilidad, incluyendo rampas y la habilitación definitiva del ascensor para el mirador a 70 metros de altura.'],
    video: 'Hg_EGB0ZTkc',
    fotos: ['2026_07_17_monumento/00.jpg','2026_07_17_monumento/01.jpg','2026_07_17_monumento/02.jpeg']
  }
];
