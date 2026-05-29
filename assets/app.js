/* ============================================================
   Lucas Alexandre — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ── Tech stack logo wall ─────────────────────────── */
  // cat drives the small category label
  const CAT = { ai: 'IA & Desenvolvimento', data: 'Backend & Dados', infra: 'Infra & Deploy' };
  const G = {
    cursor: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2 4 7v10l8 5 8-5V7z" opacity=".5"/><path d="M12 2 4 7l8 5 8-5z" opacity=".95"/><path d="M12 12v10l8-5V7z" opacity=".7"/></svg>',
    claude: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg>',
    palette: '<svg viewBox="0 0 24 24"><path fill="#fff" d="M12 3.5C7 3.5 3.5 7.2 3.5 11.5c0 4 3 7 6.8 7 1 0 1.7-.8 1.7-1.8 0-.5-.2-.9-.2-1.3 0-.7.5-1.2 1.2-1.2H15c2.8 0 5.5-2.4 5.5-5.5C20.5 5.8 17 3.5 12 3.5z"/><circle cx="7.5" cy="11.5" r="1.1" fill="rgba(255,255,255,0.35)"/><circle cx="10" cy="7.8" r="1.1" fill="rgba(255,255,255,0.35)"/><circle cx="14" cy="7" r="1.1" fill="rgba(255,255,255,0.35)"/><circle cx="17" cy="10" r="1.1" fill="rgba(255,255,255,0.35)"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><defs><linearGradient id="lgh" x1="1" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF7043"/><stop offset="55%" stop-color="#F0456A"/><stop offset="100%" stop-color="#7C3AED"/></linearGradient></defs><path fill="url(#lgh)" d="M12 20.5C11.6 20.2 3 14.8 3 8.9 3 5.6 5.2 3.5 7.5 3.5c1.7 0 3.2 1 4 2.4.4.6.5.9.5.9s.1-.3.5-.9c.8-1.4 2.3-2.4 4-2.4C18.8 3.5 21 5.6 21 8.9c0 5.9-8.6 11.3-9 11.6z"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2l1.9 7.1L21 11l-7.1 1.9L12 20l-1.9-7.1L3 11l7.1-1.9z"/></svg>',
    octopus: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 3a6 6 0 016 6v3.2a2.8 2.8 0 01-2.8 2.8 1.9 1.9 0 00-1.9 1.9 1.3 1.3 0 01-2.6 0 1.9 1.9 0 00-1.9-1.9A2.8 2.8 0 016 12.2V9a6 6 0 016-6z"/><circle cx="10" cy="9.2" r="1" fill="#8B5CF6"/><circle cx="14" cy="9.2" r="1" fill="#8B5CF6"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M13 2 5 13.5h6L10 22l9-12h-6z"/></svg>',
    triangle: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 4l9 16H3z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z"/></svg>',
    stripe: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M13.3 9.3c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V5.3A11.4 11.4 0 0014.8 4.5C11.4 4.5 9 6.3 9 9.4c0 4.7 6.5 4 6.5 6 0 .8-.7 1.1-1.7 1.1-1.5 0-3.4-.6-4.9-1.4v4.2c1.6.7 3.3 1 4.9 1 3.5 0 5.9-1.7 5.9-4.9 0-5-6.5-4.2-6.5-6.1z"/></svg>',
  };
  const TECH = [
    { name: 'Cursor',           svg: G.cursor,   color: '#1A1A1A', cat: 'ai' },
    { name: 'Claude Code',      svg: G.claude,   color: '#D97757', cat: 'ai' },
    { name: 'Claude Design',    svg: G.palette,  color: '#C45C3A', cat: 'ai' },
    { name: 'Lovable',          svg: G.heart,    color: 'linear-gradient(135deg,#FF7043 0%,#F0456A 50%,#7C3AED 100%)', cat: 'ai' },
    { name: 'Google AI Studio', svg: G.sparkle,  color: '#4285F4', cat: 'ai' },
    { name: 'Jules',            svg: G.octopus,  color: '#8B5CF6', cat: 'ai' },
    { name: 'Supabase',         svg: G.bolt,     color: '#3ECF8E', cat: 'data' },
    { name: 'Vercel',           svg: G.triangle, color: '#111111', cat: 'infra' },
    { name: 'GitHub',           svg: G.github,   color: '#24292F', cat: 'infra' },
    { name: 'Stripe',           svg: G.stripe,   color: '#635BFF', cat: 'infra' },
  ];

  const wall = document.getElementById('logoWall');
  if (wall) {
    wall.innerHTML = TECH.map(function (t) {
      return (
        '<div class="logo-cell" title="' + t.name + '">' +
          '<span class="lc-mark" style="background:' + t.color + '">' + (t.svg || t.mark) + '</span>' +
          '<span class="lc-name">' + t.name + '</span>' +
          '<span class="lc-cat">' + CAT[t.cat] + '</span>' +
        '</div>'
      );
    }).join('');
  }

  /* ── Navbar scrolled state ────────────────────────── */
  const nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile burger → smooth jump menu (simple) ────── */
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── UI product mockups — scene cyclers ───────────── */
  (function () {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mocks = document.querySelectorAll('[data-mock]');
    mocks.forEach(function (mock, mi) {
      const scenes = mock.querySelectorAll('[data-scene]');
      if (!scenes.length) return;
      let idx = 0;
      function show(n) { scenes.forEach(function (s, i) { s.classList.toggle('active', i === n); }); }
      requestAnimationFrame(function () { mock.classList.add('ready'); show(0); });
      if (!reduce) {
        // offset each mock's phase so they don't switch in unison
        setTimeout(function () {
          setInterval(function () { idx = (idx + 1) % scenes.length; show(idx); }, 3800);
        }, mi * 1200);
      }
    });
  })();

  /* ── Scroll reveal (progressive enhancement) ──────── */
  const reveals = document.querySelectorAll('.reveal');
  const revealAnim = function (el) { el.classList.add('in'); };           // animated (foreground polish)
  const revealNow = function (el) { el.classList.add('in', 'is-instant'); }; // guaranteed visible, no transition dependency
  const inView = function (el) {
    const r = el.getBoundingClientRect();
    return r.top < (window.innerHeight || document.documentElement.clientHeight) && r.bottom > 0;
  };

  // 1) Above-the-fold content shows instantly — never depends on a transition painting.
  reveals.forEach(function (el) { if (inView(el)) revealNow(el); });

  // 2) Observe the rest; animate in on scroll.
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { revealAnim(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { if (!el.classList.contains('in')) io.observe(el); });
  } else {
    reveals.forEach(revealNow);
  }

  // 3) Failsafe: force final visible state without relying on transitions
  //    (covers throttled/background tabs, PDF & screenshot export).
  setTimeout(function () { reveals.forEach(revealNow); }, 1500);
})();
