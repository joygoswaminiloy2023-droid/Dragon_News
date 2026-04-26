import Heading from '@/Components/header/Heading';
import Nav from '@/Components/navbar/Nav';
import React from 'react';

const Authlayout = ({children}) => {
    return (
        <div>
            <Nav></Nav>
            {children}
        </div>
    );
};

export default Authlayout;