import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Tag, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/**
 * @typedef {import('@/lib/mock-data').Space} Space
 */

/**
 * @param {object} props
 * @param {Space} props.space
 */
export function SpaceCard({ space }) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={space.imageUrl}
            alt={`Image of ${space.name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint="office workspace"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 space-y-3">
        <CardTitle className="text-xl font-semibold leading-tight">
          <Link href={`/booking/${space.slug}`} className="hover:text-primary transition-colors">
            {space.name}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">{space.description}</CardDescription>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1.5 h-4 w-4 text-primary" />
          <span>{space.address}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-1.5 h-4 w-4 text-primary" />
          <span>Capacity: {space.capacity} people</span>
        </div>
        {space.rating && (
          <div className="flex items-center text-sm">
            <Star className="mr-1.5 h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{space.rating.toFixed(1)}</span>
            {space.reviewsCount && <span className="ml-1 text-muted-foreground">({space.reviewsCount} reviews)</span>}
          </div>
        )}
        <div className="flex flex-wrap gap-2 pt-2">
          {space.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs">{amenity}</Badge>
          ))}
          {space.amenities.length > 3 && <Badge variant="secondary" className="text-xs">+{space.amenities.length - 3} more</Badge>}
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center border-t">
        <div className="flex items-center">
          <Tag className="mr-1.5 h-4 w-4 text-primary" />
          <span className="text-lg font-semibold text-foreground">₹{space.pricePerDayIndividual.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground ml-1">/ day</span>
        </div>
        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`/booking/${space.slug}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
