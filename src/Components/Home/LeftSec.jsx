import Link from 'next/link';
import React from 'react';

const LeftSec = ({cd}) => {
    const {category_name}=cd;
    return (
        <div>
            <li className='block hover:bg-gray-400 hover:opacity-100 py-2 opacity-70 transition-all duration-300'><Link href="/" >{category_name}</Link></li>
        </div>
    );
};

export default LeftSec;