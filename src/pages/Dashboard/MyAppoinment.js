import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const MyAppoinment = () => {
    const [appoinments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://radiant-hollows-72125.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setAppoinments(data);
                });
        }
    }, [user])
    return (
        <div>
            <h2 className='text-2xl pl-5'>My Appoinments: {appoinments.length}</h2>
            <div className="overflow-x-auto p-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>
                                    {
                                     (a.price && !a.paid)
                                      && 
                                     <Link to={`/dashboard/payment/${a._id}`}>
                                      <button className='btn btn-xs btn-success'>Pay</button>
                                     </Link>}

                                     {(a.price && a.paid) && <div>
                                        <p><span className='text-success font-bold'>Paid</span></p>
                                        <p>Transaction id: <span className='text-orange'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;