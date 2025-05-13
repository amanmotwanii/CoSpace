// Summarize reviews for a coworking space.

'use server';

/**
 * @fileOverview Summarizes customer reviews for a given coworking space.
 *
 * - summarizeReviews - An async function that takes in a list of reviews and returns a concise summary.
 *   Input type is defined by an internal Zod schema (SummarizeReviewsInputSchema).
 *   Output type is defined by an internal Zod schema (SummarizeReviewsOutputSchema).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeReviewsInputSchema = z.object({
  reviews: z
    .array(z.string())
    .describe('An array of customer review strings for a coworking space.'),
});

const SummarizeReviewsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the customer reviews, highlighting the general sentiment and key pros/cons.'
    ),
});

/**
 * @param {z.infer<typeof SummarizeReviewsInputSchema>} input
 * @returns {Promise<z.infer<typeof SummarizeReviewsOutputSchema>>}
 */
export async function summarizeReviews(input) {
  return summarizeReviewsFlow(input);
}

const summarizeReviewsPrompt = ai.definePrompt({
  name: 'summarizeReviewsPrompt',
  input: {schema: SummarizeReviewsInputSchema},
  output: {schema: SummarizeReviewsOutputSchema},
  prompt: `You are an AI assistant that summarizes customer reviews for coworking spaces. Given the following reviews, provide a concise summary highlighting the general sentiment and key pros/cons.\n\nReviews:\n{{#each reviews}}- {{{this}}}\n{{/each}}`,
});

const summarizeReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeReviewsFlow',
    inputSchema: SummarizeReviewsInputSchema,
    outputSchema: SummarizeReviewsOutputSchema,
  },
  async input => {
    const {output} = await summarizeReviewsPrompt(input);
    if (!output) {
        throw new Error("AI model failed to return a valid summary structure. The output was null or undefined.");
    }
    return output;
  }
);

/**
 * @typedef {z.infer<typeof SummarizeReviewsInputSchema>} SummarizeReviewsInput
 * @typedef {z.infer<typeof SummarizeReviewsOutputSchema>} SummarizeReviewsOutput
 */