/* Dibuja la página de una novedad a partir de novedades-data.js
   Se usa así: novedad.html?id=avance-obra-ejemplo */
(function () {
  const main = document.getElementById('detalle');
  const id = new URLSearchParams(location.search).get('id');
  const n = NOVEDADES.find(x => x.id === id);

  if (!n) {
    main.innerHTML = `<section class="contenedor ficha"><h1>Novedad no encontrada</h1>
      <p><a href="novedades.html" class="link-flecha">Volver a Novedades <svg class="icon"><use href="#i-flecha"/></svg></a></p></section>`;
    return;
  }

  document.title = `${n.titulo} | DyScon S.A.`;

  // Dirección canónica de esta novedad (para Google)
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = 'https://dysconsa.com.ar/novedad.html?id=' + n.id;
  document.head.appendChild(canonical);
  
  if (n.resumen) document.querySelector('meta[name="description"]').setAttribute('content', n.resumen);

  const fecha = new Date(n.fecha + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });

  const fotos = (n.fotos || []).map((f, i) =>
    `<button type="button" data-src="img/novedades/${f}" aria-label="Ampliar foto ${i + 1}"><img src="img/novedades/${f}" alt="${n.titulo} - foto ${i + 1}" loading="lazy"></button>`
  ).join('');

  main.innerHTML = `
    <section class="page-hero page-hero--img">
      <div class="hero-fondo" style="background-image:url('img/novedades/${n.portada}')"></div>
      <div class="contenedor">
        <p class="migas"><a href="index.html">Inicio</a> / <a href="novedades.html">Novedades</a> / ${n.titulo}</p>
        <div class="chips"><span class="chip">${n.categoria}</span></div>
        <h1>${n.titulo}</h1>
        <p><time datetime="${n.fecha}">${fecha}</time></p>
      </div>
    </section>
    <section class="contenedor ficha nota">
      ${(n.texto || []).map(p => `<p>${p}</p>`).join('')}
      ${n.video ? `<div class="video"><iframe src="https://www.youtube.com/embed/${n.video}" title="Video: ${n.titulo}" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>` : ''}
      ${fotos ? `<div class="galeria">${fotos}</div>` : ''}
      <p class="ficha-volver"><a href="novedades.html" class="link-flecha">Volver a todas las novedades <svg class="icon"><use href="#i-flecha"/></svg></a></p>
    </section>`;

   //Visor de fotos ampliadas (con flechas y puntos: js/visor.js)
   iniciarVisor(main.querySelectorAll('.galeria button'));
})();
