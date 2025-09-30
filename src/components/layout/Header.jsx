import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Home, Lightbulb, BookMarked, UserCircle } from 'lucide-react';

/**
 * @typedef {object} NavItem
 * @property {string} title
 * @property {string} href
 * @property {import('lucide-react').LucideIcon} [icon]
 * @property {boolean} [external]
 * @property {boolean} [active]
 * @property {NavItem[]} [items]
 */

/** @type {NavItem[]} */
const mainNavItems = [
  { title: 'Spaces', href: '/', icon: Home },
  { title: 'AI Location Finder', href: '/ai-suggest-location', icon: Lightbulb },
  { title: 'My Bookings', href: '/my-bookings', icon: BookMarked },
];

export function Header() {
  // Add active state logic here if needed, e.g. using usePathname
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.icon && <item.icon className="mr-2 h-4 w-4" />}
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin">Admin Panel</Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="User Account">
            <UserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
