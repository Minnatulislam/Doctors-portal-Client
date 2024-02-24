import React, { useState, useEffect } from 'react';
import {format} from 'date-fns';
import { useQuery } from 'react-query'
import Service from './Service';
import BookingModal from './BookingModal';
import Loading from '../Shared/Loading';

const AvailableAppoinments = ({date}) => {
    const [treatment, setTreatment] = useState(null);    
    const formattedDate = format(date, "PP");

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () => fetch(`https://radiant-hollows-72125.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json())
    )

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className="my-20 px-12">
            <h5 className='text-primary text-center font-bold mb-20'>Available Appoinments On {format(date, 'PP')}</h5> 

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service} 
                        setTreatment={setTreatment} 
                                             
                    ></Service>)
                }
            </div>   
            {treatment && <BookingModal 
            date={date}
            setTreatment={setTreatment}
             treatment={treatment}
             refetch={refetch} 
             ></BookingModal>}       
        </div>
    );
};

export default AvailableAppoinments;