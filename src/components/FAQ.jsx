import React from 'react';
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
        {
            question: 'Team Size?',
            answer: '(1-3)',
        },
        {
            question: 'Who can participate?',
            answer: 'Anyone passionate about coding can participate in a hackathon. Whether you’re a beginner or an experienced developer, hackathons offers a great opportunity to learn, collaborate, and showcase your skills. 🚀👩‍💻',
        },
        {
            question: 'Is this an offline event?',
            answer: 'Yes, this is an offline event.',
        },
        {
            question: 'Can we apply as a team?',
            answer: 'Yes, you can participate either as a team or individually.',
        },
        {
            question: 'What if we don\'t have a team?',
            answer: 'No worries, participants can hack solo also.',
        },
        {
            question: 'Will there be arrangements for food and resting area?',
            answer: 'Yes, food is on us. We will provide you a resting area as well.',
        },
        {
            question: 'Once I am accepted, what do I need to bring?',
            answer: 'Your college ID card, laptop, phone, charger.',
        },
        {
            question: 'Is it possible to attend it virtually?',
            answer: 'No, the hackathon is going to be held offline only.',
        },
        {
            question: 'Did we miss something?',
            answer: 'If we missed anything or you have other queries, contact us on satapathyprayasu@gmail.com.',
        },
    ];

    return (
        <div id="faq" className="w-screen py-12">
            <div className="container mx-auto px-4 bg-black">
                <h1 className="text-center text-7xl font-bold mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">
                        FAQs
                    </span>
                </h1>
    
                <div className="border border-gray-700 rounded-lg max-w-5xl mx-auto p-6  bg-black">
                    {faqs.map(({ question, answer }, index) => (
                        <Accordion
                            key={index}
                            open={open === index + 1}
                            icon={<Icon id={index + 1} open={open} />}
                        >
                            <AccordionHeader onClick={() => handleOpen(index + 1)} className="text-white border-b border-gray-700">
                                {question}
                            </AccordionHeader>
                            <AccordionBody className="text-ui-primary text-left p-4">
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
