import React from 'react';

const Teams: React.FC = () => {
    return (
        <div className='container mx-auto flex items-center justify-between py-28 font-nunitosans'>
            <div>
                <div className='w-[80px] h-2 bg-[#FFCA1D] rounded-full mb-3'></div>
                <p className='text-2xl font-semibold text-[#515151] w-[450px]'>See why over 100,000 teams choose TeamFlow.com</p>
            </div>
            <div className='flex items-center'>
                <img src="/assets/logo/hulu.png" alt="" className='w-[110px] mr-20' />
                <img src="/assets/logo/bbc.png" alt="" className='w-[110px] mr-20' />
                <img src="/assets/logo/universal.png" alt="" className='w-[110px] mr-20' />
                <img src="/assets/logo/adobe.png" alt="" className='w-[110px]' />
            </div>
        </div>
    )
}

export default Teams;
