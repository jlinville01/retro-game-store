import { buildCart, CartItem } from "../../factories/cart.factory";

export async function seedCart(items: CartItem[]) {
  const cart = buildCart(items);

  await browser.url("http://localhost:8080/");
  await browser.execute((cartPayload) => {
    localStorage.setItem("cart", JSON.stringify(cartPayload));
  }, cart);

  await browser.refresh();
}
