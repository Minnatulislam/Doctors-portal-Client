import React from 'react';
import SingleService from './SingleService';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitenning from '../../assets/images/whitening.png'
import ServiceBanner from './ServiceBanner';

const Services = () => {
    return (
        <div className='my-28 '>
            <h5 className='text-primary font-bold text-center'>OUR SERVICES</h5>  
            <h1 className='text-4xl text-center'>Services We Provide</h1> 

            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-12 my-12 text-center'>
             <SingleService img={fluoride} cardTitle='Fluoride Treatment'></SingleService>       
             <SingleService img={cavity} cardTitle='Cavity Filling'></SingleService>       
             <SingleService img={whitenning} cardTitle='Teeth Whitenning'></SingleService>       
            </div> 
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Services;