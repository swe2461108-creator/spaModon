import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../Layouts/pageLayout.js";

export function renderBooksPage() {
  const app = document.getElementById("app");
  app.innerHTML = renderPageLayout({
    id: "books",
    title: t("books.title"),
    content: `<p>${t("books.text")}</p>`,
  });
}