import React from 'react';

const TestimonialCard = ({ review }) => {
    return (
        <div className="card lg:max-w-lg text-primary-content shadow-xl">
            <div className="card-body">
                <p>{review.desc}</p>
                <div className='flex items-center my-8'>
                    <div className="avatar pr-8">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='people' />
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='font-bold'>{review.name}</h4>
                        <h3 className='text-sm'>{review.add}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;