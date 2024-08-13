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
      answer: 'The event is open to Engineering and Technology students. Participants from diverse backgrounds and expertise levels are encouraged to join.',
    },
    {
      question: 'Can I receive a certificate of participation?',
      answer: 'Participants who attend the event and actively engage in sessions and activities will receive a certificate of participation. Details on how to obtain the certificate will be provided at the event venue or through the event website.',
    },
    {
      question: 'How can I stay updated on event announcements and changes?',
      answer: 'To stay informed about event updates, follow our official social media channels and regularly check the event website for announcements, schedule changes, and additional information.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Details regarding registration fees can be found on the event website. Some events may offer discounted rates for students, early birds, or group registrations. Be sure to check the pricing information during the registration process.',
    },
    {
      question: 'Are there any competitions or hackathons during the event?',
      answer: 'Yes, the event may include competitions, hackathons, or coding challenges. Keep an eye on the event schedule for details on specific contests and how to participate.',
    },
  ];

  return (
    <div id="faq" className="py-12 bg-black flex">
      <div className="w-3/5 px-8 md:w-full md:text-center">
        <div className='text-6xl font-bold mb-5 text-white font-orbitron text-center'>
          <span className="bg-clip-text text-transparent bg-gradient-to-bl from-blue-500 via-green-500 to-yellow-500">
            FAQs
          </span>
        </div>

        <div className="text-white max-w-2xl mx-auto">
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
      <div className="lg:flex lg:w-2/5 items-center justify-center hidden md:hidden">
        <img src={FAQImage} alt="FAQ Image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default FAQs;