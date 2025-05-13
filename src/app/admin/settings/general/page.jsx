import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // CardFooter removed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings } from "lucide-react";

export default function AdminGeneralSettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight flex items-center"><Settings className="mr-3 h-8 w-8 text-primary"/>General Settings</h1>
      
      <form className="space-y-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Site Configuration</CardTitle>
            <CardDescription>Manage basic site settings and information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" defaultValue="CoSpace Finder" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="siteTagline">Site Tagline</Label>
                <Input id="siteTagline" defaultValue="Find and book your ideal coworking space." />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="siteDescription">Site Description (for SEO)</Label>
              <Textarea id="siteDescription" defaultValue="CoSpace Finder helps you discover and book flexible coworking spaces for individuals and corporate teams. AI-powered suggestions for optimal locations." />
            </div>
             <div className="space-y-1.5">
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input id="adminEmail" type="email" defaultValue="admin@cospacefinder.com" />
              </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Booking Settings</CardTitle>
            <CardDescription>Configure default booking parameters.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="minBookingHours">Minimum Booking Duration (Hours)</Label>
                <Input id="minBookingHours" type="number" defaultValue="1" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="maxBookingDays">Maximum Advance Booking (Days)</Label>
                <Input id="maxBookingDays" type="number" defaultValue="90" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="autoConfirmIndividual" defaultChecked />
              <Label htmlFor="autoConfirmIndividual">Automatically confirm individual bookings</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="requireApprovalCorporate" />
              <Label htmlFor="requireApprovalCorporate">Require admin approval for corporate bookings</Label>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Save Settings</Button>
        </div>
      </form>
    </div>
  );
}
