/* Nosotros: contador de cifras y carrusel de marcas */
(function () {

  // ---------- 1. Las cifras "cuentan" al aparecer en pantalla ----------
  const cifras = document.querySelector('.cifras-lista');
  if (cifras) {
    const nums = cifras.querySelectorAll('.num');
    const sinAnimacion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!sinAnimacion) {
      nums.forEach(n => { n.textContent = '0'; });

      const contar = () => nums.forEach(n => {
        const total = Number(n.dataset.valor);
        const duracion = 1400, inicio = performance.now();
        const paso = ahora => {
          const p = Math.min(1, (ahora - inicio) / duracion);
          n.textContent = Math.round(total * (1 - Math.pow(1 - p, 3))).toLocaleString('es-AR');
          if (p < 1) requestAnimationFrame(paso);
        };
        requestAnimationFrame(paso);
      });

      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { contar(); obs.disconnect(); }
      }, { threshold: 0.4 });
      obs.observe(cifras);
    }
  }

  // ---------- 2. Carrusel de marcas: flechas, puntos y deslizar con el dedo ----------
  const carrusel = document.querySelector('.carrusel');
  if (carrusel) {
    const pista = carrusel.querySelector('.carrusel-pista');
    const puntos = document.querySelector('.carrusel-dots');
    let paginas = 1;

    const max = () => pista.scrollWidth - pista.clientWidth;
    const paginaActual = () =>
      pista.scrollLeft >= max() - 2 ? paginas - 1 : Math.round(pista.scrollLeft / pista.clientWidth);
    const ir = n => pista.scrollTo({ left: Math.min(n * pista.clientWidth, max()), behavior: 'smooth' });
    const marcar = () => {
      const a = paginaActual();
      puntos.querySelectorAll('button').forEach((p, i) => p.classList.toggle('activo', i === a));
    };

    // Un punto por "página" (cada página muestra tantos logos como entren)
    const armar = () => {
      paginas = Math.max(1, Math.ceil(pista.scrollWidth / pista.clientWidth - 0.05));
      puntos.innerHTML = Array.from({ length: paginas }, (_, i) =>
        `<button type="button" aria-label="Ir a la página ${i + 1}"></button>`).join('');
      puntos.querySelectorAll('button').forEach((p, i) => p.addEventListener('click', () => ir(i)));
      carrusel.classList.toggle('carrusel--una', paginas < 2);
      marcar();
    };

    carrusel.querySelector('.carrusel-prev').addEventListener('click', () =>
      ir(paginaActual() === 0 ? paginas - 1 : paginaActual() - 1));
    carrusel.querySelector('.carrusel-next').addEventListener('click', () =>
      ir(paginaActual() === paginas - 1 ? 0 : paginaActual() + 1));

    pista.addEventListener('scroll', () => requestAnimationFrame(marcar), { passive: true });
    window.addEventListener('resize', armar);
    window.addEventListener('load', armar);
    armar();
  }
})();
