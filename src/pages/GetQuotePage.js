import React from 'react'
import './pages.scss'

import { Navbar, GetQuoteContent, Footer } from '../components';


export const GetQuotePage = () => {
    return (
        <>
            <Navbar variant="dark" />
            <GetQuoteContent />
            <Footer />
        </>
    )
}
