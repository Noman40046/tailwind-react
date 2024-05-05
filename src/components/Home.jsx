import React from 'react';
import Hero from './Hero';
import Team from './Team';
import Portfolio from './Portfolio';
import Contacts from './Contacts';



const Home = () => {
    return (
        <div>
            <div>
                <Hero/>
                <Portfolio/>
                <Team/>
                <Contacts/>
            </div>
        </div>
    );
};

export default Home;