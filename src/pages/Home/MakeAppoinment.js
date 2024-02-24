import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appoinment from '../../assets/images/appointment.png'

const MakeAppoinment = () => {
    return (
        <section style={{background: `url(${appoinment})`}} className='flex justify-center items-center my-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt='doctor'/>
            </div>     

            <div className='flex-1 pr-20 p-8'>
            <h5 className='text-primary font-bold'>Appoinment</h5>  
            <h1 className='text-3xl text-white pt-4 pb-8'>Make an appointment Today</h1> 
            <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary mt-8">Get Started</button>
            </div>            
        </section>
    );
};

export default MakeAppoinment;