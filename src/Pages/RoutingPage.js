import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import './../Common.css'
import NavBarDown from './NavBar/NavBarDown';
const RoutingPage = () => {
    return (
        <div className=' grid grid-cols-6'>
            <div className='h-Screen col-span-6 md:col-span-4 lg:col-span-5'>
                <Outlet></Outlet>
            </div>
            <div className='h-Screen hidden md:block md:col-span-2 lg:col-span-1'>
                <NavBar></NavBar>
            </div>

            <div className='col-span-6 fixed bottom-0 left-0 right-0' >
                <NavBarDown></NavBarDown>
            </div>
            <div className='col-span-6 md:col-span-5 lg:col-span-5 ' >
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
};

export default RoutingPage;