import React, { useState } from 'react';
import brainteaser from '../assets/UPC-events/Brain Teaser.jpg';
import hackthon from '../assets/UPC-events/Hackathon 2025.png';
import industrial from '../assets/UPC-events/industrial Visit.png';
import Invitedtalk from '../assets/UPC-events/Invited Talk on Recent Trends in Cyber Security.png';
import Devops from '../assets/UPC-events/Invited Talk on Recent Trends in DevOps.png';
import os from '../assets/UPC-events/OS building Workshop.jpg';
import software from '../assets/UPC-events/Software Hackathon.png';
import speed from '../assets/UPC-events/Speed Programming.jpeg';
import techtalk from '../assets/UPC-events/Tech Talk 2025.png';
import uiux from '../assets/UPC-events/uiux.png';
import wordblitz from '../assets/UPC-events/Word Blitz.jpg';
import blender from '../assets/UPC-events/Workshop on Blender Software.jpeg';
import designingtool from '../assets/UPC-events/Workshop on Designing tools.jpeg';
import Genaiandml from '../assets/UPC-events/Workshop on Generative AI And ML.jpeg';
const PreviousEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const previousEvents = [
        {
            title: "OS building Workshop ",
            date: "27-03-2025",
            description: "An insightful session on emerging technologies by industry experts.",
            image: os,
            googleFormLink: "https://forms.gle/exampleTechTalk",
            details: "This Tech Talk will cover the latest advancements in AI, blockchain, and IoT, presented by industry leaders.",
            moreDetails: "Additional details about the Tech Talk, including speaker bios, session timings, and Q&A opportunities.",
            results: ["1st Place: Team Alpha", "2nd Place: Team Beta", "3rd Place: Team Gamma"],
        },
        {
            title: "Invited Talk on Recent Trends in Cyber Security  ",
            date: "29-03-2025 ",
            description: "A 24-hour coding competition for innovators and problem solvers.",
            image: Invitedtalk,
            googleFormLink: "https://forms.gle/exampleHackathon",
            details: "Join us for an exciting hackathon where teams will solve real-world problems and compete for prizes.",
            moreDetails: "Additional details about the Hackathon, including rules, judging criteria, and prize distribution.",
            results: ["1st Place: Team Delta", "2nd Place: Team Epsilon", "3rd Place: Team Zeta"],
        },
        {
            title: "Industrial Visit ",
            date: "12-04-2025 ",
            description: "Hands-on workshop on Artificial Intelligence and Machine Learning.",
            image: industrial,
            googleFormLink: "https://forms.gle/exampleAIWorkshop",
            details: "Learn the fundamentals of AI and ML in this hands-on workshop led by experts in the field.",
            moreDetails: "Additional details about the AI Workshop, including topics covered, prerequisites, and resources.",
            results: ["1st Place: Team Theta", "2nd Place: Team Lambda", "3rd Place: Team Sigma"],
        },
        {
            title: "Brain Teaser ",
            date: "24-04-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: brainteaser,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        },
        {
            title: "Workshop on Generative AI And ML  ",
            date: "17-05-2025  ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: Genaiandml,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        }, {
            title: "Invited Talk on Recent Trends in DevOps ",
            date: "17-05-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: Devops,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        }, {
            title: "Software Hackathon ",
            date: "15-08-2025 to 16-08-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: software,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        }, {
            title: "Speed Programming ",
            date: "13-09-2025  ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: speed,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        }, {
            title: "Workshop on Designing tools",
            date: "25-09-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: designingtool,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        }, {
            title: "Workshop on Blender Software ",
            date: "16-10-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: blender,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        }, {
            title: "Word Blitz ",
            date: "25-10-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: wordblitz,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        },
        {
            title: "Workshop on UI/UX Designing  ",
            date: "15-11-2025",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: uiux,
            googleFormLink: "https://forms.gle/exampleCybersecurity",
            details: "Learn about the latest cybersecurity threats and how to protect against them.",
            moreDetails: "Additional details about the seminar, including speaker profiles and session topics.",
            results: ["1st Place: Team Omega", "2nd Place: Team Sigma", "3rd Place: Team Delta"],
        },
    ];

    const handleToggleModal = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <section id="previous-events" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Previous Events
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Explore our past events and their highlights.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {previousEvents.map((event, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                    src={event.image}
                                    alt={event.title}
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                        {event.date}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {event.title}
                                    </h1>
                                    <p className="leading-relaxed mb-3">{event.description}</p>
                                    <button
                                        onClick={() => handleToggleModal(event)}
                                        className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                                    >
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedEvent && (
                <div className="fixed inset-0 bg-[#4a5568;] bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 relative">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <h2 className="text-lg font-medium text-white mb-4">{selectedEvent.title}</h2>
                        <p className="text-sm text-gray-400 mb-4">{selectedEvent.details}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PreviousEvents;