
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, CheckCircle, TrendingUp } from 'lucide-react';

/**
 * @typedef {import('@/ai/flows/suggest-location').SuggestLocationOutput} SuggestLocationOutput
 */

/**
 * @param {object} props
 * @param {SuggestLocationOutput} props.suggestion
 */
export function LocationSuggestionResult({ suggestion }) {
  return (
    <Card className="w-full max-w-md shadow-lg border-primary">
      <CardHeader>
        <CardTitle className="text-2xl text-primary flex items-center">
          <CheckCircle className="mr-2 h-6 w-6" /> AI Recommendation
        </CardTitle>
        <CardDescription>Here's the best spot we found based on your criteria:</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <h3 className="text-xl font-semibold">{suggestion.spaceName}</h3>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="mr-2 h-5 w-5 text-primary" />
          <p>{suggestion.address}</p>
        </div>
        <div className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-primary" />
          <div className="text-sm"> {/* Changed p to div */}
            Suitability Score: <Badge variant="default" className="ml-1 bg-accent text-accent-foreground">{suggestion.suitabilityScore}/100</Badge>
          </div>
        </div>
        <p className="text-sm"><span className="font-medium">Availability:</span> {suggestion.availability}</p>
      </CardContent>
    </Card>
  );
}

