import React from 'react';
import Common from './Common';
import headerImg from './images/header.svg';
const Home = () => {
    return (
        <div>
            <Common
            name='Grow your business with'
            imgsrc={headerImg}
            visit="/service"
            btnname='Get Started'
            />
        </div>
    );
};

export default Home;