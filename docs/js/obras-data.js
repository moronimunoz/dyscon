/* =========================================================
   DATOS DE LAS OBRAS - un bloque por obra (mismo orden que obras.html)
   Lo que dejes vacío ('' o []) no se muestra en la página.
   - estado: 'inicio' | 'obra' | 'terminado'
   - tipo:   'propia' | 'colaboracion'  (con: empresa con la que se colaboró)
   - fotos:  nombres dentro de img/obras/ (la primera es la principal)
   -  video disponible a usar: //La primera foto es lo que va a ser la portada en Obra.
      video: 'Hg_EGB0ZTkc',                                   // YouTube, como hoy
      video: 'novedades/nodo.mp4',                            // archivo propio, sin portada
      video: { src: 'novedades/nodo.mp4', poster: '2026_03_21_nodo/video.jpg' },   // archivo con portada
      video: ['Hg_EGB0ZTkc', { src: 'novedades/nodo.mp4', poster: '2026_03_21_nodo/video.jpg' }],  // varios
      Dónde van los archivos:
      El video: video/novedades/nodo.mp4. Se escribe sin el video/ inicial.
      La portada: dentro de img/novedades/, por ejemplo img/novedades/2026_03_21_nodo/video.jpg.
      En las obras, dentro de img/obras/.

   - ubicacion: 'Ciudad · Provincia'. Se ve en la tarjeta del listado y en la ficha.
   - miniatura: opcional. Foto de la tarjeta del listado (si no se pone, usa la primera de 'fotos').
   - La tarjeta del listado (obras.html) se arma sola con js/obras-lista.js: ya no hay que
     copiar bloques en obras.html. El punto verde aparece cuando estado es 'obra'.
   - Descripción: En general dentro de los "[]" es como un <p> en html permitiendo
       poner equitiquetas para decorar el texto.
   - Para agregar la fila "Objetivos y datos", sumá a la obra:
       datos: ['Superficie: ...', 'Plazo: ...']
   - Para ubicar mejor el mapa, sumá: mapa: 'Calle 123, Ciudad, Provincia's
       o coordenadas: mapa: '-32.9468, -60.6393',
   - portada: 'casa_m/panoramica.jpg', (le da fondo a la portada oscura en
       la pagina de una obra)
   - Resumen: Sirve para que, cuando alguien ve tu resultado en Google, 
      el texto de abajo sea claro y lo invite a entrar, en vez de uno genérico 
      o uno que Google arme solo. Es un cambio de presentación, no de posicionamiento.
   ========================================================= */

/* =========================================================
    DATOS DE LAS OBRAS POR CONFIRMAR
  {
  id: 'edificio-ricchieri', nombre: 'Edificio Ricchieri', categoria: 'Comunidad',
  tipo: 'propia', estado: 'terminado', cliente: '',
  ubicacion: 'Rosario · Santa Fe',
  descripcion: [],
  carpeta:'ricchieri',
  fotos: ['00.jpeg','01.jpeg','02.jpeg','03.jpeg']
  },
  {
  id: 'hospital-de-ninos-zona-norte', nombre: 'Hospital de Niños Zona Norte “Dr. Roberto M. Carra”', categoria: 'Salud',
  tipo: 'propia', estado: 'terminado', cliente: '',
  ubicacion: 'Rosario · Santa Fe',
  mapa: 'Rosario, Santa Fe',
  descripcion: ['<strong>Infraestructura sanitaria | Rosario, Santa Fe</strong><br><br>La intervención en el Hospital de Niños Zona Norte contempló la refuncionalización y adecuación de espacios destinados a los servicios de tomografía, odontología y cardiología, con el objetivo de optimizar las instalaciones y mejorar las condiciones de atención del establecimiento.<br><br>El proyecto incluyó trabajos complementarios en áreas técnicas y de servicio, adecuaciones de instalaciones eléctricas, incorporación de un generador de energía, mejoras en sectores del subsuelo y acondicionamiento de accesos y circulaciones.<br><br>La obra formó parte de un programa de modernización de la infraestructura sanitaria pública de la provincia de Santa Fe, orientado a responder a las necesidades operativas del hospital y fortalecer sus servicios especializados de atención pediátrica.'],
  portada:'',
  carpeta:'',
  fotos: ['00.jpeg','01.jpeg','02.jpeg']
  },
   ========================================================= */
   
