import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // CardFooter removed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { BriefcaseBusiness, Percent, PlusCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AdminPricingSettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight flex items-center"><BriefcaseBusiness className="mr-3 h-8 w-8 text-primary"/>Pricing Settings</h1>
      
      <form className="space-y-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Global Pricing Rules</CardTitle>
            <CardDescription>Set default currency, tax rates, and global discounts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="currency">Default Currency</Label>
                <Select defaultValue="INR">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                    <SelectItem value="USD">USD - United States Dollar</SelectItem>
                    <SelectItem value="EUR">EUR - Euro</SelectItem>
                    <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="taxRate">Default Tax Rate (%)</Label>
                <Input id="taxRate" type="number" defaultValue="18" /> {/* Common GST rate in India */}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="enableGlobalDiscounts" className="flex flex-col gap-1">
                <span>Enable Global Discounts</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Apply a discount to all bookings.
                </span>
              </Label>
              <Switch id="enableGlobalDiscounts" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="globalDiscountPercentage">Global Discount Percentage (%)</Label>
              <Input id="globalDiscountPercentage" type="number" defaultValue="0" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Dynamic Pricing Tiers</CardTitle>
              <CardDescription>Define pricing tiers based on demand or time.</CardDescription>
            </div>
            <Button variant="outline" size="sm"><PlusCircle className="mr-2 h-4 w-4" /> Add Tier</Button>
          </CardHeader>
          <CardContent>
            {/* Placeholder for pricing tiers list */}
            <div className="border border-dashed rounded-md p-8 text-center text-muted-foreground">
              <Percent className="mx-auto h-12 w-12" />
              <p className="mt-2">No dynamic pricing tiers configured.</p>
              <p className="text-sm">Click "Add Tier" to create rules for peak hours, weekends, etc.</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Save Pricing Settings</Button>
        </div>
      </form>
    </div>
  );
}
