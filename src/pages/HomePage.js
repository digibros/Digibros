import React from 'react'
import './pages.scss'

import { Navbar, Hero, About, Services, Contact, Footer } from '../components';

export const HomePage = () => {
    return (
        <>
            <div className="body">
                <Navbar variant="light" />
                <Hero />
            </div>
            <div className="about">
                <About />
            </div>
            <Services />
            <Contact />
            <Footer />
        </>
    )
}
