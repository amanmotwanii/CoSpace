
"use client";

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Loader2, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import React from 'react';

const formSchema = z.object({
  location: z.string().min(3, 'Location must be at least 3 characters long.'),
  groupSize: z.coerce.number().min(1, 'Group size must be at least 1.'),
  selectedDate: z.date({ required_error: "A date is required for the suggestion." }),
  timeOfDay: z.string().min(1, 'Please specify the time of day (e.g., "morning", "3 PM").'),
});

/**
 * @typedef {z.infer<typeof formSchema>} FormData
 */

/**
 * @param {object} props
 * @param {(data: import('@/ai/flows/suggest-location').SuggestLocationInput) => Promise<void>} props.onSubmit
 * @param {boolean} props.isLoading
 */
export function LocationSuggestionForm({ onSubmit, isLoading }) {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
      groupSize: 1,
      selectedDate: undefined,
      timeOfDay: '',
    }
  });

  /** @type {import('react-hook-form').SubmitHandler<FormData>} */
  const handleFormSubmit = (data) => {
    const formattedDate = format(data.selectedDate, "PPP"); // e.g., "Aug 15th, 2024"
    const combinedTime = `${formattedDate}, ${data.timeOfDay}`;
    
    onSubmit({
      location: data.location,
      groupSize: data.groupSize,
      time: combinedTime,
    });
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Find Your Optimal Space with AI</CardTitle>
        <CardDescription>Enter your preferences, and our AI will suggest the best available location for you.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location">Your Current Location or Area</Label>
            <Input id="location" {...register('location')} placeholder="e.g., Koramangala, Bangalore" />
            {errors.location && <p className="text-sm text-destructive">{errors.location.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="groupSize">Group Size</Label>
            <Input id="groupSize" type="number" {...register('groupSize')} placeholder="e.g., 1, 5" />
            {errors.groupSize && <p className="text-sm text-destructive">{errors.groupSize.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="selectedDate">Desired Date</Label>
            <Controller
              name="selectedDate"
              control={control}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))} // Disable past dates
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.selectedDate && <p className="text-sm text-destructive">{errors.selectedDate.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeOfDay">Time of Day</Label>
            <Input id="timeOfDay" {...register('timeOfDay')} placeholder="e.g., Morning, 2 PM, Full Day" />
            {errors.timeOfDay && <p className="text-sm text-destructive">{errors.timeOfDay.message}</p>}
          </div>

        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Get Suggestion'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
