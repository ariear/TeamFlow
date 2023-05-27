import React from 'react';

const Skill: React.FC = () => {
    return (
        <div className='font-nunitosans py-6 mb-20 xl:px-0 px-3'>
            <p className='text-center text-3xl font-semibold text-[#565656] mb-20'>What you <span className='text-[#FFCA1D]'>can do?</span></p>
            <div className='container mx-auto flex items-center justify-center lg:justify-between flex-wrap'>
                <div className='text-center w-max py-6 px-3 rounded-lg hover:shadow-lg duration-300'>
                    <img src="/assets/icons/graph_icon.svg" className='mx-auto mb-8' alt="" />
                    <p className='text-xl font-bold text-[#2B3377] mb-6'>Business Planning</p>
                    <p className='text-lg text-[#585858] w-[300px] xl:w-[380px] mx-auto'>Our Business Plan is a written document describing a company’s core business activities.</p>
                </div>
                <div className='text-center w-max py-6 px-3 rounded-lg hover:shadow-lg duration-300'>
                    <img src="/assets/icons/financial_icon.svg" className='mx-auto mb-8' alt="" />
                    <p className='text-xl font-bold text-[#2B3377] mb-6'>Financial Planning</p>
                    <p className='text-lg text-[#585858] w-[300px] xl:w-[380px] mx-auto'>Our expert team sensible decision about their money, to ensure they achieve the life goals. A financial plan.</p>
                </div>
                <div className='text-center w-max py-6 px-3 rounded-lg hover:shadow-lg duration-300'>
                    <img src="/assets/icons/market_icon.svg" className='mx-auto mb-8' alt="" />
                    <p className='text-xl font-bold text-[#2B3377] mb-6'>Market Analysis</p>
                    <p className='text-lg text-[#585858] w-[300px] xl:w-[380px] mx-auto'>A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market.</p>
                </div>
            </div>
        </div>
    )
}

export default Skill;
