import React, { useState } from 'react';
import Header,{HeaderPhone} from './components/Header'; // Seems like a mistake, you might intend to import from './components/HeaderPhone'
import Home from './components/Home';
import Work from './components/Work';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
