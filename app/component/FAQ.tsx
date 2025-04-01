"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqData = [
  {
    question: "When and where is BMC InnovateX taking place?",
    answer:
      "BMC InnovateX will be held at Butwal Multiple Campus, Butwal-03, Rupandehi, from the 25th to the 27th of Jestha, 2082",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone aged 16 to 27 can participate. Whether you're a student, professional, or enthusiast, all are welcome!",
  },
  {
    question: "Do I need a team?",
    answer:
      "Teams can have 2-4 members. Don't have a team? No worries! We'll have a team formation event before the hackathon.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, and any necessary hardware you might need. We'll provide food, drinks, accommodation, and a comfortable hacking space.",
  },
  {
    question: "Is there a participation fee?",
    answer:
      "Yes, we have a participation fee Rs 3000/- per team. This covers food, drinks, accommodation, and a comfortable hacking space.",
  },
  {
    question: "Can we use pre-existing code?",
    answer:
      "No, all code must be written during the hackathon. However, you can use libraries and APIs.",
  },
  {
    question: "How can I get more updates about the event?",
    answer: (
      <>
        All updates regarding the event will be posted on our social media
        handles. Follow us on{" "}
        <Link
          href="https://www.facebook.com/BMCInnovateX"
          className="underline text-blue-600"
        >
          Facebook
        </Link>
        ,{" "}
        <Link
          href="https://www.instagram.com/bmcinnovatex/"
          className="underline text-blue-600"
        >
          Instagram
        </Link>
        , and{" "}
        <Link
          href="https://www.linkedin.com/company/bmcinnovatex/"
          className="underline text-blue-600"
        >
          LinkedIn
        </Link>{" "}
        for the latest news.{" "}
      </>
    ),
  },
  {
    question: "What about intellectual property?",
    answer:
      "All teams retain full ownership of their projects. However, we encourage open-source contributions.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium py-4 px-1">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-1 pb-4">
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
