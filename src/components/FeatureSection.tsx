import React from 'react';

const FeatureSection: React.FC = () => {
    return (
        <div className='font-nunitosans'>
            <p className='text-center text-3xl font-semibold text-[#565656] mb-20'>Our <span className='text-[#FFCA1D]'>Features</span></p>
            <div className='flex items-center justify-center container mx-auto mb-28'>
                <img src="/assets/images/sidefeature.png" className='w-[650px] mr-28' alt="" />
                <div>
                    <p className='text-[#4A4A4A] text-4xl font-semibold w-[500px]'>Manage everything in one workspace</p>
                    <div className='w-[60px] h-1 bg-[#FFCA1D] rounded-full my-5'></div>
                    <p className='text-[#575757] text-lg w-[500px]'>Planning, tracking and delivering your team’s best work has never been easier. An integrated workspace that’s simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it.</p>
                </div>
            </div>

            <div className='bg-[#FAFAFF] mb-36'>
                <div className='flex items-center justify-between container mx-auto pt-10'>
                    <div>
                        <p className='text-[#4A4A4A] text-4xl font-semibold'>Set up in minutes</p>
                        <div className='w-[60px] h-1 bg-[#FFCA1D] rounded-full my-5'></div>
                        <p className='text-[#575757] text-lg w-[500px]'>Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes. Choose from hundreds of pre-made templates and tell stories with data with our easy drag-and-drop infographic creator.</p>
                    </div>
                    <img src="/assets/images/setup.png" className='w-[700px]' alt="" />
                </div>
            </div>

            <div className='mb-36'>
                <p className='text-center text-3xl font-semibold text-[#FFCA1D] mb-20 w-[460px] mx-auto leading-tight'>Integrate <span className='text-[#565656]'>with your existing tools in a few clicks</span></p>
                <div className='flex items-center mx-auto w-max mb-16'>
                    <img src="/assets/logo/zoom.png" className='mr-16 hover:scale-110 duration-300' alt="" />
                    <img src="/assets/logo/creativecloud.png" className='mr-16 hover:scale-110 duration-300' alt="" />
                    <img src="/assets/logo/afaanih.png" className='mr-16 hover:scale-110 duration-300' alt="" />
                    <img src="/assets/logo/zoom.png" className='mr-16 hover:scale-110 duration-300' alt="" />
                    <img src="/assets/logo/gdrive.png" className='hover:scale-110 duration-300' alt="" />
                </div>
                <a className='bg-[#FFCA1D] hover:bg-[#ecce68] duration-300 py-3 px-12 rounded-xl font-semibold mx-auto block w-max'>View All</a>
            </div>

            <div className='flex items-center justify-center container mx-auto mb-28'>
                <img src="/assets/images/leftfeature.png" className='w-[550px] mr-28' alt="" />
                <div>
                    <p className='text-[#4A4A4A] text-4xl font-semibold'>Save time with Automations</p>
                    <div className='w-[60px] h-1 bg-[#FFCA1D] rounded-full my-5'></div>
                    <p className='text-[#575757] text-lg w-[500px]'>Automate the repetitive work in seconds so you can avoid human error and focus on what matters. It gives the impression of software that its highly automated which implies that it is good for client for who want to save time and manage team members easily.</p>
                </div>
            </div>

            <div className='bg-[#FAFAFF] mb-36'>
                <div className='flex items-center justify-between container mx-auto py-14'>
                    <div>
                        <p className='text-[#4A4A4A] text-4xl font-semibold'>Visualize work with Views</p>
                        <div className='w-[60px] h-1 bg-[#686DF1] rounded-full my-5'></div>
                        <p className='text-[#575757] text-lg w-[490px]'>View data as a map, calendar, timeline, kanban, and more The easy-to-use, visual interface lets any team member jump in and get started, no training required.</p>
                    </div>
                    <img src="/assets/images/calendar.png" className='w-[500px]' alt="" />
                </div>
            </div>

            <div className='flex items-center justify-center container mx-auto mb-28'>
                <img src="/assets/images/senyum.png" className='w-[550px] mr-28' alt="" />
                <div>
                    <p className='text-[#4A4A4A] text-4xl font-semibold'>24/7 Customer Support</p>
                    <div className='w-[60px] h-1 bg-[#FFCA1D] rounded-full my-5'></div>
                    <p className='text-[#575757] text-lg w-[500px] mb-7'>Our team is here to give you personalized support within the hour available 24/7. In accordance with our commitment to providing superior and professional service. Join daily live webinars, watch our tutorials, or browse through our knowledge base</p>
                    <a className='bg-[#FFCA1D] hover:bg-[#ecce68] duration-300 py-3 px-10 rounded-xl font-semibold block w-max'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;
