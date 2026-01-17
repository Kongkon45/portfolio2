import React from 'react';
import Hero from './Hero/Hero';
import ParticlesBackground from './Particles/Particles';
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Project from './Project/Project';

const HomePageAllComponents = () => {
    return (
        <div>
            <ParticlesBackground/>
            <Hero/>
            <About/>
            <Skills/>
            <Project/>
            <div id="contact">

            <Contact />
            </div>
        </div>
    );
};

export default HomePageAllComponents;