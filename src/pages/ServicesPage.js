import React from 'react'
import { Navbar, ServiceContent, Footer } from '../components';
import './pages.scss'

export const ServicesPage = () => {
    return (
        <div>
            <Navbar variant="dark" />
            <ServiceContent />
            <Footer />
        </div>
    )
}
