import React from 'react'
import './pages.scss'

import { Navbar, AboutContent, Footer } from '../components';

export const AboutPage = () => {
    return (
        <>
            <Navbar variant="dark" />
            <AboutContent />
            <Footer />
        </>
    )
}
