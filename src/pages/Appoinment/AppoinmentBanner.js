import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBanner = ({date,setDate}) => {
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt="chair" src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='pr-8 w-100'>
                    <DayPicker mode="single"
                    selected={date}
                    onSelect={setDate} />
                    
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;