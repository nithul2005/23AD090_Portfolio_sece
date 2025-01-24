import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="shortcuts">
        <a href="#skills" className="shortcut">Skills</a>
        <a href="#projects" className="shortcut">Projects</a>
        <a href="#contact" className="shortcut">Contact</a>
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
