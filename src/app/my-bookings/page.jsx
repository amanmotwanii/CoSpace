import { AppShell } from '@/components/layout/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked } from 'lucide-react';

export default function MyBookingsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">My Bookings</h1>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center"><BookMarked className="mr-2 h-6 w-6 text-primary"/>Your Booked Spaces</CardTitle>
            <CardDescription>This is where your active and past bookings will be displayed.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Feature coming soon! You'll be able to see and manage all your coworking space bookings here.</p>
            {/* Placeholder for booking list */}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
