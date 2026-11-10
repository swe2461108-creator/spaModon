import { t, toggleLanguage, getCurrentLanguage } from "../i18n/i18n.js";

// Сагсан доторх барааны тоог авах (жишээ нь localStorage-оос авч болно)
export function getCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
}

export function renderNavbar() {
  const currentLang = getCurrentLanguage();
  const cartCount = getCartCount();

  return `
    <header class="app-sticky app-shadow">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item has-text-weight-bold is-uppercase app-logo" href="#/overview">
              <figure class="image"><img src="./img/icon/icon.png" alt="logo" /></figure>
              <p><span>${t("nav.brandSpan")}</span> ${t("nav.brand")}</p>
            </a>
            <a class="navbar-burger" role="button" aria-expanded="false" data-target="topNavbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu has-text-weight-semibold has-text-centered" id="topNavbar">
            <div class="navbar-start app-top-navbar-right">
              <a class="navbar-item" href="#/overview">
                <span class="icon has-text-warning"><i class="fas fa-circle-info"></i></span>
                <span>${t("nav.overview")}</span>
              </a>
              <a class="navbar-item" href="#/search">
                <span class="icon has-text-primary"><i class="fas fa-search"></i></span>
                <span>${t("nav.search")}</span>
              </a>
              <a class="navbar-item" href="#/calculation">
                <span class="icon has-text-link"><i class="fas fa-calculator"></i></span>
                <span>${t("nav.calculation")}</span>
              </a>
              <a class="navbar-item" href="#/books">
                <span class="icon has-text-info"><i class="fas fa-book"></i></span>
                <span>${t("nav.books")}</span>
              </a>
              <a class="navbar-item" href="#/contact">
                <span class="icon has-text-danger"><i class="fas fa-address-card"></i></span>
                <span>${t("nav.contact")}</span>
              </a>
            </div>
            <div class="navbar-end is-flex is-align-items-center" style="gap: 10px;">
              <!-- Сагсны хэсэг -->
              <a class="navbar-item cart-icon-wrapper" href="#/cart" id="cartBtn">
                <span class="icon is-medium">
                  <i class="fas fa-shopping-cart fa-lg"></i>
                </span>
                <span class="cart-badge" id="cartCount">${cartCount}</span>
              </a>

              <!-- Хэл солих товч -->
              <a class="navbar-item button is-light is-small" href="#" id="langToggle">
                <span class="icon"><i class="fas fa-globe"></i></span>
                <span>${t("nav.language")} (${currentLang.toUpperCase()})</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}

export function initNavbar() {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("topNavbar");
  const languageToggle = document.getElementById("langToggle");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
      const isExpanded = burger.classList.contains("is-active");
      burger.setAttribute("aria-expanded", String(isExpanded));
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleLanguage();
      window.location.reload();
    });
  }
}

export function mountNavbar(root) {
  if (!root) return;
  root.innerHTML = renderNavbar();
  initNavbar();
}

// Сагсанд бараа нэмэгдэхэд тоог динамикаар шинэчлэх функц
export function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (badge) {
    badge.textContent = getCartCount();
  }
}