/* Arma las tarjetas de obras.html a partir de obras-data.js
   (en el mismo orden en que están escritas las obras en OBRAS). */
(function () {
  const grid = document.getElementById('lista-obras');
  if (!grid || typeof OBRAS === 'undefined') return;

  // Evita que comillas o símbolos en un texto rompan el HTML de un atributo
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  grid.innerHTML = OBRAS.map(o => {
    const carpeta = 'img/obras/' + (o.carpeta ? o.carpeta + '/' : '');
    const foto = carpeta + (o.miniatura || (o.fotos && o.fotos[0]) || '');
    const enObra = o.estado === 'obra';
    const colab = o.tipo === 'colaboracion';

    return `
      <article class="obra-card reveal" data-estado="${o.tipo}">
        <a href="obra.html?id=${o.id}">
          <div class="obra-img">
            ${enObra ? '<span class="en-curso" title="Obra en ejecución" role="img" aria-label="Obra en ejecución"></span>' : ''}
            <img src="${foto}" alt="${esc(o.nombre)}" loading="lazy">
            ${colab ? '<span class="tag-colab">En colaboración</span>' : ''}
            <span class="tag">${o.categoria}</span>
          </div>
          <div class="obra-cuerpo">
            <h3>${o.nombre}</h3>
            <p class="obra-lugar"><svg class="icon"><use href="#i-pin"/></svg> ${o.ubicacion || ''} <svg class="icon obra-flecha"><use href="#i-flecha"/></svg></p>
          </div>
        </a>
      </article>`;
  }).join('');
})();
