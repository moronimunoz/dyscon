/* =========================================================
   DYSCON S.A. - JavaScript
   ========================================================= */

// ---------- 1. Menú hamburguesa en móviles ----------
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  // Abre o cierra el menú y deja el botón en sintonía (☰ cerrado, ✕ abierto)
  const estadoMenu = (abierto) => {
    nav.classList.toggle('abierto', abierto);
    toggle.setAttribute('aria-expanded', abierto);
    toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    toggle.textContent = abierto ? '✕' : '☰';
  };

  toggle.addEventListener('click', () => estadoMenu(!nav.classList.contains('abierto')));

  // Cerrar el menú al tocar un link
  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => estadoMenu(false))
  );

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('abierto')) estadoMenu(false);
  });
}

// ---------- 2. Sombra del header al bajar ----------
const header = document.getElementById('header');
if (header) {
  const sombra = () => header.classList.toggle('con-sombra', window.scrollY > 10);
  window.addEventListener('scroll', sombra, { passive: true });
  sombra();
}

// ---------- 4. Animación de aparición al hacer scroll (la de antes) ----------
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => {
  el.classList.add('oculto');
  observer.observe(el);
});

// ---------- 5. Resaltar en el menú la sección que se está viendo ----------
const linksMenu = document.querySelectorAll('.nav a[href^="#"]');
const secciones = [...linksMenu]
  .map(l => document.querySelector(l.getAttribute('href')))
  .filter(Boolean);

if (secciones.length) {
  const espia = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        linksMenu.forEach(l =>
          l.classList.toggle('activo', l.getAttribute('href') === '#' + e.target.id)
        );
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  secciones.forEach(s => espia.observe(s));
}

// ---------- 7. Año automático en el footer ----------
const anio = document.getElementById('anio');
if (anio) anio.textContent = new Date().getFullYear();

// ---------- 8. Filtros de obras y desarrollos ----------
const botonesFiltro = document.querySelectorAll('.filtro');
const tarjetas = document.querySelectorAll('[data-estado]');

if (botonesFiltro.length) {
  botonesFiltro.forEach(btn => btn.addEventListener('click', () => {
    botonesFiltro.forEach(b => b.classList.toggle('activo', b === btn));
    const filtro = btn.dataset.filtro;
    tarjetas.forEach(t =>
      t.classList.toggle('filtrada', filtro !== 'todos' && t.dataset.estado !== filtro)
    );
  }));
}

// ---------- 9. Portada: el texto se desvanece cuando la página lo va tapando ----------
const heroSec = document.querySelector('.hero');
const heroTxt = document.querySelector('.hero-contenido');

if (heroSec && heroTxt) {
  let esperando = false;

  const desvanecer = () => {
    // "tope" = donde queda frenado el texto (lo define el CSS: top de .hero-contenido)
    const tope = parseFloat(getComputedStyle(heroTxt).top) || 0;
    // "margen" = separación entre el botón y la franja (lo define el CSS: padding-bottom de .hero)
    const margen = parseFloat(getComputedStyle(heroSec).paddingBottom) || 0;
    const finPortada = heroSec.getBoundingClientRect().bottom;   // dónde termina la portada en pantalla
    const opacidad = (finPortada - margen - tope) / (heroTxt.offsetHeight || 1);
    heroTxt.style.opacity = Math.min(1, Math.max(0, opacidad));
    esperando = false;
  };

  window.addEventListener('scroll', () => {
    if (!esperando) { esperando = true; requestAnimationFrame(desvanecer); }
  }, { passive: true });
  window.addEventListener('resize', desvanecer);
  desvanecer();
}

// Video de portada: pausa el video cuando ya bajaste y no se ve la portada (ahorra batería y datos en celulares)
const videoPortada = document.querySelector('.slides video');
if (videoPortada) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    videoPortada.pause();
  } else if (heroSec) {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) videoPortada.play().catch(() => {});
      else videoPortada.pause();
    }).observe(heroSec);
  }
}

// ---------- Email de contacto protegido contra spam ----------
const enlaceEmail = document.getElementById('email-contacto');

if (enlaceEmail) {
  const usuario = 'dysconsa';
  const dominio = 'dysconsa.com.ar';
  enlaceEmail.href = 'mailto:' + usuario + '@' + dominio;
  enlaceEmail.textContent = usuario + '@' + dominio;
}