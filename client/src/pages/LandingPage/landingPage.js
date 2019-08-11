import React from 'react';
import Jumbotron from '../../components/Jumbotron/jumbotron';
import LandingCards from '../../components/LandingCards/landingCards';
import Footer from '../../components/Footer/footer';


function LandingPage() {
    return (
        <>
            <Jumbotron />
            <LandingCards />
            <Footer />
        </>
    )
}

export default LandingPage;