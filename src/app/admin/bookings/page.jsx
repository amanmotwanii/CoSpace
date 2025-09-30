import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ListFilter, FileDown } from "lucide-react"; // PlusCircle removed as not used
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockBookings, mockSpaces } from "@/lib/mock-data"; 
import { format } from "date-fns";

export default function AdminBookingsPage() {
  const bookings = mockBookings; 

  const getSpaceName = (spaceId) => mockSpaces.find(s => s.id === spaceId)?.name || 'Unknown Space';
  const getUserIdentifier = (userId) => {
    if (userId === 'user-priya-sharma') return 'Priya Sharma';
    if (userId === 'corp-innovatech') return 'Innovatech Solutions';
    if (userId === 'user-rohan-patel') return 'Rohan Patel';
    return userId;
  }


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight flex items-center"><CalendarCheck className="mr-3 h-8 w-8 text-primary"/>Manage Bookings</h1>
         <div className="flex items-center gap-2">
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Booking Records</CardTitle>
          <CardDescription>View and manage all customer bookings.</CardDescription>
          <div className="flex items-center gap-2 pt-2">
            <Input placeholder="Search bookings (ID, user, space)..." className="max-w-sm" />
            <Button variant="outline"><ListFilter className="mr-2 h-4 w-4" /> Filter</Button>
          </div>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Space Name</TableHead>
                <TableHead>User/Corp</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id.substring(0,8)}...</TableCell>
                  <TableCell>{getSpaceName(booking.spaceId)}</TableCell>
                  <TableCell>{getUserIdentifier(booking.userId)}</TableCell>
                  <TableCell>{format(new Date(booking.date), "MMM d, yyyy")}</TableCell>
                  <TableCell><Badge variant="outline">{booking.bookingType}</Badge></TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        booking.status === 'confirmed' ? 'default' :
                        booking.status === 'pending' ? 'secondary' : 'destructive'
                      }
                      className={
                        booking.status === 'confirmed' ? 'bg-green-500/20 text-green-700 border-green-500' :
                        booking.status === 'pending' ? 'bg-yellow-500/20 text-yellow-700 border-yellow-500' : ''
                      }
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">₹{booking.totalPrice.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
                     {booking.status === 'pending' && <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">Confirm</Button>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {bookings.length === 0 && <p className="text-center text-muted-foreground py-4">No bookings found.</p>}
        </CardContent>
      </Card>
    </div>
  );
}
