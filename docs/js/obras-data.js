/* =========================================================
   DATOS DE LAS OBRAS - un bloque por obra (mismo orden que obras.html)
   Lo que dejes vacío ('' o []) no se muestra en la página.
   - estado: 'inicio' | 'obra' | 'terminado'
   - tipo:   'propia' | 'colaboracion'  (con: empresa con la que se colaboró)
   - fotos:  nombres dentro de img/obras/ (la primera es la principal)
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
   ========================================================= */
   
const OBRAS = [
  {
    id: 'casa-m', nombre: 'Casa M', categoria: 'Comunidad',
    tipo: 'propia', estado: 'inicio', cliente: '',
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
    id: 'restauracion-espana-543', nombre: 'Restauración de Dto. España 543', categoria: 'Comunidad',
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
    mapa: 'Cnel. Brandsen 2898, B1714LAH Ituzaingó, Provincia de Buenos Aires',
    descripcion: [],
    carpeta:'pami',
    portada: 'pami/01.jpeg',
    fotos: ['00.jpg','01.jpeg','02.jpg','03.jpeg','04.jpeg']
  },
  {
    id: 'parque-industrial', nombre: 'Parque Industrial', categoria: 'Espacio público',
    tipo: 'colaboracion', con: '<strong>Del Sol</strong> - Empresa Constructora',estado: 'obra', cliente: '',
    mapa: 'X98V+JHG Villa Gdor. Gálvez, Santa Fe',
    descripcion: ['<strong>Nodo</strong> es un parque industrial privado impulsado por <strong>Grupo Nasini Inversiones</strong> y <strong>Mariano Schor</strong>, de <strong>Dyscon - Empresa Constructora</strong>, en el sur del Gran Rosario. Con las obras en marcha, busca atraer especialmente a empresas alimenticias que necesitan expandirse fuera del tejido urbano. Para ello, ofrece infraestructura especializada, como agua potable, red cloacal, gas y capacidad eléctrica industrial.'],
    carpeta:'parque_industrial',
    fotos: ['00.jpeg','01.jpg','02.jpg','03.jpg']
  },
  {
    id: 'tecnoteca', nombre: 'Tecnoteca', categoria: 'Comunidad',
    tipo: 'colaboracion', con: '<strong>Del Sol</strong> - Empresa Constructora', estado: 'terminado', cliente: 'Municipalidad de Rosario.',
    mapa: 'Estévez Boero 740, S2000 Rosario, Santa Fe',
    descripcion: ['<strong>Tecnoteca, Escuela de Tecnología y Oficios Digitales</strong><br>El propósito de Tecnoteca es funcionar como una Escuela de Tecnología y Oficios Digitales, donde se impulsen proyectos de aprendizaje tecnológicos vinculados a la ciencia, la comunicación y el arte. Está pensada para jóvenes entre 18 a 30 años, priorizando sobre todo a aquellas/os que no puedan acceder a oportunidades educativas similares.<br>Emplazada en el Galpón 13, cuenta con 4.000 mts2 distribuidos en dos plantas que disponen de los recursos tecnológicos, profesionales y un ambiente confortable para alojar a los y las participantes. Los espacios, equipados en función de las especiﬁcidades técnicas, son: Cápsula Audiovisual; Coworking; FabLab; Laboratorios; Salas de capacitación. También está proyectado un lactario, el comedor y un espacio de cuidados para niños y niñas.'],
    portada:'tecnoteca/03.jpg',
    carpeta:'tecnoteca',
    video:'c6oSxMGdOtA',
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg',]
  },
  {
    id: 'rdz-1635', nombre: 'RDZ 1635 – Edificio residencial', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: 'Fideicomiso.',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'Rodríguez 1635, Rosario, Santa Fe',
    portada:'rdz/00.jpg',
    carpeta:'rdz',
    descripcion: [' El <strong>RDZ 1635</strong> es un desarrollo inmobiliario residencial impulsado por <strong>DyScon S.A.</strong>, empresa constructora de Rosario, Santa Fe. Ubicado en calle Rodríguez al 1600, el proyecto se caracteriza por su arquitectura contemporánea y una propuesta de viviendas que combina comodidad, funcionalidad y espacios comunes.<br><br>El edificio cuenta con aproximadamente <strong>2.000 m² cubiertos</strong>, distribuidos en planta baja, subsuelo y seis plantas destinadas a viviendas. Su propuesta incluye <strong>semipisos de dos y tres dormitorios</strong>, con superficies aproximadas de 91 m² y 114 m², respectivamente, además de cocheras con sistema de montacoches.<br><br>Entre sus espacios comunes se destaca un <strong>salón de usos múltiples (SUM) con parrillero y área de expansión</strong>, pensado para reuniones y actividades sociales de los residentes.<br><br> Su ubicación ofrece cercanía a importantes sectores urbanos de Rosario, como <strong>avenida Pellegrini, bulevar Oroño y el Parque Independencia</strong>, lo que favorece el acceso a servicios, comercios, gastronomía y espacios recreativos.<br><br> El RDZ 1635 representa una propuesta residencial orientada a integrar <strong>diseño, funcionalidad y ubicación estratégica</strong> dentro del entorno urbano rosarino.<br><br><strong>Fuente:</strong> La Capital — DyScon S.A. presenta su nuevo edificio RDZ 1635<br><small>12 de octubre de 2025.</small>'],
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg']
  },
  {
    id: 'viviendas-tablada', nombre: '64 Viviendas en Tablada', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: 'DPVyU.',
    mapa: '-32.9817997363948, -60.62924684936593',
    descripcion: [],
    fotos: ['tablada.jpg']
  },
  {
    id: 'unidad-penitenciaria', nombre: 'Unidad Penitenciaria N° 8 y 15', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    mapa: 'W633+3G Piñero, Santa Fe',
    descripcion: [],
    fotos: ['pineiro.jpg','up8.jpeg']
  },
  {
    id: 'plaza-san-cristobal', nombre: 'Plaza San Cristóbal', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    mapa: 'Constitución 2498, C1254AAN C1254AAN, Cdad. Autónoma de Buenos Aires',
    descripcion: [],
    fotos: ['plaza-san-cristobal.jpg']
  },
  {
    id: 'parque-regional-sur', nombre: 'Parque Regional Sur', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    mapa: 'Láinez 1-48, S2000 Rosario, Santa Fe',
    descripcion: [],
    fotos: ['parque_regional_sur.jpg']
  },
  {
    id: 'monumento-bandera', nombre: 'Monumento Nacional a la Bandera', categoria: 'Patrimonio',
    tipo: 'propia', estado: 'terminado', cliente: '',
    mapa: 'Sta Fe 581, S2000 Rosario, Santa Fe',
    descripcion: [],
    portada:'monumento/01.jpg',
    carpeta:'monumento',
    fotos: ['00.jpg','01.jpg','02.jpeg','03.jpg','04.jpg','05.jpg','06.jpg']
  },
  {
    id: 'hospital-samco', nombre: 'Hospital SAMCo Eva Perón', categoria: 'Salud',
    tipo: 'propia', estado: 'terminado', cliente: 'Ministerio de Infraestructura, Servicios Públicos y Hábitat - DIPAI.',
    mapa: 'Monteagudo 1582-1600, S2132 Funes, Santa Fe',
    descripcion: [],
    portada:'samco/00.jpg',
    carpeta:'samco',
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg']
  },
  {
    id: 'eetp-485', nombre: 'Ampliación Secundaria E.E.T.P. N° 485', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: 'Ministerio de Educación.',
    mapa: 'X9JQ+CP2 Villa Gdor. Gálvez, Santa Fe',
    descripcion: [],
    fotos: ['eetp485.jpg']
  },
  {
    id: 'escuela-608', nombre: 'Escuela Secundaria N.° 608 - La Esperanza', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: '',
    mapa: 'Pje. Uboldi 630, S2124 Villa Gdor. Gálvez, Santa Fe',
    descripcion: [],
    carpeta:'jardin_608',
    fotos: ['01.jpg','00.jpg']
  },
  {
    id: 'plaza-san-martin', nombre: 'Plaza San Martín', categoria: 'Espacio público',
    tipo: 'colaboracion', con: '<strong>Del Sol/strong> - Empresa Constructora', estado: 'terminado', cliente: '',
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