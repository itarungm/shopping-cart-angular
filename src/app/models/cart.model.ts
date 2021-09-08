export class Cart{
    success: number;
    message: string;
    data:Details;
}

export class Details{
slug: string;
    customer_id: string;
    updated_at: string;
    products: Products[]
    products_signature: string;
    products_length: number
}

export class Products{
        slug: string;
        order_id: string;
        dispatch_id: string;
        product_id: string;
        brand: string;
        title: string;
        photo: string;
        quantity: number;
        size: number;
        add_ons: AddOns[];
        symbol: string;
        final_sale_price: number;
        original_sale_price: number;
        base_currency_original_sale_price: number;
        base_currency_final_sale_price: number;
        sale_discount: number;
        weight: number;
        expected_shipping_days: number;
        expected_shipping: string;
        delivery_owner: string;
        delivery_process: string;
        internal_status: string;
        customer_status: string;
        invoice: number;
        available_quantity: number;
        available: boolean
}

export class AddOns{
          cost: number;
          name: string;
          base_cost: number
}