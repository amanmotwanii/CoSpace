import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, Building, CalendarCheck, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Spaces", value: "4", icon: Building, color: "text-primary" }, 
    { title: "Active Bookings", value: "3", icon: CalendarCheck, color: "text-green-500" }, 
    { title: "Registered Users", value: "3", icon: Users, color: "text-blue-500" }, 
    { title: "Monthly Revenue", value: "₹4,50,000", icon: BarChart3, color: "text-yellow-500" }, 
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/admin/spaces/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Space
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">Overview of {stat.title.toLowerCase()}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Overview of the latest bookings.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Recent bookings will be displayed here.</p>
            <Button variant="outline" size="sm" className="mt-4" asChild>
              <Link href="/admin/bookings">View All Bookings</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your platform efficiently.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="secondary" className="w-full justify-start" asChild>
              <Link href="/admin/spaces">Manage Spaces</Link>
            </Button>
            <Button variant="secondary" className="w-full justify-start" disabled>View Reports</Button>
            <Button variant="secondary" className="w-full justify-start" asChild>
              <Link href="/admin/users">User Management</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
