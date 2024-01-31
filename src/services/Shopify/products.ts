import { envm } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": envm.SHOPIFY_APY_KEY,
      }),
    });

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log({ error });
  }
};


