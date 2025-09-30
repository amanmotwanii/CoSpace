import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ListFilter, FileDown, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock user data updated with Indian names
const mockUsers = [
  { id: "user-priya-sharma", name: "Priya Sharma", email: "priya.sharma@example.com", role: "Individual", joinedDate: "2024-01-15", status: "Active" },
  { id: "corp-innovatech", name: "Innovatech Solutions Pvt. Ltd.", email: "contact@innovatech.co.in", role: "Corporate", joinedDate: "2023-11-20", status: "Active" },
  { id: "user-rohan-patel", name: "Rohan Patel", email: "rohan.patel@example.com", role: "Individual", joinedDate: "2024-03-10", status: "Suspended" },
];

export default function AdminUsersPage() {
  const users = mockUsers;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight flex items-center"><Users className="mr-3 h-8 w-8 text-primary"/>User Management</h1>
         <div className="flex items-center gap-2">
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" /> Export Users
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <UserPlus className="mr-2 h-4 w-4" /> Add New User
          </Button>
        </div>
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>User Accounts</CardTitle>
          <CardDescription>Manage all registered users and corporate accounts.</CardDescription>
          <div className="flex items-center gap-2 pt-2">
            <Input placeholder="Search users (name, email, ID)..." className="max-w-sm" />
            <Button variant="outline"><ListFilter className="mr-2 h-4 w-4" /> Filter by Role</Button>
          </div>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://avatar.vercel.sh/${user.email}.png?text=${user.name.substring(0,2).toUpperCase()}`} alt={user.name} data-ai-hint="person portrait" />
                        <AvatarFallback>{user.name.substring(0,2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      {user.name}
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell><Badge variant={user.role === 'Corporate' ? 'default' : 'secondary'}>{user.role}</Badge></TableCell>
                  <TableCell>{new Date(user.joinedDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.status === 'Active' ? 'default' : 'destructive'}
                      className={user.status === 'Active' ? 'bg-green-500/20 text-green-700 border-green-500' : ''}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View Details</Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      {user.status === 'Active' ? 'Suspend' : 'Activate'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {users.length === 0 && <p className="text-center text-muted-foreground py-4">No users found.</p>}
        </CardContent>
      </Card>
    </div>
  );
}
