import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqAccordion = ({ faq }) => {
  return (
    <div className="bg-white border border-primaryColor/50 rounded-t-xl">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-primaryColor p-5 text-base">{faq.question}</AccordionTrigger>
          <AccordionContent className="pl-5">{faq.answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
