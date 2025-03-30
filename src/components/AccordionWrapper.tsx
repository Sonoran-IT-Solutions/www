import type { CollectionEntry } from "astro:content";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionWrapperProps {
	faqs: CollectionEntry<"faqs">[];
}

export default function AccordionWrapper({
	faqs,
}: Readonly<AccordionWrapperProps>) {
	return (
		<Accordion className="w-full" collapsible type="single">
			{faqs.map((faq, index) => (
				<AccordionItem className="border-primary/20" key={index} value={faq.id}>
					<AccordionTrigger className="hover:text-primary text-left">
						{faq.data.question}
					</AccordionTrigger>
					<AccordionContent className="text-muted-foreground">
						{faq.data.answer}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
