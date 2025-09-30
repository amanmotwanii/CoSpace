import { AppShell } from '@/components/layout/AppShell';
import { SpaceDetail } from '@/components/spaces/SpaceDetail';
import { BookingForm } from '@/components/booking/BookingForm';
import { mockSpaces } from '@/lib/mock-data';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// This function would typically fetch data from a DB
async function getSpaceBySlug(slug) {
  return mockSpaces.find(space => space.slug === slug);
}

export default async function SpacePage({ params }) {
  const space = await getSpaceBySlug(params.slug);

  if (!space) {
    return (
      <AppShell>
        <div className="text-center py-10">
          <Alert variant="destructive" className="max-w-lg mx-auto">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Space Not Found</AlertTitle>
            <AlertDescription>
              The coworking space you're looking for doesn't exist or has been moved.
            </AlertDescription>
          </Alert>
          <Button asChild variant="link" className="mt-4">
            <Link href="/">Go back to spaces</Link>
          </Button>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <SpaceDetail space={space} />
        </div>
        <div>
          <BookingForm space={space} />
        </div>
      </div>
    </AppShell>
  );
}

export async function generateStaticParams() {
  return mockSpaces.map(space => ({
    slug: space.slug,
  }));
}
