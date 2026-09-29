/**
 * Safety Workshops TN — Shared layout (header, footer, modals)
 */
const SITE_LAYOUT = {
  nav: [
    { page: 'home', href: 'index.html', labelKey: 'nav.home', shortKey: null },
    { page: 'workshops', href: 'workshops.html', labelKey: 'nav.workshops', shortKey: 'nav.workshopsShort' },
    { page: 'trainers', href: 'trainers.html', labelKey: 'nav.trainers', shortKey: 'nav.trainersShort' },
    { page: 'certificates', href: 'certificates.html', labelKey: 'nav.certificates', shortKey: 'nav.certificatesShort' },
    { page: 'about', href: 'about.html', labelKey: 'nav.about', shortKey: 'nav.aboutShort' },
    { page: 'contact', href: 'contact.html', labelKey: 'nav.contact', shortKey: null }
  ],

  currentPage() {
    return document.body.dataset.page || 'home';
  },

  t(key) {
    return typeof I18N !== 'undefined' ? I18N.t(key) : key;
  },

  navLink(item, active) {
    const cls = active ? ' class="active"' : '';
    const isTa = typeof I18N !== 'undefined' && I18N.currentLang === 'ta';
    if (item.shortKey && isTa) {
      return `<a href="${item.href}"${cls}><span data-i18n="${item.shortKey}">${this.t(item.shortKey)}</span></a>`;
    }
    if (item.shortKey) {
      return `<a href="${item.href}"${cls}><span class="nav-label-full" data-i18n="${item.labelKey}">${this.t(item.labelKey)}</span><span class="nav-label-short" data-i18n="${item.shortKey}">${this.t(item.shortKey)}</span></a>`;
    }
    return `<a href="${item.href}"${cls}><span data-i18n="${item.labelKey}">${this.t(item.labelKey)}</span></a>`;
  },

  renderHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    const active = this.currentPage();
    const desktopNav = this.nav
      .map(n => this.navLink(n, n.page === active))
      .join('');
    const mobileNav = this.nav.map(n => {
      const cls = n.page === active ? ' class="active"' : '';
      return `<a href="${n.href}"${cls} data-i18n="${n.labelKey}">${this.t(n.labelKey)}</a>`;
    }).join('');

    el.innerHTML = `
      <header class="site-header" role="banner">
        <div class="container header-inner">
          <a href="index.html" class="logo-link" aria-label="Road Minded Safety Solutions — Home">
            <img src="assets/images/logo-cropped.png" alt="Road Minded Safety Solutions — Drive Smart. Reduce Accidents." class="site-logo" width="140" height="56" onerror="this.onerror=null;this.src='assets/images/logo.jpg';">
          </a>
          <nav class="nav-desktop" aria-label="Main navigation">${desktopNav}</nav>
          <div class="header-actions">
            <button type="button" id="lang-switch" class="lang-switch" aria-label="Switch language" title="Switch language">தமிழ்</button>
            <div class="header-cta">
              <a href="register.html" class="btn btn-outline btn-sm btn-book" data-i18n="nav.bookInPlant">Book In-Plant Training</a>
              <a href="register.html" class="btn btn-primary btn-sm btn-register">
                <span class="nav-label-full" data-i18n="nav.register">Register for Workshop</span>
                <span class="nav-label-short" data-i18n="nav.registerShort">Register</span>
              </a>
            </div>
            <button type="button" id="menu-toggle" class="menu-toggle" aria-expanded="false" aria-controls="nav-mobile" aria-label="Open navigation menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
      <div id="nav-overlay" class="nav-overlay" aria-hidden="true"></div>
      <nav id="nav-mobile" class="nav-mobile" aria-label="Mobile navigation">
        ${mobileNav}
        <div class="nav-mobile-actions">
          <a href="register.html" class="btn btn-primary" data-i18n="nav.register">Register for Workshop</a>
          <a href="register.html" class="btn btn-outline" data-i18n="nav.bookInPlant">Book In-Plant Training</a>
        </div>
      </nav>`;
  },

  renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    const links = this.nav.map(n =>
      `<li><a href="${n.href}" data-i18n="${n.labelKey}">${this.t(n.labelKey)}</a></li>`
    ).join('');

    el.innerHTML = `
      <footer class="site-footer" role="contentinfo">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="footer-logo-link">
                <img src="assets/images/logo-cropped.png" alt="Road Minded Safety Solutions" class="footer-logo" width="130" height="54" onerror="this.onerror=null;this.src='assets/images/logo.jpg';">
              </a>
              <p class="footer-initiative" data-i18n="footer.tagline">Tamil Nadu Safety & Compliance Initiative</p>
              <p data-i18n="footer.disclaimer">Safety training aligned with applicable guidelines. Not an official government website.</p>
            </div>
            <div class="footer-col">
              <h4 data-i18n="footer.emergency">Emergency Contacts</h4>
              <ul>
                <li class="footer-emergency">
                  <span data-i18n="footer.helpline">Safety Helpline</span>
                  <strong data-i18n="footer.helplineNumber">1077 — State Emergency</strong>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 data-i18n="footer.quickLinks">Quick Links</h4>
              <ul>${links}</ul>
            </div>
            <div class="footer-col">
              <h4 data-i18n="footer.legal">Legal</h4>
              <ul>
                <li><a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a></li>
                <li><a href="terms.html" data-i18n="footer.terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span data-i18n-copyright></span>
            <p class="footer-developer">
              Developed By <a href="https://www.mintxsolutions.com" target="_blank" rel="noopener noreferrer">MintX Solutions</a>
            </p>
          </div>
        </div>
      </footer>`;
  },

  renderModals() {
    const el = document.getElementById('site-modals');
    if (!el) return;
    el.innerHTML = `
      <div id="register-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="register-title">
        <div class="modal">
          <div class="modal-header">
            <div>
              <h2 id="register-title" data-i18n="register.title">Workshop Registration</h2>
              <p class="modal-subtitle" data-i18n="register.subtitle">Complete the form below to register for your selected workshop.</p>
            </div>
            <button type="button" id="modal-close" class="modal-close" aria-label="Close registration form">&times;</button>
          </div>
          <div class="modal-body">
            <div id="register-success" class="form-success" role="status"></div>
            <form id="register-form" novalidate>
              <div class="form-group">
                <label for="reg-name"><span data-i18n="register.fullName">Full Name</span> <span class="required" aria-hidden="true">*</span></label>
                <input type="text" id="reg-name" autocomplete="name" required>
                <span class="form-error" role="alert"></span>
              </div>
              <div class="form-group">
                <label for="reg-email"><span data-i18n="register.email">Email Address</span> <span class="required" aria-hidden="true">*</span></label>
                <input type="email" id="reg-email" autocomplete="email" required>
                <span class="form-error" role="alert"></span>
              </div>
              <div class="form-group">
                <label for="reg-mobile"><span data-i18n="register.mobile">Mobile Number</span> <span class="required" aria-hidden="true">*</span></label>
                <input type="tel" id="reg-mobile" autocomplete="tel" inputmode="numeric" pattern="[6-9][0-9]{9}" required>
                <span class="form-error" role="alert"></span>
              </div>
              <div class="form-group">
                <label for="reg-org"><span data-i18n="register.organization">Organization / Company</span> <span class="required" aria-hidden="true">*</span></label>
                <input type="text" id="reg-org" autocomplete="organization" required>
                <span class="form-error" role="alert"></span>
              </div>
              <div class="form-group">
                <label for="reg-district"><span data-i18n="register.district">District</span> <span class="required" aria-hidden="true">*</span></label>
                <select id="reg-district" required></select>
                <span class="form-error" role="alert"></span>
              </div>
              <div class="form-group">
                <label for="reg-workshop"><span data-i18n="register.workshopDate">Selected Workshop Date</span> <span class="required" aria-hidden="true">*</span></label>
                <select id="reg-workshop" required></select>
                <span class="form-error" role="alert"></span>
              </div>
              <div class="modal-actions">
                <button type="button" id="register-cancel" class="btn btn-outline" data-i18n="register.cancel">Cancel</button>
                <button type="submit" class="btn btn-primary" data-i18n="register.submit">Submit Registration</button>
              </div>
            </form>
            <p class="form-alt-link"><a href="register.html" data-i18n="register.fullFormLink">Use full registration form</a></p>
          </div>
        </div>
      </div>`;
  },

  render() {
    this.renderHeader();
    this.renderFooter();
    this.renderModals();
  }
};
