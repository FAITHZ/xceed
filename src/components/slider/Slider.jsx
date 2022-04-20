import React from 'react';
import Background from '../../assets/images/liga-background.png';
import './Slider.scss';


const Slider = () =>
    <div className='slider'>
        <img src={Background} className="slider__image" alt="Background" />
    </div>;


export default Slider;