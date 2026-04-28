import Heading from '@/Components/header/Heading';
import Nav from '@/Components/navbar/Nav';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Authlayout = ({children}) => {
    return (
        <div>
            <Nav></Nav>
            {children}
              <ToastContainer position="top-center" />
        </div>
    );
};

export default Authlayout;