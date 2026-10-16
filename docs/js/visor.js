/* Visor de fotos ampliadas, con flechas, puntos y teclado.
   Lo usan obra.js y novedad.js:  iniciarVisor(main.querySelectorAll('.galeria button'))
   Cada botón de la galería tiene data-src con la ruta de la foto. */
function iniciarVisor(botones) {
  const visor = document.getElementById('visor');
  if (!visor || !botones.length) return;

  const img = visor.querySelector('img');
  const contenedorPuntos = visor.querySelector('.visor-dots');
  const fotos = [...botones].map(b => b.dataset.src);
  let actual = 0;

  // Un punto por foto
  contenedorPuntos.innerHTML = fotos.map((_, i) =>
    `<button type="button" aria-label="Ir a la foto ${i + 1}"></button>`
  ).join('');
  const puntos = contenedorPuntos.querySelectorAll('button');

  const mostrar = n => {
    actual = (n + fotos.length) % fotos.length;    // da la vuelta al llegar al final
    img.src = fotos[actual];
    puntos.forEach((p, i) => p.classList.toggle('activo', i === actual));
  };

  // Abrir al tocar una miniatura
  botones.forEach((b, i) => b.addEventListener('click', () => { mostrar(i); visor.showModal(); }));

  // Los botones no deben cerrar el visor (el clic sube hasta el <dialog>, por eso stopPropagation)
  puntos.forEach((p, i) => p.addEventListener('click', e => { e.stopPropagation(); mostrar(i); }));
  visor.querySelector('.visor-prev').addEventListener('click', e => { e.stopPropagation(); mostrar(actual - 1); });
  visor.querySelector('.visor-next').addEventListener('click', e => { e.stopPropagation(); mostrar(actual + 1); });

  // Cerrar al tocar la foto o el fondo; moverse con las flechas del teclado
  visor.addEventListener('click', () => visor.close());
  visor.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') mostrar(actual - 1);
    if (e.key === 'ArrowRight') mostrar(actual + 1);
  });

  // Con una sola foto no hacen falta los controles
  visor.classList.toggle('visor--una', fotos.length < 2);
}
