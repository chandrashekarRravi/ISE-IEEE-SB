import React, { useState } from 'react';
import './components/anmimations/App.css';

import GalleryText from './components/GalleryText';
import Gallery from './components/Gallery.jsx';
import Navbar1 from './components/Navbar1';
import Carousel from './components/Carousel';
import Facts from './components/Facts';
import About from './components/About';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import EventGallery from './components/EventGallery';
import EventDetails from './components/EventDetails';
import ScrollAnimation from './components/anmimations/ScrollAnimation';
import PreviousEvents from './components/PreviousEvents';
import Footer from './components/Footer';
const App = () => {
  const [isPreviousEventsModalOpen, setIsPreviousEventsModalOpen] = useState(false);

  const handlePreviousEventsClick = () => {
    setIsPreviousEventsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPreviousEventsModalOpen(false);
  };



  return (
    <div className="text-gray-400 bg-gray-900">
      <Navbar1 onPreviousEventsClick={handlePreviousEventsClick} />
      <div className="flex justify-end p-4">
      </div>
      <Gallery />
      <GalleryText />
      <Carousel />
      <Facts />
      <ScrollAnimation delay={1000}>
        <h1 className="text-6xl font-bold text-center mt-20 mb-0">Welcome to Events</h1>
      </ScrollAnimation>
      <EventDetails />
      <About />
      <ScrollAnimation delay={2000}>
        <h1 className="text-6xl font-bold text-center mt-10">Meet Creators</h1>
      </ScrollAnimation>
      <Team />
      <ScrollAnimation delay={3000}>
        <h1 className="text-6xl font-bold text-center mt-10">Achievements</h1>
      </ScrollAnimation>
      <EventGallery />
      <ScrollAnimation>
        <h1 className="text-6xl font-bold text-center mt-10">Need Help!!</h1>
      </ScrollAnimation>
      <ContactUs />

      {isPreviousEventsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full md:w-5/6 lg:w-4/5 xl:w-3/4 h-auto max-h-[60vh] overflow-y-auto">
            <h2 className="text-lg font-medium text-white mb-4">Previous Events</h2>
            <PreviousEvents />
            <button
              onClick={handleCloseModal} onClose={() => setIsPreviousEventsModalOpen(false)}
              className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;