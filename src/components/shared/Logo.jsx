import { BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

/**
 * @param {object} props
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {string} [props.className]
 */
export function Logo({ size = 'md', className }) {
  const iconSize = size === 'sm' ? 20 : size === 'md' ? 24 : 32;
  const textSize = size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl';
  
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <BriefcaseBusiness className="text-primary group-hover:text-primary/90 transition-colors" size={iconSize} aria-hidden="true" />
      <span className={`font-bold ${textSize} text-foreground group-hover:text-primary transition-colors`}>{APP_NAME}</span>
    </Link>
  );
}
