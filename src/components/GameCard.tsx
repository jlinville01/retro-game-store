import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { Check } from 'lucide-react';

interface GameCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function GameCard({ id, title, price, image }: GameCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 bg-[var(--gradient-card)] border-border/50">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <Button
            onClick={handleAddToCart}
            disabled={added}
            className="bg-[var(--gradient-primary)] hover:opacity-90 transition-opacity"
            size="sm"
          >
            {added ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Added!
              </>
            ) : (
              'Add to Cart'
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}
