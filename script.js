/* ================================================
   QUACKENIO — script.js
   ================================================ */

// ── Duck SFX on buttons and tabs ────────────────
(function () {
  const clickableSelector = '.btn, button, .nav-links a';
  const quackSrc = 'audio/quack_duck_sound.mp3';
  const quackVariations = [0.92, 1.0, 1.08, 1.15];

  // Preload base sound once; each click uses a clone for smoother overlap.
  const preloadQuackAudio = new Audio(quackSrc);
  preloadQuackAudio.preload = 'auto';
  preloadQuackAudio.load();

  function playQuack() {
    try {
      const quackAudio = new Audio(quackSrc);
      quackAudio.preload = 'auto';
      quackAudio.playbackRate = quackVariations[Math.floor(Math.random() * quackVariations.length)];
      quackAudio.volume = 0.5 + Math.random() * 0.15;

      const playPromise = quackAudio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Ignore autoplay/user-gesture restrictions silently.
        });
      }
    } catch (err) {
      // Ignore audio errors to avoid breaking interactions.
    }
  }

  //window.quackenioPlayQuack = playQuack;

  document.addEventListener('pointerdown', (event) => {
    const target = event.target.closest(clickableSelector);
    if (!target) return;

    playQuack();
  }, { capture: true });

  document.addEventListener('click', (event) => {
    const target = event.target.closest('.nav-links a');
    if (!target) return;

    const href = target.getAttribute('href');
    const isInternalLink = href && !href.startsWith('http');
    if (!isInternalLink) return;

    event.preventDefault();
    window.setTimeout(() => {
      window.location.href = href;
    }, 120);
  }, { capture: true });
})();

// ── Decorative: running duck across the viewport ─
(function () {
  if (!document.body) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (document.querySelector('.duck-runner')) return;

  const duckRunner = document.createElement('button');
  duckRunner.type = 'button';
  duckRunner.className = 'duck-runner';
  duckRunner.setAttribute('aria-label', 'Escuchar cuack');
  duckRunner.setAttribute('title', 'Haz clic para escuchar un cuack');

  duckRunner.innerHTML = `
    <span class="duck-runner-duck">
      <span class="duck-runner-eye"></span>
      <span class="duck-runner-wing"></span>
      <span class="duck-runner-leg duck-runner-leg--front"></span>
      <span class="duck-runner-leg duck-runner-leg--back"></span>
    </span>
  `;

  duckRunner.addEventListener('pointerdown', () => {
    if (typeof window.quackenioPlayQuack === 'function') {
      window.quackenioPlayQuack();
    }
  });

  document.body.appendChild(duckRunner);
})();


