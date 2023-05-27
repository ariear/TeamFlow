import React from 'react';

const Nav: React.FC = () => {
    return (
        <header className='font-nunitosans'>
            <nav className='relative z-20 mx-auto py-16 px-3 container flex justify-between items-center'>
                <img src="/assets/logo/logo.png" alt="" />
                <ul className='flex items-center text-lg font-medium tracking-wider'>
                    <li className='flex items-center text-white mr-10'>Product <img src="/assets/icons/row-bottom.svg" className='ml-2' alt="" /></li>
                    <li className='flex items-center text-white mr-10'>Solution <img src="/assets/icons/row-bottom.svg" className='ml-2' alt="" /></li>
                    <li className='flex items-center text-white mr-10'>Enterprise</li>
                    <li className='flex items-center text-white'>Pricing</li>
                </ul>
                <div>
                    <button className='py-3 px-9 rounded-xl font-semibold text-[#757575] hover:bg-slate-200 duration-300 mr-2'>Login</button>
                    <button className='bg-[#FFCA1D] hover:bg-[#ecce68] py-3 px-9 rounded-xl font-semibold duration-300'>Sign Up</button>
                </div>
            </nav>
        </header>
    )
}

export default Nav;
