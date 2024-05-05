import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Mainlayout = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Outlet/>
            <div>
                <Footer/>
            </div>
            
        </div>
    );
};

export default Mainlayout;