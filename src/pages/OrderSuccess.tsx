import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="p-12 text-center max-w-lg bg-card border-border">
        <div className="mb-6 flex justify-center">
          <CheckCircle2 className="h-20 w-20 text-secondary animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Order Placed Successfully!
        </h1>
        <p className="text-muted-foreground mb-2">
          Thank you for your purchase!
        </p>
        <p className="text-muted-foreground mb-8">
          Your Game Boy classics will be shipped soon. You'll receive a confirmation email shortly.
        </p>
        <Button
          onClick={() => navigate('/')}
          className="bg-[var(--gradient-primary)] hover:opacity-90"
          size="lg"
        >
          Continue Shopping
        </Button>
      </Card>
    </div>
  );
}
