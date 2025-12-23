type Product = { id: string; name: string; price: number };

export type CartItem = {
  productId: string;
  name: string;
  unitPrice: number;
  qty: number;
};

export function buildCartItem(product: Product, qty = 1): CartItem {
  return {
    productId: product.id,
    name: product.name,
    unitPrice: product.price,
    qty,
  };
}

export function buildCart(items: CartItem[]) {
  return {
    items: items,
    updatedAt: Date.now()
  };
}
