import React, { useEffect, useState } from 'react';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isTop, setIsTop] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
              setIsTop(false);
            } else {
              setIsTop(true);
            }
          });
    }, [])

    return (
        <header className={`font-nunitosans fixed z-20 w-full duration-300 xl:px-0 px-5 ${isTop ? '' : 'bg-blue-100/80 backdrop-blur shadow'}`}>
            <nav className={`relative z-20 mx-auto container flex justify-between items-center duration-300 ${isTop ? 'py-16' : 'py-4'}`}>
                <img src="/assets/logo/logo.png" className='w-[140px] md:w-[202px] z-20' alt="" />
                <ul className={`hidden lg:flex items-center xl:text-lg font-medium tracking-wider ${isTop ? 'text-white' : 'text-black'}`}>
                    <li className='flex items-center mr-6 xl:mr-10'>Product <img src="/assets/icons/row-bottom.svg" className='ml-2' alt="" /></li>
                    <li className='flex items-center mr-6 xl:mr-10'>Solution <img src="/assets/icons/row-bottom.svg" className='ml-2' alt="" /></li>
                    <li className='flex items-center mr-6 xl:mr-10'>Enterprise</li>
                    <li className='flex items-center'>Pricing</li>
                </ul>
                <div className='hidden lg:block'>
                    <button className='py-3 px-9 rounded-xl font-semibold text-[#757575] hover:bg-slate-200 duration-300 mr-2'>Login</button>
                    <button className='bg-[#FFCA1D] hover:bg-[#ecce68] py-3 px-9 rounded-xl font-semibold duration-300'>Sign Up</button>
                </div>
                <div className='block lg:hidden'>
                    <img src="/assets/icons/hambergermenu.svg" onClick={() => setIsOpen(!isOpen)} alt="" />
                    <ul className={`fixed left-0 top-0 duration-300 ${isOpen ? 'w-[80vw]' : 'w-0'} h-screen overflow-hidden bg-blue-100 flex flex-col justify-center items-center text-lg`}>
                        <li className='mb-5'>Product</li>
                        <li className='mb-5'>Solution</li>
                        <li className='mb-5'>Enterprise</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;
