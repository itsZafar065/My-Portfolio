import { PublicPageShell } from "@/components/public-layout";
import { getPublicData } from "@/lib/data";

export default async function FAQPage() {
  const { faqs } = await getPublicData();
  return (
    <PublicPageShell eyebrow="FAQ" title="Clear answers before we start." description="FAQs are dashboard-managed and automatically reflected on the public website.">
      <section className="section faq-wrap">
        {faqs.map((faq: any) => (
          <details className="glass-card faq-item" key={faq._id}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </PublicPageShell>
  );
}