const OBRAS = [
  {
    id: 'casa-m', nombre: 'Casa M', categoria: 'Comunidad',
    tipo: 'propia', estado: 'inicio', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    miniatura: '01.jpg',
    mapa: 'Arturo Illia 1690, S2000 Rosario, Santa Fe',
    descripcion: [],
    carpeta:'casa_m',
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg','04.jpg','05.jpg']
  },
  {
    id: 'escuela-ricardone', nombre: 'Escuela Secundaria Ricardone', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: 'Ministerio de economía, Unidad Ejecutora Provincial (UE).',
    ubicacion: 'Ricardone · Santa Fe',
    descripcion: [],
    fotos: ['ricardone.jpg']
  },
  {
    id: 'restauracion-espana-543', nombre: 'Restauración de Dto. España 543', categoria: 'Viviendas',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'España 543, Rosario, Santa Fe',
    descripcion: [],
    carpeta:'espana',
    fotos: ['00.jpg','01.jpeg','02.jpeg','03.jpeg',]
  },
  {
    id: 'pami-ituzaingo', nombre: 'Hospital del Bicentenario PAMI Ituzaingó', categoria: 'Salud',
    tipo: 'propia', estado: 'terminado', cliente: 'PAMI.',
    ubicacion: 'Ituzaingó · Buenos Aires',
    mapa: 'Cnel. Brandsen 2898, B1714LAH Ituzaingó, Provincia de Buenos Aires',
    descripcion: [],
    carpeta:'pami',
    portada: 'pami/01.jpeg',
    fotos: ['00.jpg','01.jpeg','02.jpg','03.jpeg','04.jpeg']
  },
  {
    id: 'parque-industrial', nombre: 'Parque Industrial', categoria: 'Espacio público',
    tipo: 'colaboracion', con: '<strong>Del Sol</strong> - Empresa Constructora',estado: 'obra', cliente: '',
    ubicacion: 'Villa Gobernador Gálvez · Santa Fe',
    miniatura: '01.jpg',
    mapa: 'X98V+JHG Villa Gdor. Gálvez, Santa Fe',
    descripcion: ['Con foco en la industria alimenticia y una apuesta fuerte a la infraestructura, un nuevo parque industrial busca abrirse camino en el cordón sur del Gran Rosario. Se trata de <strong>Nodo</strong>, un desarrollo privado impulsado por <strong>Grupo Nasini</strong> Inversiones junto a <strong>Mariano Schor</strong>, de la constructora <strong>Dyscon</strong>, que ya puso en marcha las obras y apunta a captar empresas que hoy operan “atrapadas” dentro del tejido urbano.<br>Según explicó <strong>Nasini</strong>, el foco en las alimenticias surgió tras detectar una demanda creciente de empresas que necesitan expandirse pero enfrentan limitaciones dentro de las ciudades.<br>“Hay muchas industrias alimenticias que quedaron atrapadas dentro del eje urbano, con problemas logísticos, de habilitaciones y de crecimiento”, señaló. “Muchas veces no se mudan porque los parques industriales no tienen los servicios específicos que necesitan”.<br>Por eso, Nodo incorporó infraestructura especialmente diseñada para ese segmento: planta potabilizadora de agua, red cloacal, acceso a gas y capacidad eléctrica industrial.'],
    carpeta:'parque_industrial',
    video: { src: 'obras/nodo.mp4', poster: 'parque_industrial/poster.jpg' },   // archivo con portada
    fotos: ['00.jpeg','01.jpg','02.jpg','03.jpg']
  },
  {
    id: 'tecnoteca', nombre: 'Tecnoteca', categoria: 'Comunidad',
    tipo: 'colaboracion', con: '<strong>Del Sol</strong> - Empresa Constructora', estado: 'terminado', cliente: 'Municipalidad de Rosario.',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'Estévez Boero 740, S2000 Rosario, Santa Fe',
    descripcion: ['<strong>Tecnoteca, Escuela de Tecnología y Oficios Digitales</strong><br>El propósito de Tecnoteca es funcionar como una Escuela de Tecnología y Oficios Digitales, donde se impulsen proyectos de aprendizaje tecnológicos vinculados a la ciencia, la comunicación y el arte. Está pensada para jóvenes entre 18 a 30 años, priorizando sobre todo a aquellas/os que no puedan acceder a oportunidades educativas similares.<br>Emplazada en el Galpón 13, cuenta con 4.000 mts2 distribuidos en dos plantas que disponen de los recursos tecnológicos, profesionales y un ambiente confortable para alojar a los y las participantes. Los espacios, equipados en función de las especiﬁcidades técnicas, son: Cápsula Audiovisual; Coworking; FabLab; Laboratorios; Salas de capacitación. También está proyectado un lactario, el comedor y un espacio de cuidados para niños y niñas.'],
    portada:'tecnoteca/03.jpg',
    carpeta:'tecnoteca',
    video: { src: 'obras/tecno.mp4', poster: 'tecnoteca/poster.jpg' },
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg',]
  },
  {
    id: 'rdz-1635', nombre: 'Proyecto: RDZ 1635', categoria: 'Viviendas',
    tipo: 'propia', estado: 'obra', cliente: 'Fideicomiso.',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'Rodríguez 1635, Rosario, Santa Fe',
    portada:'rdz/00.jpg',
    carpeta:'rdz',
    descripcion: [],
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg']
  },
  {
    id: 'viviendas-tablada', nombre: '64 Viviendas en Tablada', categoria: 'Viviendas',
    destacada: 2,
    tipo: 'propia', estado: 'obra', cliente: 'DPVyU.',
    ubicacion: 'Rosario · Santa Fe',
    mapa: '-32.9817997363948, -60.62924684936593',
    descripcion: [],
    fotos: ['tablada.jpg']
  },
  {
    id: 'unidad-penitenciaria-15', nombre: 'Unidad Penitenciaria N.º 15', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Piñero · Santa Fe',
    mapa: 'W633+3G Piñero, Santa Fe',
    descripcion: ['La Unidad Penitenciaria N.º 15 forma parte del programa provincial de ampliación de la infraestructura penitenciaria, con un proyecto que contempla seis módulos de alojamiento y edificios complementarios destinados al funcionamiento del establecimiento.<br><br>El desarrollo prevé espacios de ingreso, pabellones, áreas educativas, talleres, cocinas y sectores de apoyo, junto con infraestructura de servicios y circulación interna.<br><br>La magnitud del proyecto requiere la coordinación de distintas especialidades constructivas y de instalaciones, en el marco de una intervención pública orientada a ampliar la capacidad del sistema penitenciario santafesino.'],
    portada:'up15/02.jpeg',
    carpeta:'up15',
    video: 'obras/up.mp4', 
    fotos: ['02.jpeg','00.jpg','01.webp','03.jpeg']
  },
  {
    id: 'unidad-penitenciaria-8', nombre: 'Unidad Penitenciaria N.º 8', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Piñero · Santa Fe',
    mapa: 'W633+3G Piñero, Santa Fe',
    descripcion: ['<strong>Infraestructura penitenciaria de alta seguridad</strong><br><br>En el marco del programa de ampliación de la infraestructura penitenciaria de la provincia de Santa Fe, DYSCON S.A. participa en la construcción del Módulo D de la Unidad Penitenciaria N.º 8, integrada al complejo penitenciario de Piñero.<br><br>El proyecto forma parte de un establecimiento de alta seguridad que incorpora sistemas de alojamiento individual, estructuras de hormigón, circulaciones controladas y espacios complementarios destinados al funcionamiento penitenciario.<br><br>La intervención requiere una ejecución coordinada de los componentes arquitectónicos y constructivos, con especial atención a los requerimientos estructurales, funcionales y de seguridad propios de este tipo de infraestructura pública.<br><br>La obra se integra a un programa provincial orientado a ampliar la capacidad del sistema penitenciario y modernizar sus instalaciones.'],
    portada:'up8/00.jpeg',
    carpeta:'up8',
    video: 'obras/up.mp4', 
    fotos: ['00.jpeg','01.jpeg','02.webp','03.jpg','04.jpeg','05.jpg','06.jpeg']
  },
  {
    id: 'plaza-san-cristobal', nombre: 'Plaza San Cristóbal', categoria: 'Espacio público',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'CABA · Buenos Aires',
    mapa: 'Constitución 2498, C1254AAN C1254AAN, Cdad. Autónoma de Buenos Aires',
    descripcion: [],
    fotos: ['plaza-san-cristobal.jpg']
  },
  {
    id: 'parque-regional-sur', nombre: 'Parque Regional Sur', categoria: 'Espacio público',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'Láinez 1-48, S2000 Rosario, Santa Fe',
    descripcion: [],
    fotos: ['parque_regional_sur.jpg']
  },
  {
    id: '69-viviendas', nombre: 'Bloque de 69 viviendas — República de la Sexta', categoria: 'Viviendas',
    tipo: 'propia', estado: 'terminado', cliente: 'el Gobierno de Santa Fe, la Municipalidad de Rosario y la Universidad Nacional de Rosario (UNR)',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'Riobamba 242, S2000 Rosario, Santa Fe',
    descripcion: ['En el marco del proyecto de transformación urbana de la Ciudad Universitaria de Rosario, se desarrolló el conjunto habitacional de <strong>69 viviendas</strong> en el barrio República de la Sexta, en el sector de las calles Esmeralda, Riobamba y La Paz.<br><br>La intervención forma parte de un programa integral impulsado por el Gobierno de Santa Fe, la Municipalidad de Rosario y la Universidad Nacional de Rosario, orientado a mejorar las condiciones habitacionales y promover la integración urbana del sector.<br><br>El proyecto contempló viviendas de distintas tipologías, cocheras e infraestructura de servicios, incluyendo redes sanitarias, instalaciones eléctricas y obras de urbanización complementarias.<br><br>La obra constituye un aporte al desarrollo de vivienda pública y a la transformación de un sector estratégico de Rosario, fortaleciendo la integración entre el tejido residencial, los espacios públicos y el entorno universitario.'],
    portada:'69-viviendas/02.webp',
    carpeta:'69-viviendas',
    fotos: ['02.webp','01.jpg','00.jpg']
  },
  {
    id: 'monumento-bandera', nombre: 'Monumento Nacional a la Bandera', categoria: 'Patrimonio',
    destacada: 1,
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'Sta Fe 581, S2000 Rosario, Santa Fe',
    descripcion: [],
    portada:'monumento/01.jpg',
    carpeta:'monumento',
    fotos: ['00.jpg','01.jpg','02.jpeg','03.jpg','04.jpg','05.jpg','06.jpg']
  },
  {
    id: 'samco-pavon-arriba', nombre: 'Nuevo SAMco de Pavón Arriba', categoria: 'Salud',
    destacada: 3,
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Pavón Arriba · Santa Fe',
    mapa: '-33.310985234429445, -60.827243803116566',
    descripcion: ['Ubicado en la intersección de las calles Buenos Aires y Valerio Carreras, el nuevo SAMCo de Pavón Arriba constituye una intervención destinada a fortalecer la infraestructura sanitaria de la localidad y mejorar las condiciones de atención para la comunidad.<br><br>Impulsado por el <strong>Gobierno de la Provincia de Santa Fe</strong>, el proyecto contempló la construcción de nuevos espacios asistenciales y la refuncionalización de sectores del edificio existente, integrando soluciones arquitectónicas y técnicas orientadas a optimizar el funcionamiento del establecimiento.<br><br>La propuesta incluyó consultorios, sala de observación, sector de atención de urgencias, espacios de enfermería y áreas de internación con capacidad para cuatro camas. También contempló accesos diferenciados para el público y las ambulancias, circulación accesible e instalaciones específicas para el funcionamiento de un centro sanitario.<br><br>La intervención incorporó, además, sistemas de climatización, gases medicinales, iluminación LED y soluciones de aprovechamiento de energía solar, de acuerdo con las especificaciones del proyecto.<br><br>Con una superficie de intervención prevista de 723 m², la obra representa un aporte a la modernización de los servicios públicos de salud y al desarrollo de la infraestructura de la región.<br><br><strong>DYSCON S.A. — Construcción de infraestructura para las necesidades de la comunidad.</strong>'],
    portada:'samco_pavon_arriba/02.jpg',
    video: { src: 'obras/samco-pavon.mp4', poster: 'samco_pavon_arriba/poster.jpg' },
    carpeta:'samco_pavon_arriba',
    fotos: ['02.jpg','00.jpg','01.jpg','03.jpg']
  },
  {
    id: 'samco-funes', nombre: 'Hospital SAMCo Eva Perón', categoria: 'Salud',
    tipo: 'propia', estado: 'terminado', cliente: 'Ministerio de Infraestructura, Servicios Públicos y Hábitat - DIPAI.',
    ubicacion: 'Funes · Santa Fe',
    mapa: 'Monteagudo 1582-1600, S2132 Funes, Santa Fe',
    descripcion: [],
    portada:'samco/00.jpg',
    carpeta:'samco',
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg']
  },
  {
    id: 'eetp-485', nombre: 'Ampliación Secundaria E.E.T.P. N° 485', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: 'Ministerio de Educación.',
    ubicacion: 'Villa Gobernador Gálvez · Santa Fe',
    mapa: 'X9JQ+CP2 Villa Gdor. Gálvez, Santa Fe',
    descripcion: [],
    fotos: ['eetp485.jpg']
  },
  {
    id: 'escuela-608', nombre: 'Escuela Secundaria N.° 608 - La Esperanza', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Villa Gobernador Gálvez · Santa Fe',
    mapa: 'Pje. Uboldi 630, S2124 Villa Gdor. Gálvez, Santa Fe',
    descripcion: [],
    carpeta:'jardin_608',
    fotos: ['01.jpg','00.jpg']
  },
  {
    id: 'plaza-san-martin', nombre: 'Plaza San Martín', categoria: 'Espacio público',
    destacada: 4,
    tipo: 'colaboracion', con: '<strong>Del Sol</strong> - Empresa Constructora', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    mapa: '3942+G4 Rosario, Santa Fe',
    descripcion: [],
    carpeta:'plaza_san_martin',
    portada:'plaza_san_martin/00.jpg',
    fotos: ['04.webp','01.webp','02.webp','03.webp']
  },
  {
    id: 'barrio-mortelari-1', nombre: 'Mejoramiento integral del barrio Mortelari I', categoria: 'Comunidad',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Villa Gobernador Gálvez · Santa Fe',
    descripcion: [],
    fotos: ['barrio_mortelari_1.jpg']
  }
];