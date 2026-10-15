/* Dibuja la página de una obra a partir de obras-data.js
   Se usa así: obra.html?id=casa-m */
(function () {
  const main = document.getElementById('detalle');
  const id = new URLSearchParams(location.search).get('id');
  const o = OBRAS.find(x => x.id === id);

  if (!o) {
    main.innerHTML = `<section class="contenedor ficha"><h1>Obra no encontrada</h1>
      <p><a href="obras.html" class="link-flecha">Volver a Obras <svg class="icon"><use href="#i-flecha"/></svg></a></p></section>`;
    return;
  }

  document.title = `${o.nombre} | DyScon S.A.`;

  // Una fila "título | contenido". Si no hay contenido, no se muestra.
  const fila = (titulo, html) => html ? `<div class="ficha-fila"><h2>${titulo}</h2><div>${html}</div></div>` : '';

  const pasos = [['inicio', 'Inicio'], ['obra', 'En obra'], ['terminado', 'Terminado']];
  const estados = `<div class="estados">${pasos.map(([k, t]) =>
    `<span class="${k === o.estado ? 'activo' : ''}">${k === 'obra' && o.estado === 'obra' ? '<i class="en-curso en-curso--inline"></i>' : ''}${t}</span>`
  ).join('')}</div>`;

  const modalidad = o.tipo === 'colaboracion'
    ? `<p>Obra en colaboración${o.con ? ' con ' + o.con : ''}.</p>`
    : '<p>Obra propia.</p>';

  const base = 'img/obras/' + (o.carpeta ? o.carpeta + '/' : '');
  const fotos = (o.fotos || []).map((f, i) =>
    `<button type="button" data-src="${base}${f}" aria-label="Ampliar foto ${i + 1}"><img src="${base}${f}" alt="${o.nombre} - foto ${i + 1}" loading="lazy"></button>`
  ).join('');

  // El número es el zoom: 14 muestra el barrio, 16 la cuadra y 18 casi el edificio
  const mapa = `https://www.google.com/maps?q=${encodeURIComponent(o.mapa || o.ubicacion)}&z=16&output=embed`;

  main.innerHTML = `
    <section class="page-hero">
      <div class="contenedor">
        <p class="migas"><a href="index.html">Inicio</a> / <a href="obras.html">Obras</a> / ${o.nombre}</p>
        <div class="chips"><span class="chip">${o.categoria}</span>${o.tipo === 'colaboracion' ? '<span class="chip">En colaboración</span>' : ''}</div>
        <h1>${o.nombre}</h1>
        <p>${o.ubicacion}</p>
      </div>
    </section>
    <section class="contenedor ficha">
      ${fila('Cliente', o.cliente && `<p>${o.cliente}</p>`)}
      ${fila('Estado', estados)}
      ${fila('Modalidad', modalidad)}
      ${fila('Descripción', o.descripcion && o.descripcion.map(p => `<p>${p}</p>`).join(''))}
      ${fila('Objetivos y datos', o.datos && `<ul class="ficha-datos">${o.datos.map(d => `<li>${d}</li>`).join('')}</ul>`)}
      ${fila('Galería de fotos', fotos && `<div class="galeria">${fotos}</div>`)}
      ${fila('Ubicación', `<div class="mapa"><iframe src="${mapa}" title="Mapa: ${o.nombre}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`)}
      <p class="ficha-volver"><a href="obras.html" class="link-flecha">Volver a todas las obras <svg class="icon"><use href="#i-flecha"/></svg></a></p>
    </section>`;

  // Visor de fotos ampliadas
  const visor = document.getElementById('visor');
  main.querySelectorAll('.galeria button').forEach(b =>
    b.addEventListener('click', () => { visor.querySelector('img').src = b.dataset.src; visor.showModal(); })
  );
  visor.addEventListener('click', () => visor.close());
})();
