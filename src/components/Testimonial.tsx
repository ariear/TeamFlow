import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <div className='font-nunitosans py-20'>
            <p className='text-center text-4xl mb-2 font-semibold text-[#2D2D2D]'>Client</p>
            <p className='text-[#FFCA1D] text-4xl text-center font-bold mb-20'>Testimonials</p>

            <div>
                <img src="/assets/images/world.png" className='mx-auto' alt="" />
            </div>
            <div className='flex items-center justify-center mt-10'>
                <div className='w-3 h-3 bg-[#FFCA1D] rounded-full' ></div>
                <div className='w-3 h-3 bg-[#DDDDDD] rounded-full mx-3' ></div>
                <div className='w-3 h-3 bg-[#DDDDDD] rounded-full' ></div>
            </div>
        </div>
    )
}

export default Testimonial;
