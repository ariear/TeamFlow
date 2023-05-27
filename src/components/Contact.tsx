import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className='font-nunitosans bg-[#FAFAFF] text-center py-20'>
            <p className='font-semibold text-[#EB801D] text-lg mb-3'>Support</p>
            <p className='text-3xl font-bold text-[#2D3150] mb-2'>Subscribe Newsletter & get</p>
            <p className='text-2xl font-light text-[#2D3150] mb-10'>Company News</p>
            <div className='flex items-center mx-auto w-max bg-white shadow-form rounded-xl p-2'>
                <img src="/assets/icons/email.svg" className='mx-3' alt="" />
                <input type="text" placeholder='Your email' className='w-[300px] ml-2' id="" />
                <button className='flex items-center bg-[#686DF1] text-white py-2 px-4 rounded-xl'><img src="/assets/icons/send.svg" className='mr-1' alt="" /> Subscribe</button>
            </div>
        </div>
    )
}

export default Contact;
