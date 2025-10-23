import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Store } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export function Header() {
  const { cartCount } = useCart();
  const location = useLocation();

  const getHeaderContent = () => {
    if (location.pathname === '/cart') {
      return (
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Your Cart</h1>
          <div className="w-24" />
        </div>
      );
    }

    if (location.pathname === '/checkout') {
      return (
        <div className="flex items-center justify-between">
          <Link to="/cart">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Cart
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Checkout</h1>
          <div className="w-24" />
        </div>
      );
    }

    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Store className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Game Boy Classics
          </h1>
        </div>
        <Link to="/cart">
          <Button variant="outline" size="sm" className="gap-2 relative">
            <ShoppingCart className="h-4 w-4" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        {getHeaderContent()}
      </div>
    </header>
  );
}
