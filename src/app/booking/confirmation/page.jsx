
"use client";

import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle, CreditCard, Home, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const spaceName = searchParams.get('spaceName');
  const date = searchParams.get('date');
  const people = searchParams.get('people');
  const total = searchParams.get('total');

  return (
    <Card className="w-full max-w-lg shadow-xl">
      <CardHeader className="items-center text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <CardTitle className="text-3xl">Booking Request Received!</CardTitle>
        <CardDescription className="text-lg">
          Your request for {spaceName || 'the space'} has been successfully submitted.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {spaceName && <p><strong>Space:</strong> {spaceName}</p>}
        {date && <p><strong>Date:</strong> {new Date(date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>}
        {people && <p><strong>Number of People:</strong> {people}</p>}
        {total && <p><strong>Estimated Total:</strong> ₹{parseFloat(total).toFixed(2)}</p>}
        
        <div className="pt-4">
          <h3 className="font-semibold mb-2 text-lg">Next Steps:</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>You will receive an email confirmation shortly.</li>
            <li>For corporate bookings, our team may contact you for further details.</li>
            <li>Payment processing will be handled separately (placeholder for payment gateway).</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 pt-6">
        <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/payment/placeholder"> {/* Assuming bookingId would be passed here in real app */}
            <CreditCard className="mr-2 h-4 w-4" /> Proceed to Payment (Placeholder)
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Back to Spaces
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ConfirmationFallback() {
  return (
    <Card className="w-full max-w-lg shadow-xl">
      <CardHeader className="items-center text-center">
        <Loader2 className="h-16 w-16 text-muted-foreground animate-spin mb-4" />
        <CardTitle className="text-3xl">Loading Confirmation...</CardTitle>
        <CardDescription className="text-lg">
          Please wait while we retrieve your booking details.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">This shouldn't take long.</p>
      </CardContent>
    </Card>
  )
}

export default function BookingConfirmationPage() {
  return (
    <AppShell>
      <div className="flex flex-col items-center justify-center py-12">
        <Suspense fallback={<ConfirmationFallback />}>
          <ConfirmationContent />
        </Suspense>
      </div>
    </AppShell>
  );
}
