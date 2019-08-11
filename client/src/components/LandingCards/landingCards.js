import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from '../../components/Cards/cards';
import './style.css';


function LandingCards() {
    return (
        <Container className='cardRow'>
            <Card />
            <Card />
            <Card />
        </Container>
    )
}

export default LandingCards;