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
const EventGallery = () => {
    const [showAllCards, setShowAllCards] = useState(false); // State to track whether to show all cards

    const events = [
        {
            title: "OS building Workshop ",
            date: "27-03-2025",
            description: "An insightful session on emerging technologies by industry experts.",
            image: os,
        },
        {
            title: "Invited Talk on Recent Trends in Cyber Security  ",
            date: "29-03-2025 ",
            description: "A 24-hour coding competition for innovators and problem solvers.",
            image: Invitedtalk,
        },
        {
            title: "Industrial Visit ",
            date: "12-04-2025 ",
            description: "Hands-on workshop on Artificial Intelligence and Machine Learning.",
            image: industrial,
        },
        {
            title: "Brain Teaser ",
            date: "24-04-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: brainteaser,
        },
        {
            title: "Workshop on Generative AI And ML  ",
            date: "17-05-2025  ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: Genaiandml,
        },
        {
            title: "Invited Talk on Recent Trends in DevOps ",
            date: "17-05-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: Devops,
        },
        {
            title: "Software Hackathon ",
            date: "15-08-2025 to 16-08-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: software,
        },
        {
            title: "Speed Programming ",
            date: "13-09-2025  ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: speed,
        }, {
            title: "Workshop on Designing tools",
            date: "25-09-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: designingtool,
        }, {
            title: "Workshop on Blender Software ",
            date: "16-10-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: blender,
        }, {
            title: "Word Blitz ",
            date: "25-10-2025 ",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: wordblitz,

        },
        {
            title: "Workshop on UI/UX Designing  ",
            date: "15-11-2025",
            description: "A seminar on the latest trends and challenges in cybersecurity.",
            image: uiux,

        },
    ];

    const displayedEvents = showAllCards ? events : events.slice(0, 3);

    const toggleShowAllCards = () => {
        setShowAllCards((prev) => !prev);
    };

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Event Gallery
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Explore our past and upcoming events.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {displayedEvents.map((event, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div className="h-full bg-gray-800 bg-opacity-40 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={event.image}
                                    alt={event.title}
                                />
                                <div className="p-6">
                                    <h2 className="text-lg font-medium text-white mb-2">
                                        {event.title}
                                    </h2>
                                    <p className="leading-relaxed text-base">{event.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {events.length > 3 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={toggleShowAllCards}
                            className="text-indigo-400 border border-indigo-400 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-sm"
                        >
                            {showAllCards ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EventGallery;