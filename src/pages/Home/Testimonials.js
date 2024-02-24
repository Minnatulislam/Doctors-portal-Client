import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1 ,
            add: 'California' 
        },
        {
            _id: 2,
            name: 'Bonnie Wright',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2 ,
            add: 'California' 
        },
        {
            _id: 3,
            name: 'Addison Hava',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3 ,
            add: 'California' 
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h5 className='text-primary font-bold'>Testimonials</h5>
                    <h1 className='text-4xl'>What Our Patients Say</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt='quote'/>
                </div>
            </div>    

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>)}
            </div>        
        </section>
    );
};

export default Testimonials;