import React from 'react';

const Services = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-3xl font-bold text-center my-10'>What people say about us</h1>
            <p className=' font-semibold text-center my-10'> Let us cater your next event with our customizable menus and professional service. Perfect for corporate events or family gatherings.</p>
            <div className='grid md:grid-cols-4 sm: grid-cols-2 gap-4 text-center'>
                <div className='border rounded-md bg-slate-100 p-4'>
                    <h1 className='text-green-600 font-bold text-3xl'>100%</h1>
                    <h2 className='font-bold text-lg'>Satisfaction Rate</h2>
                </div>
                <div className='border rounded-md bg-slate-100 p-4'>
                    <h1 className='text-green-600 font-bold text-3xl'>650+</h1>
                    <h2 className='font-bold text-lg'>Online Order Complete</h2>
                </div>
                <div className='border rounded-md bg-slate-100 p-4'>
                    <h1 className='text-green-600 font-bold text-3xl'>50+</h1>
                    <h2 className='font-bold text-lg'>Customer Daily</h2>
                </div>
                <div className='border rounded-md bg-slate-100 p-4'>
                    <h1 className='text-green-600 font-bold text-3xl'>5</h1>
                    <h2 className='font-bold text-lg'>Star Rating</h2>
                </div>
            </div>
        </div>
    );
};

export default Services;