export interface Variant {
      id: number,
      product_id: number,
      title: string,
      price: string,
      sku: string,
      position: number,
      inventory_policy: string,
      compare_at_price: null,
      fulfillment_service: string,
      inventory_management: string,
      option1: string,
      option2: null,
      option3: null,
      created_at: string,
      updated_at: string,
      taxable: true,
      barcode: string,
      grams: number,
      image_id: number,
      weight: number,
      weight_unit: string,
      inventory_item_id: number,
      inventory_quantity: number,
      old_inventory_quantity: number,
      presentment_prices: [
        {
          price: {
            amount: string,
            currency_code: string
          },
          compare_at_price: null
        }
    ]
}