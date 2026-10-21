/* Arma las tarjetas de obras a partir de obras-data.js. Se usa en dos páginas:
   - obras.html (#lista-obras): todas las obras, más los botones de filtro por categoría.
   - index.html (#obras-destacadas): solo las obras que tienen "destacada" en OBRAS.
     destacada: true  -> aparece (en el orden en que está escrita en OBRAS)
     destacada: 1, 2… -> aparece y el número define el orden (1 va primera) */
(function () {
  if (typeof OBRAS === 'undefined') return;

  // Orden de los botones de categoría (las que no figuren acá van al final, por orden alfabético)
  const ORDEN_CATEGORIAS = ['Educación', 'Salud', 'Patrimonio', 'Viviendas', 'Comunidad', 'Espacio público'];

  // Texto del punto de color de la esquina, según el estado de la obra
  const ESTADOS = { inicio: 'Obra iniciando', obra: 'Obra en ejecución', terminado: 'Obra terminada' };

  // Evita que comillas o símbolos en un texto rompan el HTML de un atributo
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  // "Espacio público" -> "espacio-publico" (valor que usan los filtros y los vínculos ?categoria=...)
  const slug = t => String(t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-');

  const tarjeta = o => {
    const carpeta = 'img/obras/' + (o.carpeta ? o.carpeta + '/' : '');
    const foto = carpeta + (o.miniatura || (o.fotos && o.fotos[0]) || '');
    const estado = ESTADOS[o.estado]
      ? `<span class="punto punto--${o.estado}" role="img" aria-label="${ESTADOS[o.estado]}" title="${ESTADOS[o.estado]}"></span>`
      : '';

    return `
      <article class="obra-card reveal" data-categoria="${slug(o.categoria)}" data-tipo="${o.tipo}">
        <a href="obra.html?id=${o.id}">
          <div class="obra-img">
            ${estado}
            <img src="${foto}" alt="${esc(o.nombre)}" loading="lazy">
            ${o.tipo === 'colaboracion' ? '<span class="tag-colab">En colaboración</span>' : ''}
            <span class="tag">${o.categoria}</span>
          </div>
          <div class="obra-cuerpo">
            <h3>${o.nombre}</h3>
            <p class="obra-lugar"><svg class="icon"><use href="#i-pin"/></svg> ${o.ubicacion || ''} <svg class="icon obra-flecha"><use href="#i-flecha"/></svg></p>
          </div>
        </a>
      </article>`;
  };

  // ---------- obras.html: listado completo + botones de categoría ----------
  const lista = document.getElementById('lista-obras');
  if (lista) {
    lista.innerHTML = OBRAS.map(tarjeta).join('');

    const filtros = document.getElementById('filtros-categoria');
    if (filtros) {
      const lugar = c => { const i = ORDEN_CATEGORIAS.indexOf(c); return i < 0 ? 999 : i; };
      [...new Set(OBRAS.map(o => o.categoria))]
        .sort((a, b) => lugar(a) - lugar(b) || a.localeCompare(b, 'es'))
        .forEach(c => filtros.insertAdjacentHTML('beforeend',
          `<button type="button" class="filtro" data-grupo="categoria" data-filtro="${slug(c)}">${c}</button>`));
    }
  }

  // ---------- index.html: obras destacadas ----------
  const destacadas = document.getElementById('obras-destacadas');
  if (destacadas) {
    const orden = d => (typeof d === 'number' ? d : 99);
    destacadas.innerHTML = OBRAS
      .filter(o => o.destacada)
      .sort((a, b) => orden(a.destacada) - orden(b.destacada))
      .map(tarjeta).join('');
  }
})();