// ── Language selector ────────────────────────────
(function () {
  const STORAGE_KEY = 'quackenio_quackquackence_mode';
  const EXCLUDED_SELECTOR = 'script, style, noscript, code, pre, textarea, input, select, option';
  const LANGUAGES = [
    { value: 'quackquackence', label: 'Quackquackence', word: 'quack' },
    { value: 'perro', label: 'Perro', word: 'guau' },
    { value: 'castellano', label: 'Castellano' }
  ];
  let selectedLanguage = 'castellano';

  function preserveWordCase(original, translated) {
    if (original === original.toUpperCase()) return translated.toUpperCase();
    if (original[0] === original[0].toUpperCase()) {
      return translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    return translated;
  }

  function translateWord(word) {
    const language = LANGUAGES.find((item) => item.value === selectedLanguage);
    return language && language.word
      ? preserveWordCase(word, language.word)
      : word;
  }

  function translateText(text) {
    return text.replace(/[A-Za-zÀ-ÿ]+/g, translateWord);
  }

  function getTranslatableTextNodes() {
    const nodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest(EXCLUDED_SELECTOR)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    let current = walker.nextNode();
    while (current) {
      nodes.push(current);
      current = walker.nextNode();
    }
    return nodes;
  }

  function applySelectedLanguage() {
    if (selectedLanguage === 'castellano') {
      restoreOriginalLanguage();
      return;
    }

    getTranslatableTextNodes().forEach((node) => {
      if (node.__quackOriginalText === undefined) {
        node.__quackOriginalText = node.nodeValue;
      }
      node.nodeValue = translateText(node.__quackOriginalText);
    });

    const translatableAttributes = ['placeholder', 'aria-label', 'title', 'alt'];
    document.querySelectorAll('*').forEach((el) => {
      if (el.closest(EXCLUDED_SELECTOR)) return;

      translatableAttributes.forEach((attr) => {
        if (!el.hasAttribute(attr)) return;

        const key = '__quackOriginalAttr_' + attr;
        if (el[key] === undefined) {
          el[key] = el.getAttribute(attr);
        }
        el.setAttribute(attr, translateText(el[key]));
      });
    });
  }

  function restoreOriginalLanguage() {
    getTranslatableTextNodes().forEach((node) => {
      if (node.__quackOriginalText !== undefined) {
        node.nodeValue = node.__quackOriginalText;
      }
    });

    const translatableAttributes = ['placeholder', 'aria-label', 'title', 'alt'];
    document.querySelectorAll('*').forEach((el) => {
      translatableAttributes.forEach((attr) => {
        const key = '__quackOriginalAttr_' + attr;
        if (el[key] !== undefined) {
          el.setAttribute(attr, el[key]);
        }
      });
    });
  }

  function injectSelectorStyles() {
    if (document.getElementById('quack-language-selector-styles')) return;

    const style = document.createElement('style');
    style.id = 'quack-language-selector-styles';
    style.textContent = `
      .quack-language-control {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        z-index: 2100;
        border: 1px solid rgba(255, 214, 0, 0.45);
        background: #111;
        color: #FFD600;
        border-radius: 999px;
        padding: 0.45rem 0.85rem;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
        display: flex;
        align-items: center;
        gap: 0.55rem;
      }
      .quack-language-control select {
        max-width: 12rem;
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
      }
      .quack-language-control option {
        background: #111;
        color: #FFD600;
      }
      .quack-language-control select:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 3px;
      }
    `;
    document.head.appendChild(style);
  }

  function createLanguageSelector() {
    injectSelectorStyles();

    const control = document.createElement('div');
    control.className = 'quack-language-control';

    const label = document.createElement('label');
    label.htmlFor = 'quack-language-selector';
    label.textContent = 'Idioma:';

    const selector = document.createElement('select');
    selector.id = 'quack-language-selector';
    selector.setAttribute('aria-label', 'Seleccionar idioma');
    LANGUAGES.forEach((language) => {
      const option = document.createElement('option');
      option.value = language.value;
      option.textContent = language.label;
      selector.appendChild(option);
    });

    control.append(label, selector);
    document.body.appendChild(control);

    selector.addEventListener('change', () => {
      selectedLanguage = selector.value;
      localStorage.setItem(STORAGE_KEY, selectedLanguage);
      applySelectedLanguage();
    });

    return selector;
  }

  const selector = createLanguageSelector();
  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  selectedLanguage = savedLanguage === 'on'
    ? 'quackquackence'
    : savedLanguage === 'off'
      ? 'castellano'
      : LANGUAGES.some((language) => language.value === savedLanguage)
        ? savedLanguage
        : 'castellano';
  selector.value = selectedLanguage;
  applySelectedLanguage();
})();

// ── Hamburger menu toggle ──────────────────────
(function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
})();


// ── Mark active nav link ───────────────────────
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();


// ── News cards renderer (homepage + news page) ──
(function () {
  const featuredContainer = document.getElementById('news-featured');
  const archiveContainer = document.getElementById('news-feed');
  if (!featuredContainer && !archiveContainer) return;

  const newsPosts = Array.isArray(window.QUACKENIO_NEWS)
    ? window.QUACKENIO_NEWS.slice()
    : [];

  if (!newsPosts.length) {
    const emptyMarkup = '<p class="news-empty">Aun no hay noticias publicadas.</p>';
    if (featuredContainer) featuredContainer.innerHTML = emptyMarkup;
    if (archiveContainer) archiveContainer.innerHTML = emptyMarkup;
    return;
  }

  const monthNames = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatDate(dateIso) {
    const date = new Date(dateIso + 'T00:00:00');
    if (Number.isNaN(date.getTime())) return 'Fecha por confirmar';

    const day = String(date.getDate()).padStart(2, '0');
    const month = monthNames[date.getMonth()] || '---';
    const year = date.getFullYear();
    return day + ' ' + month + ' ' + year;
  }

  function renderPostCard(post) {
    const title = escapeHtml(post.title || 'Nueva publicacion');
    const category = escapeHtml(post.category || 'Noticias');
    const excerpt = escapeHtml(post.excerpt || 'Nueva noticia disponible en Quackenio.');
    const image = escapeHtml(post.image || 'news/300626promo_mexico_ecuador.jpeg');
    const imageAlt = escapeHtml(post.imageAlt || title);
    const meta = formatDate(post.date || '');

    return `
      <article class="news-post-card" aria-label="${title}">
        <div class="news-media-wrap">
          <img src="${image}" alt="${imageAlt}" class="news-media" data-gallery-item data-gallery-label="${title}" loading="lazy" />
        </div>
        <div class="news-content">
          <p class="news-meta">${meta} | ${category}</p>
          <h3>${title}</h3>
          <p>${excerpt}</p>
        </div>
      </article>
    `;
  }

  const sortedPosts = newsPosts.sort((a, b) => {
    const aTime = new Date(a.date || '').getTime();
    const bTime = new Date(b.date || '').getTime();
    return bTime - aTime;
  });

  if (featuredContainer) {
    featuredContainer.innerHTML = renderPostCard(sortedPosts[0]);
  }

  if (archiveContainer) {
    archiveContainer.innerHTML = sortedPosts.map(renderPostCard).join('');
  }
})();


