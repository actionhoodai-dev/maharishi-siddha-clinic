import Layout from '@/components/layout/Layout';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FAQ = () => {
    const faqs = [
        {
            question: "Is Siddha medicine safe?",
            answer: "Yes, Siddha medicine is a time-tested traditional system using natural herbs and minerals. When prescribed by a qualified Siddha physician like Dr. M. Vivekanandan, it is safe and free from harmful side effects."
        },
        {
            question: "How long does the treatment take?",
            answer: "The duration varies depending on the chronic nature of the condition, your body's response, and adherence to the prescribed diet (Pathiyam). Chronic conditions may require a few months for significant, long-lasting improvement."
        },
        {
            question: "Are the medicines natural?",
            answer: "Maharishi Siddha Clinic primarily uses herbal formulations (roots, leaves, bark, fruits) prepared according to classical Siddha texts. We ensure high standards of purity and hygiene."
        },
        {
            question: "Is a follow-up required?",
            answer: "Yes, follow-ups are crucial to monitor progress and adjust dosage. We recommend regular check-ins as advised by the doctor."
        },
        {
            question: "Can I take Siddha medicine along with Allopathy?",
            answer: "In many cases, yes. However, it is important to inform the doctor about your current medications so they can advise the correct gap between medicines."
        },
        {
            question: "Do you offer online consultations?",
            answer: "We primarily focus on in-clinic consultations for accurate diagnosis (Pulse reading). However, for existing patients or long-distance inquiries, we can arrange preliminary guidance via Email or WhatsApp."
        }
    ];

    return (
        <Layout>
            <div className="pt-24 pb-16 min-h-screen">
                <div className="container-luxury max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h1>
                        <p className="text-lg text-muted-foreground">
                            Common queries about Siddha medicine and our clinic.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-4 shadow-sm">
                                <AccordionTrigger className="text-lg font-medium text-primary hover:text-accent hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </Layout>
    );
};

export default FAQ;
