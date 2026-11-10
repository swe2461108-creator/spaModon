import { getWoodCrafts } from "../services/woodCraftService.js";

export async function renderSearchPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="box">
      <h2 class="title is-4">Search Wood Crafts</h2>
      <p>Loading data...</p>
    </div>
  `;

  try {
    const woodCrafts = await getWoodCrafts();

    app.innerHTML = `
      <div class="box">
        <h2 class="title is-4">Search Wood Crafts</h2>
        <p class="mb-4">Loaded items: <strong>${woodCrafts.length}</strong></p>

        <ul>
          ${woodCrafts
            .map(
              (item) => `
                <li>
                  <strong>${item.craft_name}</strong>
                  (${item.craft_code}) - ${item.native_name} (${item.province})
                </li>
              `,
            )
            .join("")}
        </ul>
      </div>
    `;
  } catch (error) {
    app.innerHTML = `
      <div class="box">
        <h2 class="title is-4">Search Wood Crafts</h2>
        <p class="has-text-danger">Failed to load wood crafts data.</p>
      </div>
    `;

}
}