// ── Navbar scroll shadow ───────────────────────
(function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(62, 31, 0, 0.3)'
      : '0 2px 12px rgba(62, 31, 0, 0.15)';
  }, { passive: true });
})();


// ── Contact form validation & submission ───────
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const msgEl = document.getElementById('form-message');

  function showMessage(text, type) {
    msgEl.textContent = text;
    msgEl.className   = 'form-message ' + type;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name) {
      showMessage('Por favor, ingresa tu nombre.', 'error');
      form.name.focus();
      return;
    }
    if (!validateEmail(email)) {
      showMessage('Por favor, ingresa un correo electrónico válido.', 'error');
      form.email.focus();
      return;
    }
    if (message.length < 10) {
      showMessage('El mensaje debe tener al menos 10 caracteres.', 'error');
      form.message.focus();
      return;
    }

    // Simulate successful submission
    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Enviando…';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Enviar cuack-mensaje';
      showMessage('¡Gracias, ' + name + '! Tu mensaje fue enviado. ¡El pato está en camino! 🦆', 'success');
    }, 1200);
  });
})();


// ── Scroll-reveal animation ────────────────────
(function () {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('.card, .menu-item, .info-block, .about-grid');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();


// ── About gallery viewer (portraits + family) ───
(function () {
  const modal = document.getElementById('gallery-modal');
  const items = Array.from(document.querySelectorAll('[data-gallery-item]'));
  if (!items.length || !modal) return;

  const modalImage = document.getElementById('gallery-modal-image');
  const caption = document.getElementById('gallery-caption');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const zoomInBtn = document.getElementById('gallery-zoom-in');
  const zoomOutBtn = document.getElementById('gallery-zoom-out');
  const closeTargets = modal.querySelectorAll('[data-gallery-close]');

  let currentIndex = 0;
  let zoom = 1;
  let touchStartX = 0;
  const swipeThreshold = 40;

  function applyZoom() {
    modalImage.style.transform = 'scale(' + zoom.toFixed(2) + ')';
  }

  function renderModal() {
    const current = items[currentIndex];
    modalImage.src = current.getAttribute('src') || '';
    modalImage.alt = current.getAttribute('alt') || '';
    caption.textContent = current.dataset.galleryLabel || current.getAttribute('alt') || '';
    applyZoom();
  }

  function openModal(index) {
    currentIndex = index;
    zoom = 1;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderModal();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % items.length;
    zoom = 1;
    renderModal();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    zoom = 1;
    renderModal();
  }

  items.forEach((item, idx) => {
    item.style.cursor = 'zoom-in';
    item.addEventListener('click', () => openModal(idx));
  });

  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);

  zoomInBtn.addEventListener('click', () => {
    zoom = Math.min(zoom + 0.2, 3);
    applyZoom();
  });

  zoomOutBtn.addEventListener('click', () => {
    zoom = Math.max(zoom - 0.2, 1);
    applyZoom();
  });

  modalImage.addEventListener('dblclick', () => {
    zoom = zoom < 1.8 ? 2 : 1;
    applyZoom();
  });

  modalImage.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.15 : 0.15;
    zoom = Math.max(1, Math.min(3, zoom + delta));
    applyZoom();
  }, { passive: false });

  modalImage.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  modalImage.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) < swipeThreshold) return;
    if (distance < 0) nextImage();
    if (distance > 0) prevImage();
  }, { passive: true });

  closeTargets.forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
  });
})();
