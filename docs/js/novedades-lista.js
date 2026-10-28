/* Arma las tarjetas de novedades.html a partir de novedades-data.js
   (ordenadas por fecha, la más nueva primero). */
(function () {
  const grid = document.getElementById('lista-novedades');
  if (!grid || typeof NOVEDADES === 'undefined') return;

  const fmt = f => new Date(f + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
  // "Institucional" -> "institucional" (es el valor que usan los botones de filtro)
  const clave = c => c.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  grid.innerHTML = [...NOVEDADES]
    .sort((a, b) => b.fecha.localeCompare(a.fecha))
    .map(n => `
      <article class="obra-card reveal" data-estado="${clave(n.categoria)}">
        <a href="novedad-${n.id}.html">
          <div class="obra-img">
            <img src="img/novedades/${n.portada}" alt="${n.titulo}" loading="lazy">
            <span class="tag">${n.categoria}</span>
          </div>
          <div class="obra-cuerpo">
            <h3>${n.titulo}</h3>
            <p class="obra-lugar"><svg class="icon"><use href="#i-calendario"/></svg> <time datetime="${n.fecha}">${fmt(n.fecha)}</time> <svg class="icon obra-flecha"><use href="#i-flecha"/></svg></p>
          </div>
        </a>
      </article>`).join('');
})();