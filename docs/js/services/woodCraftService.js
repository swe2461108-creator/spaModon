import { DATA_MODE, LOCAL_WOOD_CRAFTS_URL, API_WOOD_CRAFTS_URL } from "../config.js";

let woodCraftCache = null;

export async function getWoodCrafts() {
  if (woodCraftCache) {
    return woodCraftCache;
  }

  const url = DATA_MODE === "api" ? API_WOOD_CRAFTS_URL : LOCAL_WOOD_CRAFTS_URL;
 

  if (!response.ok) {
    throw new Error("Failed to load wood crafts data");
  }

  const data = await response.json();
  woodCraftCache = data;
  return data;
}