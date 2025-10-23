import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-12 text-center max-w-md bg-card border-border">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any games yet
          </p>
          <Button
            id="start-shopping-btn"
            onClick={() => navigate('/')}
            className="bg-[var(--gradient-primary)] hover:opacity-90"
          >
            Start Shopping
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
          <div className="lg:col-span-1">
            <Card className="p-6 bg-card border-border sticky top-24">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-secondary font-semibold">FREE</span>
                </div>
                <div className="h-px bg-border my-4" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <Button
                id="proceed-to-checkout-btn"
                onClick={() => navigate('/checkout')}
                className="w-full bg-[var(--gradient-primary)] hover:opacity-90 text-lg py-6"
              >
                Proceed to Checkout
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
