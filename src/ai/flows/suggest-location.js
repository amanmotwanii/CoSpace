// src/ai/flows/suggest-location.js
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting the best available coworking space
 * based on user location, group size, and desired time.
 *
 * - suggestLocation - An async function that suggests a coworking space based on the input criteria.
 *   Input type is defined by an internal Zod schema (SuggestLocationInputSchema).
 *   Output type is defined by an internal Zod schema (SuggestLocationOutputSchema).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestLocationInputSchema = z.object({
  location: z.string().describe('The user’s current location.'),
  groupSize: z.number().describe('The number of people in the group.'),
  time: z.string().describe('The time the space is needed for.'),
});

const SuggestLocationOutputSchema = z.object({
  spaceName: z.string().describe('The name of the suggested coworking space.'),
  address: z.string().describe('The address of the suggested coworking space.'),
  availability: z.string().describe('The availability of the suggested coworking space at the given time.'),
  suitabilityScore: z.number().describe('A score indicating how well the space suits the user’s needs (0-100, higher is better).'),
});

/**
 * @param {z.infer<typeof SuggestLocationInputSchema>} input
 * @returns {Promise<z.infer<typeof SuggestLocationOutputSchema>>}
 */
export async function suggestLocation(input) {
  return suggestLocationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestLocationPrompt',
  input: {schema: SuggestLocationInputSchema},
  output: {schema: SuggestLocationOutputSchema},
  prompt: `You are an AI assistant that suggests the best available coworking space.
Based on the following user criteria:
Location: {{{location}}}
Group Size: {{{groupSize}}}
Time: {{{time}}}

Consider these factors carefully:
- Proximity to the user's location.
- Availability at the given time.
- Suitability for the group size.

You MUST respond with ONLY a valid JSON object. Do not include any other text, explanations, or apologies before or after the JSON.
The JSON object must strictly conform to the output schema provided to you, which includes the fields: "spaceName" (string), "address" (string), "availability" (string), and "suitabilityScore" (a number between 0 and 100).
Ensure the suitabilityScore is a numerical value.
  `,
});

const suggestLocationFlow = ai.defineFlow(
  {
    name: 'suggestLocationFlow',
    inputSchema: SuggestLocationInputSchema,
    outputSchema: SuggestLocationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error("AI model failed to return a valid suggestion structure. The output was null or undefined.");
    }
    return output;
  }
);

/**
 * @typedef {z.infer<typeof SuggestLocationInputSchema>} SuggestLocationInput
 * @typedef {z.infer<typeof SuggestLocationOutputSchema>} SuggestLocationOutput
 */