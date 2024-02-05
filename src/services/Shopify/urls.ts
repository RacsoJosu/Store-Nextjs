import { envm } from "app/config/env";

export const shopifyUrls = {
  products: {
    all: `${envm.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`,
    getOne: (id: string) =>
      `${envm.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json?ids=${id}`,
  },
  collection: {
    all: `${envm.SHOPIFY_HOSTNAME}/admin/api/2024-01/smart_collections.json
    `,
    products: (id: string) =>
      `${envm.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${id}/products.json`,
  },
};
