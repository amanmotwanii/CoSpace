"use client";

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { LocationSuggestionForm } from '@/components/ai/LocationSuggestionForm';
import { LocationSuggestionResult } from '@/components/ai/LocationSuggestionResult';
import { suggestLocation } from '@/ai/flows/suggest-location';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AiSuggestLocationPage() {
  const [suggestion, setSuggestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuggestion(null);
    try {
      const result = await suggestLocation(data);
      setSuggestion(result);
    } catch (err) {
      console.error("AI suggestion error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppShell>
      <div className="flex flex-col items-center space-y-8">
        <LocationSuggestionForm onSubmit={handleSubmit} isLoading={isLoading} />
        {error && (
          <Alert variant="destructive" className="w-full max-w-md">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {suggestion && !error && <LocationSuggestionResult suggestion={suggestion} />}
      </div>
    </AppShell>
  );
}
