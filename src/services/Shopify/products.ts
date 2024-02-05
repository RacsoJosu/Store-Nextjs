import { envm } from "app/config/env";
import { shopifyUrls } from "./urls";
import axios from "axios";

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

export const getProductById = async (id: string) => {
  try {
    const response = await axios.get(shopifyUrls.products.getOne(id), {
      headers: {
        "X-Shopify-Access-Token": envm.SHOPIFY_APY_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
