import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const Conditions = () => {
    const conditions = [
        {
            category: "Skin Disorders",
            items: [
                {
                    name: "Psoriasis",
                    description: "A chronic autoimmune condition that speeds up the growth cycle of skin cells.",
                    siddha_view: "Viewed as an imbalance in Vatha and Kapha doshas impacting the skin and blood (Raktha). Treatment focuses on purification (Shodana) and internal balancing."
                },
                {
                    name: "Eczema (Atopic Dermatitis)",
                    description: "A condition that makes your skin red and itchy.",
                    siddha_view: "Often linked to blood impurities and excessive heat (Pitha). Management involves cooling herbs and specific oil applications."
                },
                {
                    name: "Vitiligo / Leucoderma",
                    description: "Loss of skin color in patches.",
                    siddha_view: "Considered 'Venpadai'. Treatment aims to stimulate melanin production through specific herbal exposure to sunlight and internal medicines."
                },
                {
                    name: "Acne & Fungal Infections",
                    description: "Persistent acne or recurrent fungal issues.",
                    siddha_view: "Addressed by correcting digestive fire and blood purification."
                }
            ]
        },
        {
            category: "Chronic & Lifestyle Disorders",
            items: [
                {
                    name: "Arthritis & Joint Pain",
                    description: "Joint pain, stiffness, and swelling.",
                    siddha_view: "Classified under 'Vatha' diseases. Therapies include Varma points stimulation and anti-inflammatory herbal formulations."
                },
                {
                    name: "Digestive Issues",
                    description: "Gastritis, Ulcers, Indigestion, and Piles.",
                    siddha_view: "Rooted in Pitha imbalance. Treatment corrects the digestive fire (Agni) and soothes the mucosal lining."
                },
                {
                    name: "Respiratory Ailments",
                    description: "Asthma, Chronic Cough, and Sinusitis.",
                    siddha_view: "Managed by balancing Kapha dosha to clear airways and strengthen immunity."
                }
            ]
        }
    ];

    return (
        <Layout>
            <div className="pt-24 pb-16 min-h-screen">
                <div className="container-luxury">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Conditions We Treat</h1>
                        <p className="text-lg text-muted-foreground">
                            Siddha medicine offers effective management for a wide range of chronic and acute conditions by addressing the root cause.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {conditions.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <h2 className="text-2xl font-serif font-semibold text-primary mb-6 border-b border-border pb-3">
                                    {category.category}
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {category.items.map((item, i) => (
                                        <AccordionItem key={i} value={`${idx}-${i}`} className="border-b border-border/50">
                                            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-accent hover:no-underline py-4">
                                                {item.name}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-4">
                                                <p className="mb-2"><strong className="text-primary">Symptoms:</strong> {item.description}</p>
                                                <p><strong className="text-primary">Siddha Perspective:</strong> {item.siddha_view}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-primary/5 p-8 rounded-2xl">
                        <p className="text-muted-foreground italic">
                            Note: The information provided is for educational purposes. We create personalized treatment plans for each patient based on their unique constitution (Prakruti).
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Conditions;
