import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../Layouts/pageLayout.js";

export function renderCartPage() {
  const app = document.getElementById("app");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let contentHtml = "";

  if (cart.length === 0) {
    contentHtml = `
      <div class="box has-text-centered py-6">
        <p class="is-size-5 has-text-grey">${t("cart.empty")}</p>
      </div>
    `;
  } else {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    contentHtml = `
      <div class="box">
        <div class="block">
          ${cart.map(item => `
            <div class="is-flex is-justify-content-space-between is-align-items-center py-3" style="border-bottom: 1px solid #eee;">
              <div>
                <p class="has-text-weight-bold">${item.name}</p>
                <p class="is-size-7 has-text-grey">${item.price}₮ x ${item.quantity || 1}</p>
              </div>
              <span class="has-text-weight-bold">${item.price * (item.quantity || 1)}₮</span>
            </div>
          `).join("")}
        </div>
        <div class="is-flex is-justify-content-space-between is-align-items-center pt-3">
          <span class="is-size-5 has-text-weight-bold">${t("cart.total")}:</span>
          <span class="is-size-4 has-text-danger has-text-weight-bold">${totalPrice}₮</span>
        </div>
        <button class="button is-primary is-fullwidth mt-4">${t("cart.checkout")}</button>
      </div>
    `;
  }

  app.innerHTML = renderPageLayout({
    id: "cart",
    title: t("cart.title"),
    content: contentHtml,
  });
}