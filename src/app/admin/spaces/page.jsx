import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Building, ListFilter, FileDown } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockSpaces } from "@/lib/mock-data"; 

export default function AdminSpacesPage() {
  const spaces = mockSpaces; 

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight flex items-center"><Building className="mr-3 h-8 w-8 text-primary"/>Manage Spaces</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/admin/spaces/new"> 
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Space
            </Link>
          </Button>
        </div>
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Space Listings</CardTitle>
          <CardDescription>View, edit, and manage all coworking spaces.</CardDescription>
           <div className="flex items-center gap-2 pt-2">
            <Input placeholder="Search spaces..." className="max-w-sm" />
            <Button variant="outline"><ListFilter className="mr-2 h-4 w-4" /> Filter</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Price/Day (Ind.)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {spaces.map((space) => (
                <TableRow key={space.id}>
                  <TableCell className="font-medium">{space.name}</TableCell>
                  <TableCell>{space.address}</TableCell>
                  <TableCell>{space.capacity}</TableCell>
                  <TableCell>₹{space.pricePerDayIndividual.toFixed(2)}</TableCell>
                  <TableCell><Badge variant={space.status === 'Active' ? "default" : "secondary"}>{space.status}</Badge></TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/spaces/edit/${space.slug}`}>Edit</Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {spaces.length === 0 && <p className="text-center text-muted-foreground py-4">No spaces found.</p>}
        </CardContent>
      </Card>
    </div>
  );
}
