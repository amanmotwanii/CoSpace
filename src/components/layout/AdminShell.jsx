"use client"; 

import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminAppSidebar } from "@/components/layout/AdminAppSidebar";
import { AdminAppHeader } from "@/components/layout/AdminAppHeader";

export function AdminShell({ children }) {
  return (
    <SidebarProvider defaultOpen={true}> 
      <div className="grid min-h-screen w-full md:grid-cols-[var(--sidebar-width)_1fr] lg:grid-cols-[var(--sidebar-width)_1fr] group-data-[collapsible=icon]:md:grid-cols-[var(--sidebar-width-icon)_1fr] group-data-[collapsible=icon]:lg:grid-cols-[var(--sidebar-width-icon)_1fr] transition-[grid-template-columns] duration-300 ease-in-out">
        <AdminAppSidebar />
        <div className="flex flex-col">
          <AdminAppHeader />
          <main className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8 bg-muted/40">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
