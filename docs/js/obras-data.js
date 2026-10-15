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
   ========================================================= */
const OBRAS = [
  {
    id: 'casa-m', nombre: 'CUBO_PUERTO ESPAÑA', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    mapa: 'Arturo Illia 1690, S2000 Rosario, Santa Fe',
    descripcion: [],
    carpeta:'casa_m',
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg','04.jpg','05.jpg']
  },
  {
    id: 'edificio-ricchieri', nombre: 'Edificio Ricchieri', categoria: 'Comunidad',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    descripcion: [],
    carpeta:'ricchieri',
    fotos: ['00.jpeg','01.jpeg','02.jpeg','03.jpeg']
  },
  {
    id: 'escuela-ricardone', nombre: 'Escuela Secundaria Ricardone', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Ricardone · Santa Fe',
    descripcion: [],
    fotos: ['ricardone.jpg']
  },
  {
    id: 'restauracion-espana-543', nombre: 'Restauración de Dto. España 543', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'España 543, Rosario, Santa Fe',
    descripcion: [],
    fotos: ['espana.jpg']
  },
  {
    id: 'pami-ituzaingo', nombre: 'Hospital del Bicentenario PAMI Ituzaingó', categoria: 'Salud',
    tipo: 'propia', estado: 'terminado', cliente: '',
    mapa: 'Cnel. Brandsen 2898, B1714LAH Ituzaingó, Provincia de Buenos Aires',
    descripcion: [],
    carpeta:'pami',
    portada: 'pami/01.jpeg',
    fotos: ['00.jpg','01.jpeg','02.jpg','03.jpeg','04.jpeg']
  },
  {
    id: 'parque-industrial', nombre: 'Parque Industrial', categoria: 'Espacio público',
    tipo: 'propia', estado: 'obra', cliente: '',
    mapa: 'X98V+JHG Villa Gdor. Galvez, Santa Fe',
    descripcion: ['Con foco en la industria alimenticia y una apuesta fuerte a la infraestructura, un nuevo parque industrial busca abrirse camino en el cordón sur del Gran Rosario. Se trata de <strong>Nodo</strong>, un desarrollo privado impulsado por <strong>Grupo Nasini</strong> Inversiones junto a <strong>Mariano Schor</strong>, de la constructora <strong>Dyscon</strong>, que ya puso en marcha las obras y apunta a captar empresas que hoy operan “atrapadas” dentro del tejido urbano.<br>Según explicó <strong>Nasini</strong>, el foco en las alimenticias surgió tras detectar una demanda creciente de empresas que necesitan expandirse pero enfrentan limitaciones dentro de las ciudades.<br>“Hay muchas industrias alimenticias que quedaron atrapadas dentro del eje urbano, con problemas logísticos, de habilitaciones y de crecimiento”, señaló. “Muchas veces no se mudan porque los parques industriales no tienen los servicios específicos que necesitan”.<br>Por eso, Nodo incorporó infraestructura especialmente diseñada para ese segmento: planta potabilizadora de agua, red cloacal, acceso a gas y capacidad eléctrica industrial.'],
    carpeta:'parque_industrial',
    fotos: ['00.jpeg','01.jpg','02.jpg','03.jpg']
  },
  {
    id: 'tecnoteca', nombre: 'Tecnoteca', categoria: 'Comunidad',
    tipo: 'colaboracion', con: '<strong>Del SOl</strong> - Empresa Constructora', estado: 'terminado', cliente: '',
    mapa: 'Estévez Boero 740, S2000 Rosario, Santa Fe',
    descripcion: ['<strong>Tecnoteca, Escuela de Tecnología y Oficios Digitale</strong><br>El propósito de Tecnotecta es funcionar como una Escuela de Tecnología y Oficios Digitales, donde se impulsen proyectos de aprendizaje tecnológicos vinculados a la ciencia, la comunicación y el arte. Está pensada para jóvenes entre 18 a 30 años, priorizando sobre todo a aquellas/os que no puedan acceder a oportunidades educativas similares.<br>Emplazada en el Galpón 13, cuenta con 4.000 mts2 distribuidos en dos plantas que disponen de los recursos tecnológicos, profesionales y un ambiente confortable para alojar a los y las participantes. Los espacios, equipados en función de las especiﬁcidades técnicas, son: Cápsula Audiovisual; Coworking; FabLab; Laboratorios; Salas de capacitación. También está proyectado un lactario, el comedor y un espacio de cuidados para niños y niñas.'],
    portada:'tecnoteca/03.jpg',
    carpeta:'tecnoteca',
    video:'c6oSxMGdOtAs',
    fotos: ['00.jpg','01.jpg','02.jpg','03.jpg',]
  },
  {
    id: 'rdz-1635', nombre: 'Proyecto: RDZ 1635', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    mapa: 'Rodríguez 1635, Rosario, Santa Fe',
    descripcion: [],
    fotos: ['rdz_1635.jpg']
  },
  {
    id: 'viviendas-tablada', nombre: '64 Viviendas en Tablada', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
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
    fotos: ['monumento.jpg']
  },
  {
    id: 'hospital-samco', nombre: 'Hospital SAMCo Eva Perón', categoria: 'Salud',
    tipo: 'propia', estado: 'terminado', cliente: '',
    mapa: 'Monteagudo 1582-1600, S2132 Funes, Santa Fe',
    descripcion: [],
    fotos: ['hospital.jpg']
  },
  {
    id: 'eetp-485', nombre: 'Ampliación Secundaria E.E.T.P. N° 485', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: '',
    mapa: 'X9JQ+CP2 Villa Gdor. Galvez, Santa Fe',
    descripcion: [],
    fotos: ['eetp485.jpg']
  },
  {
    id: 'escuela-608', nombre: 'Escuela Secundaria N.° 608 - La Esperanza', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: '',
    mapa: 'Pje. Uboldi 630, S2124 Villa Gdor. Galvez, Santa Fe',
    descripcion: [],
    carpeta:'jardin_608',
    fotos: ['01.jpg','00.jpg']
  },
  {
    id: 'plaza-san-martin', nombre: 'Plaza San Martín', categoria: 'Espacio público',
    tipo: 'colaboracion', con: '<strong>Del SOl</strong> - Empresa Constructora', estado: 'terminado', cliente: '',
    mapa: '3942+G4 Rosario, Santa Fe',
    descripcion: [],
    fotos: ['plaza-san-martin.jpg']
  },
  {
    id: 'barrio-mortelari-1', nombre: 'Mejoramiento integral del barrio Mortelari I', categoria: 'Comunidad',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Villa Gobernador Gálvez · Santa Fe',
    descripcion: [],
    fotos: ['barrio_mortelari_1.jpg']
  }
];