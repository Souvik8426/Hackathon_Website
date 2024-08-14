import React from 'react';
import AboutImage from '../assets/AboutUs.svg'; // Update with your image path

const About = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
                {/* Left Half: Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center hidden md:flex">
                    <img src={AboutImage} alt="About Image" className="max-w-full max-h-full rounded-lg shadow-lg" />
                </div>
                {/* Right Half: Text */}
                <div className="w-full md:w-1/2 flex flex-col items-center mt-4 md:mt-0">
                    <div className="w-full max-w-2xl text-center">
                        <div className='text-6xl font-bold mb-5 text-white font-orbitron text-center'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">
                                About
                            </span>
                        </div>
                        <div className='text-6xl font-bold mb-5 text-white font-orbitron text-center'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                Datathon 2024
                            </span>
                        </div>
                        <p className="mt-6 text-lg leading-relaxed">
                            HackVerse isn't just a hackathon; it's a community catalyst. We empower tech-savvy youth in India to develop broader problem-solving skills and foster meaningful connections. In a nation brimming with tech potential, HackVerse bridges the gap by cultivating an inclusive community with a global perspective.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Join our Hybrid Event: Take part in person as a part of our 24-hour in-person hackathon. Over 150 attendees will collaborate and compete for exciting prizes. Embrace the Future of Web3: HackVerse, Chennai's biggest Web3 event, brings together over 100 enthusiasts and leading tech companies. We're excited to showcase the power of Web3 and its potential to shape the future.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            More Than Just Coding: HackVerse goes beyond coding challenges. We prioritize productivity and security, fostering effective teamwork and protecting intellectual property. Be a Part of the Movement: Over 2,000 individuals have already registered for HackVerse. Join us for 36 hours of non-stop innovation alongside 500 passionate Web3 developers.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Join a Respectful Community: HackVerse fosters a respectful and inclusive environment. Participants retain ownership of their projects while granting HackVerse the right to showcase their work for non-commercial purposes. Make Your Mark: Be a part of the Web3 revolution at HackVerse! Sign up now to work with us to create a more promising future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
