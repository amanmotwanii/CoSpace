import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CreditCard, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PaymentPage({ params }) {
  return (
    <AppShell>
      <div className="flex flex-col items-center justify-center py-12">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="items-center text-center">
            <CreditCard className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl">Payment Gateway</CardTitle>
            <CardDescription>
              Securely complete your payment for booking ID: {params.bookingId}.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">
              This is a placeholder for the payment gateway integration. In a real application,
              you would integrate with a service like Stripe, PayPal, etc.
            </p>
            <div className="p-4 border border-dashed rounded-md">
              <p className="font-semibold">Payment Form Would Appear Here</p>
              <p className="text-sm text-muted-foreground">(e.g., credit card input fields)</p>
            </div>
            <div className="flex items-center justify-center text-green-600">
              <ShieldCheck className="h-5 w-5 mr-2" />
              <span>Your transaction will be secure.</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Simulate Successful Payment
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">Cancel and Return Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppShell>
  );
}
