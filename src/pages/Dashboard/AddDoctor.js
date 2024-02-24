import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('https://radiant-hollows-72125.herokuapp.com/service').then(res => res.json()));

    const imageStorageKey = 'b60d7ee6d67a5ea6f4107af05b4362ba'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialization: data.specialization,
                        img: img
                    }
                    fetch('https://radiant-hollows-72125.herokuapp.com/doctor', {
                        method: "POST",
                        headers:{
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res => res.json())
                    .then(inserted => {
                        if(inserted.insertedId){
                            toast.success('Doctor added successfully');
                            reset();
                        }
                        else{
                            toast.error('Failed to add doctor');
                        }
                    })
                }
            })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-96 shadow-xl mx-auto mt-10 bg-slate-300">
                <div className="card-body">
                    <h2 className='text-2xl text-center font-bold'>Add a doctor</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        {/* email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern'
                                    &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* specialization */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialization</span>
                            </label>
                            <select {...register("specialization")} className="select select-bordered w-full max-w-xs">
                                {
                                    services.map(service => <option
                                        key={service._id}
                                        value={service.name}
                                    >{service.name}
                                    </option>)
                                }
                            </select>
                        </div>

                        {/* image */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file"
                                className="input input-bordered w-full max-w-xs" {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs mt-5' value="ADD" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;