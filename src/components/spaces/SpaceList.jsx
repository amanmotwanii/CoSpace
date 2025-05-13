import { SpaceCard } from './SpaceCard';

/**
 * @typedef {import('@/lib/mock-data').Space} Space
 */

/**
 * @param {object} props
 * @param {Space[]} props.spaces
 */
export function SpaceList({ spaces }) {
  if (!spaces || spaces.length === 0) {
    return <p className="text-center text-muted-foreground">No spaces available at the moment. Please check back later.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {spaces.map((space) => (
        <SpaceCard key={space.id} space={space} />
      ))}
    </div>
  );
}
