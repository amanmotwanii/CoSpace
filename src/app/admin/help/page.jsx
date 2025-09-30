import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LifeBuoy, Search, MessageSquare, BookOpen } from "lucide-react";

export default function AdminHelpPage() {
  const faqItems = [
    {
      question: "How do I add a new coworking space?",
      answer: "Navigate to the 'Spaces' section in the admin panel and click the 'Add New Space' button. Fill in the required details such as name, address, capacity, pricing, and amenities. Don't forget to upload high-quality images.",
    },
    {
      question: "How can I manage bookings?",
      answer: "The 'Bookings' section lists all current and past bookings. You can filter bookings by status, date, or user. For pending bookings, you may have options to confirm or cancel them based on your settings.",
    },
    {
      question: "How do user roles work?",
      answer: "Users can be individuals or part of a corporate account. Corporate accounts might have different billing options or dedicated spaces. You can manage users and their roles in the 'Users' section.",
    },
    {
      question: "Where can I configure payment settings?",
      answer: "Payment gateway integration details and transaction settings are typically found under 'Settings > Payment Gateway' (this section is a placeholder in the current version). Global pricing rules like currency and tax can be found in 'Settings > Pricing'.",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight flex items-center">
        <LifeBuoy className="mr-3 h-8 w-8 text-primary" />
        Help & Support
      </h1>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Search Documentation</CardTitle>
          <div className="relative mt-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Type your question here..." className="pl-8" />
          </div>
        </CardHeader>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center"><BookOpen className="mr-2 h-5 w-5 text-primary"/>Frequently Asked Questions</CardTitle>
          <CardDescription>Find answers to common questions about managing CoSpace Finder.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center"><MessageSquare className="mr-2 h-5 w-5 text-primary"/>Contact Support</CardTitle>
          <CardDescription>Can't find what you're looking for? Get in touch with our support team.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground">
            For technical issues or urgent inquiries, please email us at:
            <a href="mailto:amanmotwani28@gmail.com" className="font-medium text-primary hover:underline ml-1">
              amanmotwani28@gmail.com
            </a>
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Submit a Support Ticket</Button>
        </CardContent>
      </Card>
    </div>
  );
}
