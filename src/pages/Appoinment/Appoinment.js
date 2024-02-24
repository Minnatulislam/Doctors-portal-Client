import React, { useState } from 'react';
import AvailableAppoinments from './AvailableAppoinments';
import AppoinmentBanner from './AppoinmentBanner';
import Footer from '../Shared/Footer';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinments date={date}></AvailableAppoinments>     
            <Footer></Footer>    
        </div>
    );
};

export default Appoinment;