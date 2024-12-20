import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
	return (
		<section className='py-16 bg-slate-50 dark:bg-background'>
			<div className='container px-4 md:px-6'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl text-primary sm:text-4xl md:text-6xl font-bold tracking-tighter'>
						Need Help?
					</h2>
				</div>
				<div className='max-w-3xl mx-auto'>
					<Accordion type='single' collapsible>
						{[
							{
								question:
									'Do I need to link all my bank accounts and cards to use Moneymingle?',
								answer:
									'No, you can start with just one account and add more as needed.',
							},
							{
								question:
									'How long does it take to set up my Moneymingle account?',
								answer:
									'Setting up your account typically takes less than 5 minutes.',
							},
							{
								question: 'Does ZenPay allow all types of transactions?',
								answer:
									'We support most standard financial transactions with some restrictions.',
							},
							{
								question: 'How to Add money in Money Mingle Wallet?',
								answer:
									'You can add money to your wallet using your bank account. You can add create bank account in money mingle bank account section.',
							},
						].map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger>{faq.question}</AccordionTrigger>
								<AccordionContent className='text-primary-foreground font-bold'>
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
