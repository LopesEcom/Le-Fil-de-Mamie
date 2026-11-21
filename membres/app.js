(function () {
  'use strict';
  var FM = window.FM;

  // ================= CONFIG (o dono pode editar) =================
  // E-mail de suporte que aparece na área. Deixe '' para esconder o bloco de suporte.
  var SUPPORT_EMAIL = 'contact@lefildemamie.fr';

  var CATS = [
    { id: 'main', label: 'Sacs à main', sub: 'Des modèles pour tous les jours et pour les grandes occasions' },
    { id: 'cabas', label: 'Cabas, paniers et sacs de plage', sub: 'Grands volumes pour le marché, la plage et le quotidien' },
    { id: 'bandouliere', label: 'Sacs bandoulière et besaces', sub: 'Les mains libres, avec style' },
    { id: 'pochettes', label: 'Pochettes et petits sacs', sub: 'Rapides à réaliser, parfaits à offrir' },
    { id: 'dos', label: 'Sacs à dos', sub: 'Pratiques et pleins de caractère' }
  ];

  var BONUS = [
    { id: 'materiel', n: 1, titre: 'Guide du matériel', sub: 'Fils, crochets, outils et renforts', img: 'img/flow/bonus-1-materiel.webp' },
    { id: 'points', n: 2, titre: 'Tableau des points et des mesures', sub: 'Abréviations, échantillon, fonds et tailles', img: 'img/flow/bonus-2-points.webp' },
    { id: 'anses', n: 3, titre: 'Guide premium des anses, bandoulières et fermoirs', sub: 'Choisir, crocheter et poser', img: 'img/flow/bonus-3-anses.webp' },
    { id: 'cours', n: 4, titre: 'Cours vidéo de 12 modèles premium', sub: '12 tutoriels vidéo pas à pas', img: 'img/flow/bonus-4-video.webp' }
  ];

  var COMPS = {
    'porte-cles': { titre: 'Collection 27 patrons de porte-clés au crochet', sub: '27 modèles rapides', img: 'img/flow/comp-porte-cles.webp',
      desc: '27 modèles de porte-clés au crochet, rapides à réaliser avec vos restes de fil. Parfaits pour offrir ou pour vendre.',
      folders: [{ label: 'Les 27 patrons (PDF)', id: '11sGZRn9mXp-_4pAvkkc7dMXr-VBSBSHk' }] },
    'macrame': { titre: 'Collection 49 patrons de sacs en macramé', sub: '49 modèles et 7 livrets bonus', img: 'img/flow/comp-macrame.webp',
      desc: '49 modèles de sacs en macramé en PDF, avec 7 livrets bonus (dans le dossier « Livrets bonus »), pour varier vos créations.',
      folders: [{ label: 'Les 49 patrons et les livrets bonus', id: '1HQhIm-5cFwPjw_1_giyaegmaQOgJ-_pR' }] },
    'enfants': { titre: 'Collection 87 patrons au crochet pour enfants', sub: '47 patrons et 40 modèles originaux', img: 'img/flow/comp-enfants.webp',
      desc: '87 patrons de crochet pour enfants en PDF : 47 patrons et 40 modèles originaux, pour habiller et amuser les petits.',
      folders: [{ label: 'Les 47 patrons pour enfants', id: '1-enA6wf-CFl4h7VGxi_ALpk1E0koHUR3' }, { label: 'Les 40 modèles originaux', id: '1fsd4qzJc73446kmQ0ODdSshRJY0K2z2b' }] },
    'doublures': { titre: 'Guide des doublures pour sacs au crochet', sub: 'Guide de 64 pages', img: 'img/flow/comp-doublures.webp',
      desc: 'Le guide de 64 pages pour coudre une doublure à vos sacs au crochet, pas à pas, même sans expérience en couture.',
      folders: [{ label: 'Le guide (PDF)', id: '1PLBdwjUCZNjVLE2Wlb6RVQQwkRz2pauq' }] }
  };

  // ================= ícones =================
  var I = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"/><path d="M7 10l5 5 5-5"/><path d="M5 20h14"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19.5 9l-5.7 1.4L12 16l-1.8-5.6L4.5 9l5.7-1.4L12 2Z"/><path d="M19 15l.9 2.4 2.1.6-2.1.6L19 21l-.9-2.4-2.1-.6 2.1-.6L19 15Z" opacity=".6"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/></svg>'
  };

  // ================= util =================
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function getJ(k, d) { try { var v = JSON.parse(get(k)); return v == null ? d : v; } catch (e) { return d; } }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pad(n) { return (n < 10 ? '00' : n < 100 ? '0' : '') + n; }
  function img(n) { return 'img/patrons/' + pad(n) + '.webp'; }
  function driveView(id) { return 'https://drive.google.com/file/d/' + id + '/view'; }
  function drivePreview(id) { return 'https://drive.google.com/file/d/' + id + '/preview'; }
  function driveDl(id) { return 'https://drive.google.com/uc?export=download&id=' + id; }
  function folderUrl(id) { return 'https://drive.google.com/drive/folders/' + id; }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  var app = document.getElementById('app');
  var toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }

  // ================= estado =================
  var K_ACC = 'fm_access', K_DONE = 'fm_done', K_LAST = 'fm_last', K_RECENT = 'fm_recent', K_VDONE = 'fm_vdone', K_VLAST = 'fm_vlast';
  var access = getJ(K_ACC, []);        // nomes liberados: vip, basique, porte-cles, ...
  var done = getJ(K_DONE, []);         // números dos moldes terminados
  var vdone = getJ(K_VDONE, []);       // índices das aulas vistas
  function has(a) { return access.indexOf(a) !== -1; }
  function plan() { return has('vip') ? 'vip' : has('basique') ? 'basique' : null; }
  function comps() { return Object.keys(COMPS).filter(has); }
  function isDone(n) { return done.indexOf(n) !== -1; }
  function toggleDone(n) {
    if (isDone(n)) { done = done.filter(function (x) { return x !== n; }); toast('Patron remis dans « à faire »'); }
    else { done.push(n); toast('Bravo ! Patron marqué comme terminé'); }
    set(K_DONE, JSON.stringify(done));
  }
  function touch(n) {
    set(K_LAST, String(n));
    var r = getJ(K_RECENT, []).filter(function (x) { return x !== n; }); r.unshift(n); set(K_RECENT, JSON.stringify(r.slice(0, 12)));
  }
  var P = FM.patrons, byN = {};
  P.forEach(function (p) { byN[p.n] = p; });

  // ================= acesso pela chave (?cle=...) =================
  function sha256(s) {
    var buf = new TextEncoder().encode(s);
    return crypto.subtle.digest('SHA-256', buf).then(function (h) {
      return Array.prototype.map.call(new Uint8Array(h), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
    });
  }
  function readKey() {
    var q = new URLSearchParams(location.search);
    var k = (q.get('cle') || q.get('acces') || '').trim();
    if (!k || !window.crypto || !crypto.subtle) return Promise.resolve(null);
    return sha256(k).then(function (h) {
      var who = FM.access[h];
      history.replaceState(null, '', location.pathname + (location.hash || '#/'));
      if (!who) return 'bad';
      if (!has(who)) { access.push(who); set(K_ACC, JSON.stringify(access)); }
      return who;
    });
  }

  // ================= componentes =================
  function pcard(p) {
    return '<a class="pcard" href="#/patron/' + p.n + '">' +
      '<div class="ph"><img loading="lazy" src="' + img(p.n) + '" alt="">' +
      '<span class="num">N° ' + p.n + '</span>' + (isDone(p.n) ? '<span class="done" title="Terminé">' + I.check + '</span>' : '') + '</div>' +
      '<p class="tt">' + esc(p.t) + '</p><p class="sub">' + p.p + ' pages</p></a>';
  }
  function poster(href, src, tag, title, sub, cls) {
    return '<a class="poster" href="' + href + '"><img loading="lazy" src="' + src + '" alt=""><span class="cap">' +
      '<span class="tag' + (cls ? ' ' + cls : '') + '">' + esc(tag) + '</span><b>' + esc(title) + '</b><small>' + esc(sub) + '</small></span></a>';
  }
  function shelf(title, sub, items, more, wide) {
    return '<section class="sec wrap"><div class="sec-head"><div><h2>' + esc(title) + '</h2>' + (sub ? '<p>' + esc(sub) + '</p>' : '') + '</div>' +
      (more ? '<a class="more" href="' + more + '">Tout voir</a>' : '') + '</div>' +
      '<div class="shelf"><button class="arrow prev" aria-label="Précédent">' + I.back + '</button>' +
      '<div class="rail' + (wide ? ' wide' : '') + '">' + items.join('') + '</div>' +
      '<button class="arrow next" aria-label="Suivant">' + I.chev + '</button></div></section>';
  }
  function wireShelves() {
    Array.prototype.forEach.call(app.querySelectorAll('.shelf'), function (sh) {
      var rail = sh.querySelector('.rail'), pv = sh.querySelector('.prev'), nx = sh.querySelector('.next');
      function upd() { pv.disabled = rail.scrollLeft < 8; nx.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8; }
      pv.onclick = function () { rail.scrollBy({ left: -rail.clientWidth * 0.85, behavior: 'smooth' }); };
      nx.onclick = function () { rail.scrollBy({ left: rail.clientWidth * 0.85, behavior: 'smooth' }); };
      rail.addEventListener('scroll', upd, { passive: true }); upd();
    });
  }
  function supportBlock() {
    if (!SUPPORT_EMAIL) return '';
    return '<section class="wrap"><div class="support"><div><h3>Besoin d’aide ?</h3><p>Une question sur un patron ou sur votre accès ? Écrivez-nous, nous vous répondons avec plaisir.</p></div>' +
      '<div class="btns"><a class="btn btn-primary" href="mailto:' + SUPPORT_EMAIL + '">Nous écrire</a><button class="btn btn-ghost" id="copyMail">Copier l’e-mail</button></div></div></section>';
  }
  function wireSupport() {
    var b = document.getElementById('copyMail'); if (!b) return;
    b.onclick = function () {
      var ok = function () { toast('E-mail copié : ' + SUPPORT_EMAIL); };
      if (navigator.clipboard) navigator.clipboard.writeText(SUPPORT_EMAIL).then(ok, ok); else ok();
    };
  }
  function nav() {
    var r = route()[0];
    var links = [['', 'Accueil'], ['patrons', 'Les patrons']];
    if (plan() === 'vip') links.push(['bonus', 'Bonus']);
    document.getElementById('topnav').innerHTML = plan() ? links.map(function (l, i) {
      var on = (l[0] === r) || (l[0] === '' && r === '') || (l[0] === 'bonus' && (r === 'bonus' || r === 'cours'));
      return '<a class="' + (on ? 'on' : '') + (i === 0 ? ' home' : '') + '" href="#/' + l[0] + '">' + l[1] + '</a>';
    }).join('') : '';
    document.getElementById('foot').innerHTML = '© ' + new Date().getFullYear() + ' Le Fil de Mamie · Votre accès est personnel, merci de ne pas partager votre lien.' +
      (SUPPORT_EMAIL ? ' · <a href="mailto:' + SUPPORT_EMAIL + '">' + SUPPORT_EMAIL + '</a>' : '');
  }

  // ================= páginas =================
  function pageGate(bad) {
    app.innerHTML = '<div class="gate"><div class="gate-card"><div class="brand-mark">F</div><h1>Votre atelier vous attend</h1>' +
      (bad ? '<p><b>Ce lien d’accès n’est pas valide.</b> Vérifiez que vous avez bien copié le lien complet reçu par e-mail.</p>' :
        '<p>Pour entrer dans votre espace, ouvrez le lien d’accès personnel reçu par e-mail après votre achat. Il vous connecte automatiquement.</p>') +
      (SUPPORT_EMAIL ? '<p style="font-size:14px">Vous ne trouvez pas l’e-mail ? Regardez dans les spams ou écrivez-nous à <a href="mailto:' + SUPPORT_EMAIL + '">' + SUPPORT_EMAIL + '</a>.</p>' : '') +
      '</div></div>';
  }

  function pageHome() {
    var pl = plan(), cs = comps();
    var last = byN[+get(K_LAST)];
    var first = P.filter(function (p) { return !isDone(p.n); })[0] || P[0];
    var go = last || first;
    var pct = Math.round(done.length / P.length * 100);
    var h = '';
    if (pl) {
      var badges = pl === 'vip' ? ['101 patrons en PDF', '4 bonus inclus', 'Accès à vie'] : ['101 patrons en PDF', 'Photos, diagrammes et mesures', 'Accès pendant 1 an'];
      h += '<section class="hero"><img class="hero-img" src="img/flow/hero-' + pl + '.webp" alt="La collection 101 Patrons de Sacs au Crochet" fetchpriority="high">' +
        '<div class="hero-in"><div class="hero-box"><span class="eyebrow">' + (pl === 'vip' ? 'Formule VIP Complète' : 'Formule Basique') + '</span>' +
        '<h1>Bienvenue dans <em>votre atelier</em></h1>' +
        '<p class="lead">Tous vos patrons de sacs au crochet, réunis au même endroit' + (pl === 'vip' ? ', avec vos bonus VIP.' : '.') + ' Choisissez un modèle et commencez dès ce soir.</p>' +
        '<div class="hero-badges">' + badges.map(function (b) { return '<span>' + esc(b) + '</span>'; }).join('') + '</div>' +
        '<div class="btns"><a class="btn btn-primary" href="#/patron/' + go.n + '">' + I.play + (last ? 'Continuer : ' + esc(last.t) : 'Commencer par le patron n° 1') + '</a>' +
        '<a class="btn btn-ghost" href="#/patrons">Voir les 101 patrons</a></div>' +
        '<div class="progress"><div class="progress-top"><span>Votre progression</span><span><b>' + done.length + '</b> sur ' + P.length + ' sacs terminés</span></div><div class="bar"><i style="width:' + Math.max(pct, 2) + '%"></i></div></div>' +
        '</div></div></section>';
      h += '<div class="wrap"><div class="welcome-note">' + I.spark + '<p><b>Comment ça marche ?</b> Choisissez un patron, lisez-le ici ou ouvrez-le dans Google Drive pour l’imprimer. Quand votre sac est fini, marquez-le comme terminé : votre progression s’enregistre sur cet appareil.</p></div></div>';
      var rec = getJ(K_RECENT, []).map(function (n) { return byN[n]; }).filter(Boolean);
      if (rec.length) h += shelf('Reprendre là où vous en étiez', '', rec.map(pcard));
      if (pl === 'vip') h += shelf('Vos bonus VIP', 'Inclus dans votre formule', BONUS.map(function (b) {
        return poster(b.id === 'cours' ? '#/cours' : '#/bonus/' + b.id, b.img, 'Bonus ' + b.n, b.titre, b.sub);
      }), null, true);
    } else {
      h += '<section class="wrap" style="padding-top:28px"><div class="sec-head"><div><h2>Vos compléments</h2><p>Pour retrouver aussi vos 101 patrons, ouvrez le lien de votre formule reçu par e-mail.</p></div></div></section>';
    }
    if (cs.length) h += shelf(pl ? 'Vos compléments' : '', pl ? 'Ajoutés à votre commande' : '', cs.map(function (c) {
      return poster('#/complement/' + c, COMPS[c].img, 'Complément', COMPS[c].titre, COMPS[c].sub, 'c');
    }), null, true);
    if (pl) {
      CATS.forEach(function (c) {
        var list = P.filter(function (p) { return p.c === c.id; });
        h += shelf(c.label, list.length + ' patrons · ' + c.sub, list.slice(0, 18).map(pcard), '#/patrons/' + c.id);
      });
    }
    h += supportBlock();
    app.innerHTML = h; wireShelves(); wireSupport();
  }

  function pageCatalogue(cat) {
    var q = '';
    app.innerHTML = '<section class="sec wrap"><a class="back" href="#/">' + I.back + 'Accueil</a>' +
      '<div class="sec-head"><div><h2 style="font-size:40px">Les 101 patrons</h2><p>' + done.length + ' terminés · touchez un patron pour l’ouvrir</p></div></div>' +
      '<div class="filters"><label class="search"><span class="sr">Rechercher</span>' + I.search + '<input id="q" type="search" placeholder="Rechercher un sac, un numéro…" autocomplete="off"></label>' +
      '<button class="chip" data-c="">Tous</button>' + CATS.map(function (c) { return '<button class="chip" data-c="' + c.id + '">' + esc(c.label) + '</button>'; }).join('') +
      '<button class="chip" data-c="todo">À faire</button><button class="chip" data-c="done">Terminés</button></div>' +
      '<div class="grid" id="grid"></div></section>';
    var grid = document.getElementById('grid'), inp = document.getElementById('q');
    function draw() {
      var nq = norm(q);
      var list = P.filter(function (p) {
        if (cat === 'done' && !isDone(p.n)) return false;
        if (cat === 'todo' && isDone(p.n)) return false;
        if (cat && cat !== 'done' && cat !== 'todo' && p.c !== cat) return false;
        return !nq || norm(p.t).indexOf(nq) !== -1 || String(p.n) === nq;
      });
      grid.innerHTML = list.length ? list.map(pcard).join('') : '<p class="empty">Aucun patron ne correspond à votre recherche.</p>';
      Array.prototype.forEach.call(app.querySelectorAll('.chip'), function (b) { b.classList.toggle('on', b.getAttribute('data-c') === (cat || '')); });
    }
    inp.oninput = function () { q = inp.value; draw(); };
    Array.prototype.forEach.call(app.querySelectorAll('.chip'), function (b) {
      b.onclick = function () { cat = b.getAttribute('data-c'); history.replaceState(null, '', '#/patrons' + (cat ? '/' + cat : '')); draw(); };
    });
    draw();
  }

  function pagePatron(n) {
    var p = byN[n]; if (!p) { location.hash = '#/patrons'; return; }
    touch(n);
    var i = P.indexOf(p), prev = P[i - 1], next = P[i + 1];
    var cat = CATS.filter(function (c) { return c.id === p.c; })[0];
    app.innerHTML = '<div class="wrap"><a class="back" href="#/patrons">' + I.back + 'Tous les patrons</a>' +
      '<div class="detail"><div class="media"><img src="' + img(n) + '" alt="' + esc(p.t) + '"></div><div>' +
      '<span class="eyebrow">Patron n° ' + n + ' sur ' + P.length + '</span><h1>' + esc(p.t) + '</h1>' +
      '<div class="meta"><span class="pill">' + esc(cat.label) + '</span><span class="pill">PDF de ' + p.p + ' pages</span><span class="pill">Photos, diagrammes et mesures</span></div>' +
      '<p class="desc">Le patron complet, pas à pas, avec la liste du matériel. Lisez-le ici, ou ouvrez-le dans Google Drive pour le télécharger et l’imprimer.</p>' +
      '<div class="btns"><button class="btn btn-primary" id="readBtn">' + I.book + 'Lire le patron</button>' +
      '<a class="btn btn-ghost" href="' + driveView(p.d) + '" target="_blank" rel="noopener">' + I.ext + 'Ouvrir dans Google Drive</a>' +
      '<a class="btn btn-ghost" href="' + driveDl(p.d) + '" target="_blank" rel="noopener">' + I.dl + 'Télécharger</a></div>' +
      '<div class="btns" style="margin-top:10px"><button class="btn ' + (isDone(n) ? 'btn-ok' : 'btn-ghost') + '" id="doneBtn">' + I.check + (isDone(n) ? 'Terminé' : 'Marquer comme terminé') + '</button></div>' +
      '<div class="tip">' + I.bulb + '<span>Sur téléphone, « Ouvrir dans Google Drive » est le plus confortable : vous pouvez zoomer sur les diagrammes et garder le patron hors ligne.</span></div>' +
      '</div></div><div id="viewer"></div>' +
      '<div class="pn">' + (prev ? '<a href="#/patron/' + prev.n + '"><img src="' + img(prev.n) + '" alt=""><span><small>Patron précédent</small><b>' + esc(prev.t) + '</b></span></a>' : '<span></span>') +
      (next ? '<a class="nx" href="#/patron/' + next.n + '"><span><small>Patron suivant</small><b>' + esc(next.t) + '</b></span><img src="' + img(next.n) + '" alt=""></a>' : '') + '</div></div>';
    document.getElementById('readBtn').onclick = function () {
      var v = document.getElementById('viewer');
      if (!v.innerHTML) v.innerHTML = '<div class="viewer"><div class="viewer-bar"><span>' + esc(p.t) + '</span><a href="' + driveView(p.d) + '" target="_blank" rel="noopener">Plein écran ↗</a></div><iframe src="' + drivePreview(p.d) + '" title="' + esc(p.t) + '" allow="autoplay"></iframe></div>';
      v.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.getElementById('doneBtn').onclick = function () { toggleDone(n); pagePatron(n); };
  }

  function pageBonusList() {
    app.innerHTML = '<section class="sec wrap"><a class="back" href="#/">' + I.back + 'Accueil</a><div class="sec-head"><div><h2 style="font-size:40px">Vos bonus VIP</h2><p>Inclus dans votre Formule VIP Complète</p></div></div>' +
      '<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">' + BONUS.map(function (b) {
        return poster(b.id === 'cours' ? '#/cours' : '#/bonus/' + b.id, b.img, 'Bonus ' + b.n, b.titre, b.sub);
      }).join('') + '</div></section>' + supportBlock();
    wireSupport();
  }

  function block(b) {
    if (b.tipo === 'lista') return '<ul>' + b.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (b.tipo === 'pasos') return '<ol>' + b.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>';
    if (b.tipo === 'consejo') return '<div class="conseil">' + I.bulb + '<div><b>Le conseil de Mamie</b>' + esc(b.texto) + '</div></div>';
    if (b.tipo === 'tabla') return '<div class="tbl"><table><thead><tr>' + b.columnas.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      b.filas.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
    return '';
  }
  function pageBonus(id) {
    var b = BONUS.filter(function (x) { return x.id === id; })[0], d = FM.bonus[id];
    if (!b || !d) { location.hash = '#/bonus'; return; }
    app.innerHTML = '<div class="wrap"><a class="back" href="#/bonus">' + I.back + 'Vos bonus</a>' +
      '<div class="detail"><div class="media cover"><img src="' + b.img + '" alt=""></div><div>' +
      '<span class="eyebrow">Bonus ' + b.n + ' · Formule VIP</span><h1>' + esc(b.titre) + '</h1><p class="desc">' + esc(d.resume) + '</p>' +
      '<div class="meta"><span class="pill">' + d.sections.length + ' chapitres</span><span class="pill">À lire sur téléphone ou ordinateur</span></div>' +
      '<div class="btns"><a class="btn btn-primary" href="#s1" id="startRead">' + I.book + 'Commencer la lecture</a></div></div></div>' +
      '<div class="article"><div class="toc">' + d.sections.map(function (s, i) { return '<a href="#s' + (i + 1) + '" data-s="' + (i + 1) + '">' + (i + 1) + '. ' + esc(s.titulo) + '</a>'; }).join('') + '</div>' +
      d.sections.map(function (s, i) {
        return '<section class="art-sec" id="s' + (i + 1) + '"><h2>' + esc(s.titulo) + '</h2>' + (s.resumen ? '<p class="res">' + esc(s.resumen) + '</p>' : '') + s.bloques.map(block).join('') + '</section>';
      }).join('') + '</div></div>';
    // âncoras sem mexer no roteador (hash)
    Array.prototype.forEach.call(app.querySelectorAll('a[href^="#s"]'), function (a) {
      a.onclick = function (e) { e.preventDefault(); var el = document.getElementById(a.getAttribute('href').slice(1)); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
    });
  }

  function pageCours(k) {
    var V = FM.videos; k = Math.max(0, Math.min(V.length - 1, isNaN(k) ? (+get(K_VLAST) || 0) : k));
    set(K_VLAST, String(k));
    var v = V[k];
    app.innerHTML = '<div class="wrap"><a class="back" href="#/bonus">' + I.back + 'Vos bonus</a>' +
      '<div class="sec-head" style="margin:6px 0 16px"><div><span class="eyebrow">Bonus 4 · Formule VIP</span><h2 style="font-size:40px;margin-top:8px">Cours vidéo de 12 modèles premium</h2><p>12 tutoriels vidéo en français, sélectionnés pour vous, du plus simple au plus élaboré.</p></div></div>' +
      '<div class="course"><div><div class="player"><iframe src="https://www.youtube-nocookie.com/embed/' + v.id + '?rel=0&modestbranding=1" title="' + esc(v.titre) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>' +
      '<div class="lesson-info"><span class="eyebrow">Modèle ' + (k + 1) + ' sur ' + V.length + ' · ' + esc(v.duree) + '</span><h1>' + esc(v.titre) + '</h1>' +
      '<p class="credit">Tutoriel vidéo de <a href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener">' + esc(v.chaine) + '</a> sur YouTube. Merci à la créatrice pour son travail !</p>' +
      '<div class="btns"><button class="btn ' + (vdone.indexOf(k) !== -1 ? 'btn-ok' : 'btn-ghost') + '" id="vDone">' + I.check + (vdone.indexOf(k) !== -1 ? 'Vu' : 'Marquer comme vu') + '</button>' +
      (k < V.length - 1 ? '<a class="btn btn-primary" href="#/cours/' + (k + 1) + '">Modèle suivant ' + I.chev + '</a>' : '') + '</div></div></div>' +
      '<aside class="lessons"><h3>Les 12 modèles</h3>' + V.map(function (x, j) {
        return '<a class="' + (j === k ? 'on' : '') + '" href="#/cours/' + j + '"><img loading="lazy" src="https://i.ytimg.com/vi/' + x.id + '/mqdefault.jpg" alt=""><span><small>Modèle ' + (j + 1) + ' · ' + esc(x.duree) + '</small><b>' + esc(x.titre) + '</b></span>' +
          (vdone.indexOf(j) !== -1 ? '<span class="ck">' + I.check.replace('<svg', '<svg width="18" height="18"') + '</span>' : '') + '</a>';
      }).join('') + '</aside></div></div>';
    document.getElementById('vDone').onclick = function () {
      if (vdone.indexOf(k) !== -1) vdone = vdone.filter(function (x) { return x !== k; }); else { vdone.push(k); toast('Bravo ! Modèle marqué comme vu'); }
      set(K_VDONE, JSON.stringify(vdone)); pageCours(k);
    };
  }

  function pageComp(id) {
    var c = COMPS[id]; if (!c || !has(id)) { location.hash = '#/'; return; }
    app.innerHTML = '<div class="wrap"><a class="back" href="#/">' + I.back + 'Accueil</a>' +
      '<div class="detail"><div class="media cover"><img src="' + c.img + '" alt=""></div><div>' +
      '<span class="eyebrow">Complément</span><h1>' + esc(c.titre) + '</h1><p class="desc">' + esc(c.desc) + '</p>' +
      '<div class="btns">' + c.folders.map(function (f, i) {
        return '<a class="btn ' + (i ? 'btn-ghost' : 'btn-primary') + '" href="' + folderUrl(f.id) + '" target="_blank" rel="noopener">' + I.ext + esc(f.label) + '</a>';
      }).join('') + '</div>' +
      '<div class="tip">' + I.bulb + '<span>Les fichiers s’ouvrent dans Google Drive : touchez un PDF pour le lire, ou utilisez le bouton de téléchargement en haut à droite pour l’enregistrer.</span></div></div></div>' +
      c.folders.map(function (f) {
        return '<div class="viewer folder"><div class="viewer-bar"><span>' + esc(f.label) + '</span><a href="' + folderUrl(f.id) + '" target="_blank" rel="noopener">Ouvrir dans Drive ↗</a></div>' +
          '<iframe loading="lazy" src="https://drive.google.com/embeddedfolderview?id=' + f.id + '#grid" title="' + esc(f.label) + '"></iframe></div>';
      }).join('') + '</div>';
  }

  // ================= roteador =================
  function route() { return location.hash.replace(/^#\/?/, '').split('/'); }
  var gateBad = false;
  function render() {
    nav();
    var r = route(), pl = plan();
    if (!pl && !comps().length) { pageGate(gateBad); return; }
    if (r[0] === 'complement') return pageComp(r[1]);
    if (!pl) return pageHome();
    if (r[0] === 'patrons') return pageCatalogue(r[1] || '');
    if (r[0] === 'patron') return pagePatron(+r[1]);
    if (r[0] === 'bonus' && pl === 'vip') return r[1] ? pageBonus(r[1]) : pageBonusList();
    if (r[0] === 'cours' && pl === 'vip') return pageCours(r[1] === undefined ? NaN : +r[1]);
    pageHome();
  }
  window.addEventListener('hashchange', function () {
    if (/^#s\d+$/.test(location.hash)) return;
    render(); window.scrollTo(0, 0);
  });
  var topbar = document.getElementById('topbar');
  window.addEventListener('scroll', function () { topbar.classList.toggle('solid', window.scrollY > 10); }, { passive: true });

  readKey().then(function (who) {
    if (who === 'bad') gateBad = true;
    else if (who && COMPS[who] && !plan()) location.hash = '#/complement/' + who;
    else if (who && COMPS[who]) location.hash = '#/complement/' + who;
    render();
  }, function () { render(); });
})();
