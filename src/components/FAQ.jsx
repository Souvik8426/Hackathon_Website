import React from 'react';
import FAQImage from '../assets/FAQImage.svg';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const FAQs = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = [
    {
      question: 'Who can participate in the technical event?',
      answer: 'Students, developers, designers, and innovators—this hackathon is for you! Whether you\'re coding, designing, or ideating, bring your passion and create something extraordinary. If you love data, you belong here!',
    },
    {
      question: 'Can I receive a certificate of participation?',
      answer: 'Absolutely! Every participant in the hackathon will receive a certificate to celebrate your hard work and innovation. It’s more than just a piece of paper—it’s proof you took on the challenge.',
    },
    {
      question: 'How can I stay updated on event announcements and changes?',
      answer: 'Stay in the loop! Follow us on social media and join our Datatrix’24 Whatsapp Community to catch all the latest updates and announcements. Don’t miss a beat—be the first to know.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Nope! Participation is completely free of charge.',
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Bring your laptop, charger, and any other tools you need to code and collaborate. Most importantly, bring your creativity and enthusiasm.',
    },
    {
      question: 'What is the hackathon’s schedule?',
      answer: 'Check out our event timeline on the official website for detailed timing and activities.',
    },
    {
      question: 'Will there be networking opportunities?',
      answer: 'Absolutely! Connect with fellow participants, mentors, and industry leaders throughout the event.',
    },
  ];

  return (
    <div id="faq" className="py-12 flex flex-col-reverse lg:flex-row bg-gradient-to-b from-transparent to-black custom-blur">
      <div className="lg:w-1/3 flex items-center justify-center">
        <img src={FAQImage} alt="FAQ Image" className="w-full h-full hidden lg:block" />
      </div>
      <div className="w-full lg:w-2/3 px-8 md:w-full md:text-center">
        <div className='text-6xl font-bold mb-5 text-white font-rampart text-center'>
          <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            FAQs
          </span>
        </div>

        <div className="text-white max-w-2xl mx-auto font-titillium">
          {faqs.map(({ question, answer }, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(index + 1)} className="py-[1rem] text-lg font-medium">
                {question}
              </AccordionHeader>
              <AccordionBody className="text-base text-left p-4">
                {answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
