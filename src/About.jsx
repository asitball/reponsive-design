import React from 'react';
import Common from './Common';
import headerImg from './images/header.svg';
const About = () => {
    return (
        <div>
            <Common
             name='Welcome About page'
             imgsrc={headerImg}
             visit="/contact"
             btnname='Contact us'
            />
        </div>
    );
};

export default About;