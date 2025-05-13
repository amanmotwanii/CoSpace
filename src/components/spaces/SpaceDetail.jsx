import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Zap, Star, CheckCircle } from 'lucide-react';

/**
 * @typedef {import('@/lib/mock-data').Space} Space
 */

/**
 * @param {object} props
 * @param {Space} props.space
 */
export function SpaceDetail({ space }) {
  return (
    <div className="space-y-6">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={space.imageUrl}
          alt={`Image of ${space.name}`}
          layout="fill"
          objectFit="cover"
          data-ai-hint="modern office"
        />
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-primary">{space.name}</h1>
      
      {space.rating && (
        <div className="flex items-center text-lg">
          <Star className="mr-1.5 h-5 w-5 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold">{space.rating.toFixed(1)}</span>
          {space.reviewsCount && <span className="ml-2 text-muted-foreground">({space.reviewsCount} reviews)</span>}
        </div>
      )}

      <p className="text-lg text-muted-foreground">{space.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
        <div className="flex items-start">
          <MapPin className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-muted-foreground">{space.address}</p>
          </div>
        </div>
        <div className="flex items-start">
          <Users className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold">Capacity</h3>
            <p className="text-muted-foreground">Up to {space.capacity} people</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3 flex items-center"><Zap className="mr-2 h-5 w-5 text-primary" /> Amenities</h3>
        <div className="flex flex-wrap gap-3">
          {space.amenities.map((amenity) => (
            <Badge key={amenity} variant="outline" className="py-1 px-3 text-sm border-primary text-primary flex items-center">
              <CheckCircle className="mr-1.5 h-4 w-4" />
              {amenity}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
