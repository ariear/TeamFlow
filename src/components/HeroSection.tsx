import React from 'react';

const HeroSection: React.FC = () => {
    window.addEventListener('mousemove', (event: MouseEvent) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const listParallax = document.querySelectorAll('.parallax') as NodeListOf<HTMLElement>;
      
        const speed = 0.04;
        const x1 = (window.innerWidth / 2 - mouseX) * speed;
        const y1 = (window.innerHeight / 2 + mouseY) * speed;
      
        listParallax[0].style.transform = `translateX(${x1}px) translateY(${y1}px)`;
      
        const speed2 = 0.03;
        const x2 = (window.innerWidth / 2 + mouseX) * speed2;
        const y2 = (window.innerHeight / 2 + mouseY) * speed2;
      
        listParallax[2].style.transform = `translateX(${x2}px) translateY(${y2}px)`;
      
        const speed3 = 0.05;
        const x3 = (window.innerWidth / 2 + mouseX) * speed3;
        const y3 = (window.innerHeight / 2 - mouseY) * speed3;
      
        listParallax[3].style.transform = `translateX(${x3}px) translateY(${y3}px)`;
      
        const speed4 = 0.05;
        const x4 = (window.innerWidth / 2 - mouseX) * speed4;
        const y4 = (window.innerHeight / 2 - mouseY) * speed4;
      
        listParallax[1].style.transform = `translateX(${x4}px) translateY(${y4}px)`;
      });      
    
    return (
        <div className='relative z-10 font-nunitosans flex items-center justify-between container mx-auto pt-8'>
            <div>
                <p className='text-lg bg-white text-[#606060] w-max py-3 px-4 rounded-xl mb-4'>👋 Welcome to TeamFlow</p>
                <p className='text-white font-extrabold text-6xl w-[560px] tracking-wide leading-[1.2]'>Work the way that works for you</p>
                <div className='w-[70px] h-2 bg-[#3ADAD9] rounded-full my-7'></div>
                <p className='text-white text-[24px] font-light w-[470px] mb-7'>Create, Build, Collaborate and ship products very faster</p>
                <button className='bg-[#FFCA1D] hover:bg-[#ecce68] duration-300 py-3 px-9 text-lg rounded-xl font-semibold'>Get Started</button>
            </div>
            <img src="/assets/images/rightcontent.png" className='w-[810px]' alt="" />

            <img src="/assets/particles/bunder.svg" className='parallax absolute top-14 left-72' alt="" />
            <img src="/assets/particles/kotak.svg" className='parallax absolute top-24 left-1/2' alt="" />
            <img src="/assets/particles/bunder2.svg" className='parallax absolute top-80 left-1/3' alt="" />
            <img src="/assets/particles/segitiga.svg" className='parallax absolute bottom-24 left-1/4' alt="" />
        </div>
    )
}

export default HeroSection;
