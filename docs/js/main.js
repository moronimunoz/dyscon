/* =========================================================
   DYSCON S.A. - JavaScript
   ========================================================= */

// ---------- 1. Menú hamburguesa en móviles (el de antes) ----------
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const abierto = nav.classList.toggle('abierto');
    toggle.setAttribute('aria-expanded', abierto);
  });

  // Cerrar el menú al tocar un link
  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      nav.classList.remove('abierto');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// ---------- 2. Sombra del header al bajar ----------
const header = document.getElementById('header');
if (header) {
  const sombra = () => header.classList.toggle('con-sombra', window.scrollY > 10);
  window.addEventListener('scroll', sombra, { passive: true });
  sombra();
}

// ---------- 3. Slider del hero ----------
const slides = document.querySelectorAll('.slide');
const dotsBox = document.querySelector('.hero-dots');

if (slides.length > 1 && dotsBox) {
  let actual = 0;
  let timer;

  // Crear un punto por cada diapositiva
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', `Ir a la diapositiva ${i + 1}`);
    b.addEventListener('click', () => { ir(i); reiniciar(); });
    dotsBox.appendChild(b);
  });
  const dots = dotsBox.querySelectorAll('button');

  function ir(n) {
    actual = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('activa', i === actual));
    dots.forEach((d, i) => d.classList.toggle('activo', i === actual));
  }

  //iniciar: El 6000 son milisegundos (6 segundos).
  function iniciar() { timer = setInterval(() => ir(actual + 1), 4000); }
  function reiniciar() { clearInterval(timer); iniciar(); }

  // Pausar cuando el mouse está sobre el hero
  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', iniciar);

  ir(0);
  iniciar();
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

// ---------- 6. Formulario de contacto (contacto.html) ----------
// Para que envíe mails de verdad: pegá la dirección de Formspree en data-endpoint del <form>.
// Si data-endpoint está vacío, se abre el programa de correo del visitante con el mensaje armado.
const form = document.getElementById('form-contacto');
const msg = document.getElementById('form-msg');

if (form && msg) {
  const aviso = (texto, color) => { msg.textContent = texto; msg.style.color = color; };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(form));

    if (datos._gotcha) return;                                   // campo trampa: solo lo completa un robot
    if (datos.mensaje.trim().length < 10) { aviso('El mensaje es muy corto.', 'crimson'); return; }

    const endpoint = form.dataset.endpoint;

    if (!endpoint) {
      const asunto = encodeURIComponent('Consulta desde la web - ' + datos.nombre);
      const cuerpo = encodeURIComponent(`${datos.mensaje}\n\nNombre: ${datos.nombre}\nEmail: ${datos.email}`);
      location.href = `mailto:moronimunoz123@gmail.com?subject=${asunto}&body=${cuerpo}`;
      aviso('Se abrió tu programa de correo para enviar el mensaje.', 'green');
      return;
    }

    const boton = form.querySelector('button[type="submit"]');
    boton.disabled = true;
    aviso('Enviando…', 'inherit');
    try {
      const r = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error('envio');
      aviso('¡Gracias! Recibimos tu mensaje y te responderemos pronto.', 'green');
      form.reset();
    } catch (err) {
      aviso('No pudimos enviar el mensaje. Probá de nuevo o escribinos a moronimunoz123@gmail.com.', 'crimson');
    } finally {
      boton.disabled = false;
    }
  });
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

// Video de portada: se pausa si el visitante pidió menos movimiento
const videoPortada = document.querySelector('.slides video');
if (videoPortada && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  videoPortada.pause();
}

//Evita que bots tomen el gmail para hacer Spam
const usuario = "dysconsa";
const dominio = "dysconsa.com.ar";
const enlace = document.getElementById("email-contacto");
enlace.href = "mailto:" + usuario + "@" + dominio;
enlace.textContent = usuario + "@" + dominio;