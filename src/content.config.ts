import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const faqs = defineCollection({
	loader: file("src/content/faq.json"),
	schema: z.object({
		id: z.string(),
		question: z.string(),
		answer: z.string(),
	}),
});

export const collections = {
	faqs,
};
