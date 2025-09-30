"use client";

import { AppShell } from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';


export default function PrivacyPage() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, [])

  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>CoSpace Finder Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>Last Updated: {date}</p>
            <p>CoSpace Finder ("us", "we", or "our") operates the CoSpace Finder website (the "Service").</p>
            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            <h2>1. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>...</p>
            <h4>Usage Data</h4>
            <p>...</p>
            <h2>2. Use of Data</h2>
            <p>...</p>
            <p className="text-muted-foreground">This is a placeholder page. A comprehensive privacy policy would be detailed here.</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
