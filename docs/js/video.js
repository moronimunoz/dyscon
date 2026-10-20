/* Arma el reproductor de un video para las fichas de obras y de novedades.
   Lo usan obra.js y novedad.js:  crearVideo(v, titulo, rutaPoster)

   "v" puede ser:
     'c6oSxMGdOtA'                                     -> código de YouTube
     'novedades/nodo.mp4'                              -> archivo de la carpeta video/
     'https://sitio.com/nodo.mp4'                      -> dirección completa de un .mp4 / .webm
     { src: 'novedades/nodo.mp4', poster: 'nodo.jpg' } -> archivo con portada propia

   "rutaPoster" es la carpeta de imágenes donde está la portada ('img/novedades/' o 'img/obras/').
   La portada solo se usa en videos de archivo: YouTube pone su propia imagen. */
function crearVideo(v, titulo, rutaPoster) {
  const item = typeof v === 'string' ? { src: v } : v;
  const src = item.src || '';
  const t = String(titulo).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const esUrl = x => /^https?:\/\//.test(x);

  if (/\.(mp4|webm)$/i.test(src)) {
    const url = esUrl(src) ? src : 'video/' + src;
    const tipo = /\.webm$/i.test(src) ? 'video/webm' : 'video/mp4';
    const poster = item.poster
      ? ` poster="${esUrl(item.poster) ? item.poster : (rutaPoster || '') + item.poster}"`
      : '';
    // Sin portada propia, "#t=0.1" hace que iPhone muestre un cuadro del video en vez de un recuadro negro
    const fuente = item.poster ? url : url + '#t=0.1';
    return `<div class="video"><video controls playsinline preload="metadata"${poster} aria-label="Video: ${t}"><source src="${fuente}" type="${tipo}">Tu navegador no puede reproducir este video.</video></div>`;
  }

  return `<div class="video"><iframe src="https://www.youtube.com/embed/${src}" title="Video: ${t}" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
}
