import Heading from '@/Components/header/Heading';
import Nav from '@/Components/navbar/Nav';
import React from 'react';

const mainlayout = ({children}) => {
    return (
        <div className='container mx-auto'>
            <Heading></Heading>
            <Nav></Nav>
            {children}
        </div>
    );
};

export default mainlayout;