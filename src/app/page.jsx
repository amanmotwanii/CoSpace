import { AppShell } from '@/components/layout/AppShell';
import { SpaceList } from '@/components/spaces/SpaceList';
import { mockSpaces } from '@/lib/mock-data'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <section className="text-center py-12 bg-secondary rounded-lg shadow">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Find Your Perfect Workspace
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Discover and book inspiring coworking spaces tailored to your needs, whether you're an individual or a growing team.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#available-spaces">Explore Spaces</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ai-suggest-location">Get AI Suggestion</Link>
            </Button>
          </div>
        </section>
        
        <section id="available-spaces" className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-center">Available Coworking Spaces</h2>
          <SpaceList spaces={mockSpaces} />
        </section>
      </div>
    </AppShell>
  );
}
