import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <Card className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
      <div className="flex gap-4">
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="text-primary font-bold mt-1">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-muted rounded-lg px-2 py-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 hover:bg-primary/20"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="font-semibold w-8 text-center">{item.quantity}</span>
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 hover:bg-primary/20"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="h-9 w-9 text-destructive hover:bg-destructive/20"
              onClick={() => onRemove(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-secondary">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </Card>
  );
}
