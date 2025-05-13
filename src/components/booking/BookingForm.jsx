"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Users, DollarSign, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import React from 'react';
import { useRouter } from 'next/navigation'; 

/**
 * @typedef {import('@/lib/mock-data').Space} Space
 */

const bookingFormSchema = z.object({
  bookingType: z.enum(['individual', 'corporate']),
  date: z.date({ required_error: "A date is required." }),
  numberOfPeople: z.coerce.number().min(1, "At least one person is required."),
});

/**
 * @param {object} props
 * @param {Space} props.space
 */
export function BookingForm({ space }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  
  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      bookingType: 'individual',
      numberOfPeople: 1,
    },
  });

  const selectedBookingType = watch('bookingType');
  const numberOfPeople = watch('numberOfPeople');
  const selectedDate = watch('date');

  const pricePerPerson = selectedBookingType === 'individual' ? space.pricePerDayIndividual : space.pricePerDayCorporate / Math.max(1, space.capacity * 0.5); // Simplified corporate pricing
  const totalPrice = numberOfPeople * pricePerPerson;

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Booking data:", { ...data, spaceId: space.id, totalPrice });
    setIsLoading(false);
    // Redirect to confirmation page
    router.push(`/booking/confirmation?spaceName=${encodeURIComponent(space.name)}&date=${format(data.date, 'yyyy-MM-dd')}&people=${data.numberOfPeople}&total=${totalPrice}`);
  };

  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Spot at {space.name}</CardTitle>
        <CardDescription>Complete the form below to reserve your space.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Booking Type</Label>
            <RadioGroup
              defaultValue="individual"
              onValueChange={(value) => setValue('bookingType', value)}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individual" />
                <Label htmlFor="individual">Individual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="corporate" id="corporate" />
                <Label htmlFor="corporate">Corporate/Group</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => setValue('date', date)}
                  initialFocus
                  disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))} // Disable past dates
                />
              </PopoverContent>
            </Popover>
            {errors.date && <p className="text-sm text-destructive">{errors.date.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="numberOfPeople" className="flex items-center"><Users className="mr-2 h-4 w-4" /> Number of People</Label>
            <Input
              id="numberOfPeople"
              type="number"
              min="1"
              max={space.capacity}
              {...register('numberOfPeople')}
              placeholder={`Max ${space.capacity}`}
            />
            {errors.numberOfPeople && <p className="text-sm text-destructive">{errors.numberOfPeople.message}</p>}
          </div>

          <div className="p-4 bg-secondary rounded-md space-y-2">
            <h4 className="font-semibold text-lg flex items-center"><DollarSign className="mr-2 h-5 w-5 text-primary" />Price Estimate</h4>
            <div className="flex justify-between">
              <span>{selectedBookingType === 'individual' ? 'Price per day:' : 'Est. Group Price per day:'}</span>
              <span>₹{pricePerPerson.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Final price will be confirmed upon booking. For corporate bookings, this is an estimate.</p>
          </div>

        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Proceed to Book'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
