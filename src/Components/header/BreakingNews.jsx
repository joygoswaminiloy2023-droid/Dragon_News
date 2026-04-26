import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div >
            <Marquee speed={100} pauseOnHover>
  I can be a React component, multiple React components, or just some text.
</Marquee>

        </div>
    );
};

export default BreakingNews;