import { t } from "../i18n/i18n.js";
// ✅ ЗӨВ (Бүгд жижиг p үсгээр):
import { renderPageLayout } from "../Layouts/pageLayout.js";

// ❌ БУРУУ (Энэ нь алдаа заалгана):
// import { renderPageLayout } from "../layouts/PageLayout.js";

export function renderOverviewPage() {
  const app = document.getElementById("app");

  const overviewContent = `
    <!-- Нүүр Баннер Хэсэг -->
    <section class="hero is-wood is-medium mb-6" style="background: linear-gradient(rgba(74, 46, 26, 0.85), rgba(74, 46, 26, 0.85)), url('./img/wood-pattern.jpg') center/cover; padding: 3rem 1.5rem; border-radius: 8px;">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1 mb-4" style="color: #ffffff; font-family: 'Georgia', serif;">МОДОН ГАР УРЛАЛ</h1>
          <p class="subtitle is-4 is-italic" style="color: #d8bc94;">"Монгол уламжлал • Орчин үеийн ур чадвар"</p>
          <p class="has-text-white is-size-5 mb-5">${t("overview.welcome")}</p>
          <a href="#/search" class="button is-warning is-medium has-text-weight-bold">
            <span class="icon"><i class="fas fa-store"></i></span>
            <span>${t("nav.search")}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Онцлох категорууд -->
    <div class="container mb-6">
      <div class="has-text-centered mb-5">
        <h2 class="title is-3" style="color: #4a2e1a;">Онцлох бүтээлүүд</h2>
        <div style="width: 80px; height: 3px; background-color: #d8bc94; margin: 0 auto;"></div>
      </div>

      <div class="columns is-multiline">
        <div class="column is-4">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="./img/item1.jpg" alt="Модон сийлбэр" onerror="this.src='https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=500'">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5" style="color: #4a2e1a;">Уламжлалт сийлбэр</p>
              <p class="subtitle is-6">Гараар сийлсэн байгалийн цэвэр модон бүтээгдэхүүнүүд.</p>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="./img/item2.jpg" alt="Модон тавилга" onerror="this.src='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=500'">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5" style="color: #4a2e1a;">Модон тавилга</p>
              <p class="subtitle is-6">Орчин үеийн болон уламжлалт хэв маяг бүхий тавилга.</p>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="./img/item3.jpg" alt="Бэлэг дурсгал" onerror="this.src='https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=500'">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5" style="color: #4a2e1a;">Бэлэг дурсгал</p>
              <p class="subtitle is-6">Эрүүл мэндэд ээлтэй, модон аяга, хэрэгсэл, гар урлал.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    id: "overview",
    title: t("overview.title"),
    content: overviewContent,
  });
}