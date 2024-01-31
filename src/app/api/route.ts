import { getProducts } from "app/services/Shopify/products";

export async function GET() {
  try {
    const products = await getProducts();

    return Response.json({ products });
  } catch (error) {
    console.log(error);
  }
}
