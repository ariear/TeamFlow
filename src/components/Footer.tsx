import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='flex justify-between container mx-auto py-20 font-nunitosans'>
            <div>
                <img src="/assets/logo/Company_Logo.png" className='mb-4' alt="" />
                <p className='text-[#5C5E87] mb-10'>All Rights Reserved © teamflow.com</p>
                <p className='text-[#2B3377] mb-2 font-semibold text-lg'>Address</p>
                <p className='text-[#5C5E87] mb-10'>26 W 12th St. New York, NY 10342, NYC</p>
                <p className='text-[#2B3377] mb-3 font-semibold text-lg'>Social Media</p>
                <div className='flex items-center'>
                    <img src="/assets/icons/fb.svg" alt="" className='mr-3' />
                    <img src="/assets/icons/ig.svg" alt="" className='mr-3' />
                    <img src="/assets/icons/twitter.svg" alt="" className='mr-3' />
                    <img src="/assets/icons/yt.svg" alt="" />
                </div>
            </div>
            <div className='text-[#5C5E87] text-lg'>
                <p className='text-[#2B3377] mb-6 font-semibold'>Product</p>
                <p className='mb-4'>Product</p>
                <p className='mb-4'>Pricing</p>
                <p className='mb-4'>Enterprise</p>
                <p className='mb-4'>Partners</p>
                <p className='mb-4'>Affiliate</p>
                <p className='mb-4'>Integrations</p>
                <p className='mb-4'>Developers</p>
                <p className='mb-4'>Students</p>
                <p>Work OS</p>
            </div>
            <div className='text-[#5C5E87] text-lg'>
                <p className='text-[#2B3377] mb-6 font-semibold'>Team</p>
                <p className='mb-4'>About Us</p>
                <p className='mb-4'>Contact Us</p>
                <p className='mb-4'>Careers</p>
                <p className='mb-4'>Find a Partner</p>
                <p>In the News</p>
            </div>
            <div className='text-[#5C5E87] text-lg'>
                <p className='text-[#2B3377] mb-6 font-semibold'>Solutions</p>
                <p className='mb-4'>Project Management</p>
                <p className='mb-4'>Marketing</p>
                <p className='mb-4'>CRM and Sales</p>
                <p className='mb-4'>Software Development</p>
                <p className='mb-4'>Constructions</p>
                <p className='mb-4'>Creative Production</p>
                <p className='mb-4'>Remote Work</p>
                <p className='mb-4'>HR</p>
                <p className='mb-4'>IT</p>
                <p className='mb-4'>See More Solutions</p>
                <p>See More Solustions</p>
            </div>
            <div className='text-[#5C5E87] text-lg'>
                <p className='text-[#2B3377] mb-6 font-semibold'>Resources</p>
                <p className='mb-4'>Knowledge Base</p>
                <p className='mb-4'>Guides</p>
                <p className='mb-4'>Daily Webinars</p>
                <p className='mb-4'>Community</p>
                <p className='mb-4'>Customer Stories</p>
                <p className='mb-4'>Templates</p>
                <p className='mb-4'>Profesionals Services</p>
                <p className='mb-4'>Video Tutorials</p>
                <p className='mb-4'>Blog</p>
                <p className='mb-4'>Podcast</p>
            </div>
        </footer>
    )
}

export default Footer;
