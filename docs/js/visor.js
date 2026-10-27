/* Visor de fotos ampliadas, con flechas, contador ("3 / 10"), botón X y teclado.
   Lo usan obra.js y novedad.js:  iniciarVisor(main.querySelectorAll('.galeria button'))
   Cada botón de la galería tiene data-src con la ruta de la foto. */
function iniciarVisor(botones) {
  const visor = document.getElementById('visor');
  if (!visor || !botones.length) return;

  const img = visor.querySelector('img');
  const contador = visor.querySelector('.visor-contador');
  const fotos = [...botones].map(b => b.dataset.src);
  let actual = 0;

  const mostrar = n => {
    actual = (n + fotos.length) % fotos.length;       // da la vuelta al llegar al final
    img.src = fotos[actual];
    img.alt = `Foto ${actual + 1} de ${fotos.length}`;
    contador.textContent = `${actual + 1} / ${fotos.length}`;
  };

  // Abrir al tocar una miniatura
  botones.forEach((b, i) => b.addEventListener('click', () => { mostrar(i); visor.showModal(); }));

  visor.querySelector('.visor-prev').addEventListener('click', () => mostrar(actual - 1));
  visor.querySelector('.visor-next').addEventListener('click', () => mostrar(actual + 1));
  visor.querySelector('.visor-cerrar').addEventListener('click', () => visor.close());

  // Cerrar al tocar el fondo oscuro (no la foto); Escape también cierra; flechas del teclado para moverse
  visor.addEventListener('click', e => { if (e.target === visor) visor.close(); });
  visor.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') mostrar(actual - 1);
    if (e.key === 'ArrowRight') mostrar(actual + 1);
  });

  // Con una sola foto no hacen falta las flechas ni el contador (la X sí queda)
  visor.classList.toggle('visor--una', fotos.length < 2);
}