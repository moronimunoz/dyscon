/* =========================================================
   DATOS DE LAS OBRAS - un bloque por obra (mismo orden que obras.html)
   Lo que dejes vacío ('' o []) no se muestra en la página.
   - estado: 'inicio' | 'obra' | 'terminado'
   - tipo:   'propia' | 'colaboracion'  (con: empresa con la que se colaboró)
   - fotos:  nombres dentro de img/obras/ (la primera es la principal)
   - Para agregar la fila "Objetivos y datos", sumá a la obra:
       datos: ['Superficie: ...', 'Plazo: ...']
   - Para ubicar mejor el mapa, sumá: mapa: 'Calle 123, Ciudad, Provincia'
   ========================================================= */
const OBRAS = [
  {
    id: 'casa-m', nombre: 'Proyecto: Casa M', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    descripcion: [],
    fotos: ['casa_m.jpg']
  },
  {
    id: 'edificio-ricchieri', nombre: 'Edificio Ricchieri', categoria: 'Comunidad',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    descripcion: [],
    fotos: ['ricchieri.jpg']
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
    id: 'pami-ituzaingo', nombre: 'Pami I - Bicentenario Ituzaingó', categoria: 'Salud',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    descripcion: [],
    fotos: ['pami.jpg']
  },
  {
    id: 'parque-industrial', nombre: 'Parque Industrial', categoria: 'Espacio público',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Villa Gobernador Gálvez · Santa Fe',
    descripcion: [],
    fotos: ['parque_industrial_vgg.jpeg']
  },
  {
    id: 'tecnoteca', nombre: 'Tecnoteca', categoria: 'Comunidad',
    tipo: 'colaboracion', con: '', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    descripcion: [],
    fotos: ['tecnoteca.jpg']
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
    ubicacion: 'Rosario · Santa Fe',
    descripcion: [],
    fotos: ['tablada.jpg']
  },
  {
    id: 'unidad-penitenciaria', nombre: 'Unidad Penitenciaria N° 8 y 15', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Piñeiro · Santa Fe',
    descripcion: [],
    fotos: ['pineiro.jpeg']
  },
  {
    id: 'plaza-san-cristobal', nombre: 'Plaza San Cristóbal', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'CABA · Buenos Aires',
    descripcion: [],
    fotos: ['plaza-san-cristobal.jpg']
  },
  {
    id: 'parque-regional-sur', nombre: 'Parque Regional Sur', categoria: 'Comunidad',
    tipo: 'propia', estado: 'obra', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    descripcion: [],
    fotos: ['parque_regional_sur.jpg']
  },
  {
    id: 'monumento-bandera', nombre: 'Monumento Nacional a la Bandera', categoria: 'Patrimonio',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
    descripcion: [],
    fotos: ['monumento.jpg']
  },
  {
    id: 'hospital-samco', nombre: 'Hospital SAMCo Eva Perón', categoria: 'Salud',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Funes · Santa Fe',
    descripcion: [],
    fotos: ['hospital.jpg']
  },
  {
    id: 'eetp-485', nombre: 'Ampliación Secundaria E.E.T.P. N° 485', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Villa Gobernador Gálvez · Santa Fe',
    descripcion: [],
    fotos: ['eetp485.jpg']
  },
  {
    id: 'escuela-608', nombre: 'Escuela Secundaria N.° 608 - La Esperanza', categoria: 'Educación',
    tipo: 'propia', estado: 'terminado', cliente: '',
    ubicacion: 'Villa Gobernador Gálvez · Santa Fe',
    descripcion: [],
    fotos: ['escuela_jardin/jardin_237.jpg']
  },
  {
    id: 'plaza-san-martin', nombre: 'Plaza San Martín', categoria: 'Espacio público',
    tipo: 'colaboracion', con: '', estado: 'terminado', cliente: '',
    ubicacion: 'Rosario · Santa Fe',
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