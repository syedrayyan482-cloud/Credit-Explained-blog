import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-divider">
      <h2 className="text-2xl font-semibold text-heading mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="bg-secondary/30 border border-border rounded-lg px-6 data-[state=open]:bg-secondary/50"
          >
            <AccordionTrigger className="text-left text-base font-medium text-heading hover:text-primary hover:no-underline py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-body pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
