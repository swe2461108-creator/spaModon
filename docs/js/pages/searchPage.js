import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../Layouts/pageLayout.js";

export function renderSearchPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "search",
    title: t("search.title"),
    content: `<p>${t("search.text")}</p>`,
  });
}