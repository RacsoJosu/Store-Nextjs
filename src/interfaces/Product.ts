import { Variant } from "./Variants";

export interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  handle: string;
  templetate_suffix: string;
  published_scope: string;
  status: string;
  tags: string;
  admin_graphql_api_id: string;
  variants: Array<Variant>;
  options: Array<any>;
  images: Array<any>;
  image: {
    id: number;
    all: string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    heigt: number;
    src: string;
    variants_ids: number[];
  };
}
