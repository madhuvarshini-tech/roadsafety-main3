/**
 * Safety Workshops TN — Main Application
 */
(function () {
  'use strict';

  const lang = () => I18N.currentLang;

  function localized(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang()] || obj.en || '';
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const locale = lang() === 'ta' ? 'ta-IN' : 'en-IN';
    return d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  }

  /* ── Mobile Navigation ── */
  const MobileNav = {
    toggle: null,
    menu: null,
    overlay: null,
    isOpen: false,

    init() {
      this.toggle = document.getElementById('menu-toggle');
      this.menu = document.getElementById('nav-mobile');
      this.overlay = document.getElementById('nav-overlay');
      if (!this.toggle || !this.menu) return;

      this.toggle.addEventListener('click', () => this.toggleMenu());
      this.overlay?.addEventListener('click', () => this.close());
      this.menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.close());
      });
      if (!this.keydownBound) {
        this.keydownBound = true;
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && this.isOpen) this.close();
        });
      }
    },

    toggleMenu() {
      this.isOpen ? this.close() : this.open();
    },

    open() {
      this.isOpen = true;
      this.menu.classList.add('open');
      this.overlay?.classList.add('visible');
      this.toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    },

    close() {
      this.isOpen = false;
      this.menu.classList.remove('open');
      this.overlay?.classList.remove('visible');
      this.toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  };

  /* ── Header scroll ── */
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── Language Switch ── */
  function initLanguage() {
    I18N.applyStaticTranslations();
    if (!window.__swtnLangBound) {
      window.__swtnLangBound = true;
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('#lang-switch');
        if (!btn) return;
        I18N.toggleLanguage();
        showToast(lang() === 'ta' ? I18N.t('alerts.langChangedTa') : I18N.t('alerts.langChanged'));
      });
      window.addEventListener('languageChanged', () => {
        if (typeof SITE_LAYOUT !== 'undefined') {
          SITE_LAYOUT.render();
        }
        MobileNav.init();
        renderAllDynamic();
      });
    }
  }

  /* ── Toast ── */
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  /* ── SVG Icons ── */
  const ICONS = {
    factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M5 20V8l4-3v15M13 20V4l6-3v19"/><path d="M9 12h1M9 16h1"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.5 1-3 1-5 2 1 4 3 4 6a4 4 0 01-8 0c0-1 .5-2 1.5-2.5z"/><path d="M12 22c-3 0-5-2-5-5 0-2 1.5-3.5 3-5 1 1.5 2 3 2 5 0 3-2 5-5 5z"/></svg>',
    flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6M10 3v6l-5 9a2 2 0 001.7 3h10.6a2 2 0 001.7-3l-5-9V3"/><path d="M8.5 16h7"/></svg>',
    'hard-hat': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a6 6 0 00-6-6h-1V9a3 3 0 00-6 0v1H8a6 6 0 00-6 6v2z"/></svg>',
    'heart-pulse': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"/><path d="M3.5 12h3l1.5-3 2 6 1.5-3h3"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    certificate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  /* ── Workshops Page (PDF-based B2B sectors) ── */
  function renderWorkshopsPage() {
    const grid = document.getElementById('workshops-page-grid');
    if (!grid || !SITE_DATA.workshopSectorKeys) return;

    const wp = (key) => I18N.t(`workshopPage.${key}`);

    grid.innerHTML = SITE_DATA.workshopSectorKeys.map((key, index) => {
      const sector = SITE_DATA.workshopSectors[key];
      if (!sector) return '';
      const icon = ICONS[SITE_DATA.workshopSectorIcons[key]] || ICONS.shield;

      const highlightsHtml = (sector.highlights || []).map(h => `
        <div class="workshop-highlight">
          <strong>${localized(h.title)}</strong>
          <p>${localized(h.desc)}</p>
        </div>
      `).join('');

      const focusHtml = (sector.focusAreas || []).map(f => `
        <div class="workshop-highlight">
          <strong>${localized(f.title)}</strong>
          <p>${localized(f.desc)}</p>
        </div>
      `).join('');

      let modulesHtml = '';
      if (sector.subsections) {
        modulesHtml = sector.subsections.map(sub => `
          <div class="workshop-subsection">
            <h4>${localized(sub.title)}</h4>
            <ul class="workshop-module-list">${sub.modules.map(m => `<li>${localized(m)}</li>`).join('')}</ul>
          </div>
        `).join('');
      } else if (sector.modules) {
        const modulesTitle = sector.focusAreas ? wp('interactiveModules') : wp('coreModules');
        modulesHtml = `
          <h4 class="workshop-section-label">${modulesTitle}</h4>
          <ul class="workshop-module-list">${sector.modules.map(m => `<li>${localized(m)}</li>`).join('')}</ul>
        `;
      }

      let roiHtml = '';
      if (sector.roiText) {
        roiHtml = `
          <div class="workshop-roi">
            <h4 class="workshop-section-label">${wp('roiImpact')}</h4>
            <p>${localized(sector.roiText)}</p>
          </div>
        `;
      }
      if (sector.roiMetrics) {
        roiHtml = `
          <div class="workshop-roi">
            <h4 class="workshop-section-label">${wp('roiMetrics')}</h4>
            <ul class="workshop-roi-list">${sector.roiMetrics.map(m => `<li>${localized(m)}</li>`).join('')}</ul>
          </div>
        `;
      }

      const engagementHtml = sector.engagement ? `
        <div class="workshop-engagement">
          <h4 class="workshop-section-label">${wp('engagement')}</h4>
          <p>${localized(sector.engagement)}</p>
        </div>
      ` : '';

      const sitemapHtml = (sector.sitemapItems || []).length ? `
        <div class="workshop-sitemap">
          <h4 class="workshop-section-label">${wp('sitemapArchitecture')}</h4>
          <div class="workshop-highlights">${sector.sitemapItems.map(item => `
            <div class="workshop-highlight">
              <strong>${localized(item.title)}</strong>
              <p>${localized(item.desc)}</p>
            </div>
          `).join('')}</div>
        </div>
      ` : '';

      const copyFrameHtml = sector.copywritingFrame ? `
        <div class="workshop-copy-frame">
          <h4 class="workshop-section-label">${wp('sampleCopywriting')}</h4>
          <p class="workshop-copy-text">${localized(sector.copywritingFrame)}</p>
        </div>
      ` : '';

      const audienceCardsHtml = (sector.audienceCards || []).length ? `
        <div class="workshop-audience-cards">
          <h4 class="workshop-section-label">${wp('targetAudienceCards')}</h4>
          <ul class="workshop-module-list">${sector.audienceCards.map(c => `<li>${localized(c)}</li>`).join('')}</ul>
        </div>
      ` : '';

      const templatesHtml = (sector.templates || []).length ? `
        <div class="workshop-templates">
          <h4 class="workshop-section-label">${wp('pitchTemplates')}</h4>
          ${sector.templates.map(t => `
            <div class="workshop-template">
              <h4>${localized(t.title)}</h4>
              <p class="workshop-template-subject">${localized(t.subject)}</p>
              <p class="workshop-template-body">${localized(t.body)}</p>
              ${t.bullets ? `<ul class="workshop-module-list">${t.bullets.map(b => `<li>${localized(b)}</li>`).join('')}</ul>` : ''}
              ${t.closing ? `<p class="workshop-template-closing">${localized(t.closing)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      ` : '';

      const audienceHtml = sector.audience ? `
        <p class="workshop-audience"><span class="workshop-audience-label">${wp('targetAudience')}:</span> ${localized(sector.audience)}</p>
      ` : '';

      const sectorNumber = index + 1;

      return `
        <article class="workshop-sector-card category-card card-3d reveal" style="--reveal-delay: ${index * 0.08}s">
          <div class="category-icon" aria-hidden="true">${icon}</div>
          <h3><span class="workshop-sector-number">${wp('sector')} ${sectorNumber}:</span> ${localized(sector.title)}</h3>
          ${audienceHtml}
          ${sector.intro ? `<p class="workshop-intro">${localized(sector.intro)}</p>` : ''}
          ${highlightsHtml ? `<div class="workshop-highlights">${highlightsHtml}</div>` : ''}
          ${focusHtml ? `<div class="workshop-highlights">${focusHtml}</div>` : ''}
          ${sitemapHtml}
          ${copyFrameHtml}
          ${audienceCardsHtml}
          ${modulesHtml}
          ${engagementHtml}
          ${roiHtml}
          ${templatesHtml}
          <a href="register.html" class="btn btn-primary btn-sm category-view-btn">${wp('requestTraining')}</a>
        </article>`;
    }).join('');

    initReveal();
    initCard3D();
  }

  function moduleLabel(item) {
    const text = localized(item);
    const splitAt = text.indexOf(':');
    return splitAt > -1 ? text.slice(0, splitAt).trim() : text;
  }

  function getSectorPreviewTags(sector, limit = 4) {
    const tags = [];
    if (sector.modules) {
      sector.modules.forEach(m => tags.push(moduleLabel(m)));
    } else if (sector.subsections) {
      sector.subsections.forEach(sub => sub.modules.forEach(m => tags.push(moduleLabel(m))));
    } else if (sector.highlights) {
      sector.highlights.forEach(h => tags.push(localized(h.title)));
    }
    return tags.slice(0, limit);
  }

  function getSectorPreviewDesc(sector) {
    if (sector.intro) return localized(sector.intro);
    if (sector.audience) return localized(sector.audience);
    return '';
  }

  /* ── Render Home Workshop Categories (PDF sectors 1–5) ── */
  function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;

    const keys = SITE_DATA.homeWorkshopSectorKeys || SITE_DATA.workshopSectorKeys.slice(0, 5);
    const sectorLabel = I18N.t('workshopPage.sector');

    grid.innerHTML = keys.map((key, index) => {
      const sector = SITE_DATA.workshopSectors[key];
      if (!sector) return '';
      const icon = ICONS[SITE_DATA.workshopSectorIcons[key]] || ICONS.shield;
      const tags = getSectorPreviewTags(sector).map(t => `<span class="category-tag">${t}</span>`).join('');
      const sectorNumber = index + 1;

      return `
        <article class="category-card card-3d reveal" style="--reveal-delay: ${index * 0.1}s">
          <div class="category-icon" aria-hidden="true">${icon}</div>
          <h3><span class="category-sector-number">${sectorLabel} ${sectorNumber}:</span> ${localized(sector.title)}</h3>
          <p>${getSectorPreviewDesc(sector)}</p>
          <div class="category-tags">${tags}</div>
          <a href="workshops.html" class="btn btn-outline btn-sm category-view-btn">${I18N.t('categories.viewDetails')}</a>
        </article>`;
    }).join('');

    initReveal();
    initCard3D();
  }

  /* ── Schedule Filters & List ── */
  function populateFilters() {
    const districtEl = document.getElementById('filter-district');
    const cityEl = document.getElementById('filter-city');
    const catEl = document.getElementById('filter-category');
    const dateEl = document.getElementById('filter-date');

    if (districtEl) {
      districtEl.innerHTML = `<option value="">${I18N.t('schedule.allDistricts')}</option>` +
        SITE_DATA.districtList.map(d =>
          `<option value="${d}">${I18N.t(`districts.${d}`)}</option>`
        ).join('');
    }

    if (cityEl) {
      const cities = [...new Set(SITE_DATA.workshops.map(w => w.city))];
      cityEl.innerHTML = `<option value="">${I18N.t('schedule.allCities')}</option>` +
        cities.map(c => {
          const w = SITE_DATA.workshops.find(x => x.city === c);
          const label = lang() === 'ta' ? w.cityTa : c;
          return `<option value="${c}">${label}</option>`;
        }).join('');
    }

    if (catEl) {
      catEl.innerHTML = `<option value="">${I18N.t('schedule.allCategories')}</option>` +
        SITE_DATA.categoryKeys.map(k => {
          const cat = I18N.t(`categories.${k}`);
          return `<option value="${k}">${cat.title}</option>`;
        }).join('');
    }

    if (dateEl) {
      const dates = [...new Set(SITE_DATA.workshops.map(w => w.date))].sort();
      dateEl.innerHTML = `<option value="">${I18N.t('schedule.allDates')}</option>` +
        dates.map(d => `<option value="${d}">${formatDate(d)}</option>`).join('');
    }
  }

  function filterWorkshops() {
    const district = document.getElementById('filter-district')?.value || '';
    const city = document.getElementById('filter-city')?.value || '';
    const category = document.getElementById('filter-category')?.value || '';
    const date = document.getElementById('filter-date')?.value || '';
    const search = (document.getElementById('filter-search')?.value || '').toLowerCase();

    let filtered = SITE_DATA.workshops.filter(w => {
      if (district && w.district !== district) return false;
      if (city && w.city !== city) return false;
      if (category && w.category !== category) return false;
      if (date && w.date !== date) return false;
      if (search) {
        const title = localized(w.title).toLowerCase();
        const venue = localized(w.venue).toLowerCase();
        if (!title.includes(search) && !venue.includes(search) && !w.city.toLowerCase().includes(search)) return false;
      }
      return true;
    });

    renderWorkshopList(filtered);
  }

  function initSchedule() {
    populateFilters();
    filterWorkshops();
    ['filter-district', 'filter-city', 'filter-category', 'filter-date', 'filter-search'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', filterWorkshops);
      document.getElementById(id)?.addEventListener('change', filterWorkshops);
    });
  }

  function renderHomeSchedulePreview() {
    const container = document.getElementById('home-schedule-preview');
    if (!container) return;
    const upcoming = [...SITE_DATA.workshops]
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 3);
    renderWorkshopList(upcoming, container);
  }

  function renderWorkshopList(workshops, listEl) {
    const list = listEl || document.getElementById('workshop-list');
    const info = document.getElementById('results-info');
    if (!list) return;

    if (info) {
      info.textContent = I18N.t('schedule.resultsCount').replace('{count}', workshops.length);
    }

    if (workshops.length === 0) {
      list.innerHTML = `<div class="no-results" role="status">${I18N.t('schedule.noResults')}</div>`;
      return;
    }

    list.innerHTML = workshops.map((w, index) => {
      const statusKey = w.availability || 'open';
      const statusClass = `status-${statusKey}`;
      const isFull = statusKey === 'full';
      const cat = I18N.t(`categories.${w.category}`);

      return `
        <article class="workshop-card card-3d reveal" style="--reveal-delay: ${index * 0.08}s" role="listitem">
          <div class="workshop-info">
            <span class="workshop-category">${cat.title}</span>
            <h3>${localized(w.title)}</h3>
            <div class="workshop-meta">
              <span>${ICONS.calendar} ${formatDate(w.date)}</span>
              <span>${ICONS.location} ${localized(w.venue)}</span>
              <span>${I18N.t('schedule.district')}: ${I18N.t(`districts.${w.district}`)}</span>
            </div>
          </div>
          <div class="workshop-actions">
            <span class="status-badge ${statusClass}">${I18N.t(`availability.${statusKey}`)}</span>
            <button type="button" class="btn btn-primary btn-sm ${isFull ? 'disabled' : ''}"
              data-register="${w.id}" ${isFull ? 'disabled' : ''}>
              ${I18N.t('schedule.register')}
            </button>
          </div>
        </article>`;
    }).join('');

    list.querySelectorAll('[data-register]').forEach(btn => {
      btn.addEventListener('click', () => {
        RegistrationModal.open(btn.dataset.register);
      });
    });
    initReveal();
  }

  /* ── Trainers ── */
  function renderTrainerCard(t, index) {
    const delay = index != null ? ` style="--reveal-delay: ${index * 0.08}s"` : '';
    if (t.featured) {
      const highlights = (t.highlights || []).map(h => `
        <li class="trainer-highlight">
          <strong>${localized(h.title)}</strong>
          <span>${localized(h.desc)}</span>
        </li>
      `).join('');

      return `
        <article class="trainer-card trainer-card--featured reveal"${delay}>
          <div class="trainer-featured-header">
            <div class="trainer-avatar trainer-avatar--lg" aria-hidden="true">${t.initials}</div>
            <div>
              <h3>${localized(t.name)}</h3>
              <p class="trainer-role">${localized(t.role)}</p>
              ${t.experience != null ? `<p class="trainer-exp">${I18N.t('trainers.experience')}: ${t.experience}+ ${I18N.t('trainers.years')}</p>` : ''}
            </div>
          </div>
          <p class="trainer-bio">${localized(t.bio)}</p>
          ${t.tagline ? `<p class="trainer-tagline">${localized(t.tagline)}</p>` : ''}
          <ul class="trainer-highlights">${highlights}</ul>
        </article>`;
    }

    return `
      <article class="trainer-card reveal"${delay}>
        <div class="trainer-avatar" aria-hidden="true">${t.initials}</div>
        <h3>${localized(t.name)}</h3>
        <p class="trainer-role">${localized(t.role)}</p>
        <p class="trainer-exp">${I18N.t('trainers.experience')}: ${t.experience} ${I18N.t('trainers.years')}</p>
        <p class="trainer-spec"><strong>${I18N.t('trainers.specialization')}:</strong> ${localized(t.specialization)}</p>
      </article>`;
  }

  function renderTrainers() {
    const grid = document.getElementById('trainers-grid');
    if (!grid) return;

    grid.innerHTML = SITE_DATA.trainers.map((t, i) => renderTrainerCard(t, i)).join('');
    initReveal();
  }

  /* ── Resources ── */
  function renderResources() {
    const grid = document.getElementById('resources-grid');
    if (!grid) return;

    grid.innerHTML = SITE_DATA.resourceKeys.map((key, index) => {
      const item = I18N.t(`resources.items.${key}`);
      return `
        <article class="resource-card reveal" style="--reveal-delay: ${index * 0.08}s">
          <div class="resource-icon" aria-hidden="true">${ICONS.file}</div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <button type="button" class="btn btn-outline btn-sm" onclick="alert('${lang() === 'ta' ? 'இந்த வளம் விரைவில் கிடைக்கும்.' : 'This resource will be available soon.'}')">
            ${I18N.t('resources.view')}
          </button>
        </article>`;
    }).join('');
    initReveal();
  }

  /* ── Certificates ── */
  function renderCertificates() {
    const grid = document.getElementById('certificates-grid');
    if (!grid || !SITE_DATA.certificateDocuments) return;

    grid.innerHTML = SITE_DATA.certificateDocuments.map((doc, index) => {
      const icon = ICONS[doc.icon] || ICONS.certificate;
      return `
        <article class="certificate-card resource-card reveal card-3d" style="--reveal-delay: ${index * 0.08}s" role="listitem">
          <div class="resource-icon" aria-hidden="true">${icon}</div>
          <h3>${localized(doc.title)}</h3>
          <p>${localized(doc.desc)}</p>
          <div class="certificate-actions">
            <a href="${doc.file}" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">${I18N.t('certificates.view')}</a>
            <a href="${doc.file}" class="btn btn-primary btn-sm" download>${I18N.t('certificates.download')}</a>
          </div>
        </article>`;
    }).join('');
    initReveal();
  }

  /* ── Testimonials ── */
  function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;

    grid.innerHTML = SITE_DATA.testimonials.map((t, index) => `
      <blockquote class="testimonial-card reveal" style="--reveal-delay: ${index * 0.1}s">
        <p class="testimonial-quote">${localized(t.quote)}</p>
        <footer class="testimonial-author">
          <div class="testimonial-avatar" aria-hidden="true">${t.initials}</div>
          <div class="testimonial-author-info">
            <strong>${localized(t.author)}</strong>
            <span>${localized(t.location)}</span>
          </div>
        </footer>
      </blockquote>
    `).join('');
    initReveal();
  }

  /* ── Stats Counter ── */
  const StatsCounter = {
    animated: false,

    init() {
      const section = document.getElementById('stats-section');
      if (!section) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.animate();
          }
        });
      }, { threshold: 0.3 });

      observer.observe(section);
      this.renderLabels();
    },

    renderLabels() {
      document.querySelectorAll('[data-stat-key]').forEach(el => {
        const key = el.dataset.statKey;
        el.textContent = I18N.t(`stats.${key}`);
      });
    },

    animate() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        SITE_DATA.stats.forEach(s => {
          const el = document.querySelector(`[data-stat-value="${s.key}"]`);
          if (el) el.textContent = s.value.toLocaleString() + s.suffix;
        });
        return;
      }

      SITE_DATA.stats.forEach(s => {
        const el = document.querySelector(`[data-stat-value="${s.key}"]`);
        if (!el) return;
        const target = s.value;
        const duration = 2000;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(target * eased);
          el.textContent = current.toLocaleString() + s.suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
  };

  /* ── Registration Modal ── */
  const RegistrationModal = {
    overlay: null,
    form: null,
    selectedWorkshop: null,

    init() {
      this.overlay = document.getElementById('register-modal');
      this.form = document.getElementById('register-form');
      if (!this.overlay) return;

      document.querySelectorAll('[data-open-register]').forEach(btn => {
        btn.addEventListener('click', () => this.open());
      });

      document.getElementById('modal-close')?.addEventListener('click', () => this.close());
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
      document.getElementById('register-cancel')?.addEventListener('click', () => this.close());

      this.form?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validate()) {
          this.showSuccess();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.overlay.classList.contains('open')) this.close();
      });
    },

    open(workshopId) {
      this.selectedWorkshop = workshopId || null;
      this.form?.reset();
      this.form?.querySelectorAll('input, select').forEach(el => { el.disabled = false; });
      const submitBtn = this.form?.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = false;
      this.clearErrors();
      document.getElementById('register-success')?.classList.remove('visible');
      this.overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      I18N.applyStaticTranslations();
      this.populateDistrictSelect();
      this.populateWorkshopSelect();
      if (workshopId) {
        const sel = document.getElementById('reg-workshop');
        if (sel) sel.value = workshopId;
      }
      document.getElementById('reg-name')?.focus();
    },

    close() {
      this.overlay.classList.remove('open');
      document.body.style.overflow = '';
    },

    populateDistrictSelect() {
      const sel = document.getElementById('reg-district');
      if (!sel) return;
      sel.innerHTML = `<option value="">${I18N.t('register.selectDistrict')}</option>` +
        SITE_DATA.districtList.map(d =>
          `<option value="${d}">${I18N.t(`districts.${d}`)}</option>`
        ).join('');
    },

    populateWorkshopSelect() {
      const sel = document.getElementById('reg-workshop');
      if (!sel) return;
      const sectorKeys = SITE_DATA.homeWorkshopSectorKeys || SITE_DATA.workshopSectorKeys || [];
      sel.innerHTML = `<option value="">${I18N.t('register.selectWorkshop')}</option>` +
        sectorKeys.map(key => {
          const sector = SITE_DATA.workshopSectors[key];
          if (!sector) return '';
          return `<option value="${key}">${localized(sector.title)}</option>`;
        }).join('');
      if (this.selectedWorkshop) sel.value = this.selectedWorkshop;
    },

    validate() {
      this.clearErrors();
      let valid = true;

      const fields = [
        { id: 'reg-name', rule: 'required' },
        { id: 'reg-email', rule: 'email' },
        { id: 'reg-mobile', rule: 'mobile' },
        { id: 'reg-org', rule: 'required' },
        { id: 'reg-district', rule: 'district' },
        { id: 'reg-workshop', rule: 'workshop' }
      ];

      fields.forEach(({ id, rule }) => {
        const el = document.getElementById(id);
        const group = el?.closest('.form-group');
        if (!el || !group) return;

        const val = el.value.trim();
        let error = '';

        if (rule === 'required' && !val) error = I18N.t('register.errors.required');
        if (rule === 'email') {
          if (!val) error = I18N.t('register.errors.required');
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) error = I18N.t('register.errors.email');
        }
        if (rule === 'mobile') {
          if (!val) error = I18N.t('register.errors.required');
          else if (!/^[6-9]\d{9}$/.test(val.replace(/\s/g, ''))) error = I18N.t('register.errors.mobile');
        }
        if (rule === 'district' && !val) error = I18N.t('register.errors.district');
        if (rule === 'workshop' && !val) error = I18N.t('register.errors.workshop');

        if (error) {
          group.classList.add('error');
          group.querySelector('.form-error').textContent = error;
          valid = false;
        }
      });

      return valid;
    },

    clearErrors() {
      this.form?.querySelectorAll('.form-group').forEach(g => {
        g.classList.remove('error');
        g.querySelector('.form-error').textContent = '';
      });
    },

    showSuccess() {
      const successEl = document.getElementById('register-success');
      if (successEl) {
        successEl.textContent = I18N.t('register.success');
        successEl.classList.add('visible');
      }
      this.form.querySelectorAll('input, select').forEach(el => {
        if (el.type !== 'button' && el.type !== 'submit') el.disabled = true;
      });
      this.form.querySelector('[type="submit"]').disabled = true;
      setTimeout(() => this.close(), 3000);
    }
  };

  /* ── Contact Form ── */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const WHATSAPP_ENQUIRY = '919962086663';

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const name = document.getElementById('contact-name')?.value.trim() || '';
      const company = document.getElementById('contact-company')?.value.trim() || '';
      const phone = document.getElementById('contact-phone')?.value.trim() || '';
      const email = document.getElementById('contact-email')?.value.trim() || '';
      const location = document.getElementById('contact-location')?.value.trim() || '';
      const requirement = document.getElementById('contact-requirement')?.value.trim() || '';
      const message = document.getElementById('contact-message')?.value.trim() || '';

      const text = [
        'New Training Enquiry',
        '',
        `Full Name: ${name}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Location: ${location}`,
        `Training Requirement: ${requirement}`,
        `Message: ${message}`
      ].join('\n');

      const url = `https://wa.me/${WHATSAPP_ENQUIRY}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  /* ── Scroll Reveal ── */
  function initReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  /* ── Legal Page Content ── */
  function renderLegalPage(type) {
    const container = document.getElementById('legal-sections');
    if (!container || !type) return;

    const data = I18N.t(type);
    container.innerHTML = data.sections.map(s => `
      <section class="legal-section">
        <h2>${s.heading}</h2>
        <p>${s.body}</p>
      </section>
    `).join('');
  }

  /* ── Register Page Form ── */
  function initRegisterPage() {
    const form = document.getElementById('register-page-form');
    if (!form) return;

    const workshopSelect = document.getElementById('rp-workshop');
    const locationSelect = document.getElementById('rp-location');
    if (workshopSelect) {
      const sectorKeys = SITE_DATA.homeWorkshopSectorKeys || SITE_DATA.workshopSectorKeys || [];
      workshopSelect.innerHTML = `<option value="">${I18N.t('register.selectWorkshop')}</option>` +
        sectorKeys.map(key => {
          const sector = SITE_DATA.workshopSectors[key];
          if (!sector) return '';
          return `<option value="${key}">${localized(sector.title)}</option>`;
        }).join('');
    }
    if (locationSelect) {
      locationSelect.innerHTML = `<option value="">${I18N.t('schedule.allDistricts')}</option>` +
        SITE_DATA.districtList.map(d =>
          `<option value="${d}">${I18N.t(`districts.${d}`)}</option>`
        ).join('');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('register-page-success');
      if (success) {
        success.textContent = I18N.t('register.success');
        success.classList.add('visible');
      }
      form.reset();
      setTimeout(() => success?.classList.remove('visible'), 6000);
    });
  }

  /* ── Subtle 3D card tilt (desktop) ── */
  function initCard3D() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    document.querySelectorAll('.card-3d').forEach(card => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = '1';
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-2px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ── Render All Dynamic Content ── */
  function renderAllDynamic() {
    I18N.applyStaticTranslations();
    renderCategories();
    renderWorkshopsPage();
    populateFilters();
    filterWorkshops();
    renderHomeSchedulePreview();
    renderTrainers();
    renderResources();
    renderCertificates();
    renderTestimonials();
    StatsCounter.renderLabels();
    RegistrationModal.populateDistrictSelect();
    RegistrationModal.populateWorkshopSelect();
    renderLegalPage(document.body.dataset.legalPage);
    initCard3D();
  }

  /* ── Init ── */
  function init() {
    I18N.init();
    if (typeof SITE_LAYOUT !== 'undefined') {
      SITE_LAYOUT.render();
    }
    MobileNav.init();
    initHeader();
    initLanguage();
    renderCategories();
    renderWorkshopsPage();
    initSchedule();
    renderHomeSchedulePreview();
    renderTrainers();
    renderResources();
    renderCertificates();
    renderTestimonials();
    StatsCounter.init();
    RegistrationModal.init();
    initContactForm();
    initRegisterPage();
    renderLegalPage(document.body.dataset.legalPage);
    initReveal();
    initCard3D();

    window.RegistrationModal = RegistrationModal;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
