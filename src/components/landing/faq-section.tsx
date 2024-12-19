import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQSection() {
    return (
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Need Help?</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                {
                  question: "Do I need to link all my bank accounts and cards to use ZenPay?",
                  answer: "No, you can start with just one account and add more as needed.",
                },
                {
                  question: "How long does it take to set up my ZenPay account?",
                  answer: "Setting up your account typically takes less than 5 minutes.",
                },
                {
                  question: "Can ZenPay handle transactions in multiple currencies?",
                  answer: "Yes, we support multiple currencies with competitive exchange rates.",
                },
                {
                  question: "Does ZenPay allow all types of transactions?",
                  answer: "We support most standard financial transactions with some restrictions.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  
  