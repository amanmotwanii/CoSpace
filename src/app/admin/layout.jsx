import { AdminShell } from '@/components/layout/AdminShell';

export const metadata = {
  title: 'Admin - CoSpace Finder',
  description: 'Manage CoSpace Finder operations.',
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
