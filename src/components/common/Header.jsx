// import React from 'react'
import { styled } from "styled-components";
import homePicture from '../../assets/images/home-picture1.jpg'
const HOME_PICTURE=homePicture
const Header = () => {
  return (
    <div className='h-screen w-full'>
        <div className=' w-[90%] margin-auto h-full flex lg:static justify-center'>
            <section className='z-[2] h-[28rem] lg:h-fit relative bg-[rgba(245,245,220,0.5)] lg:absolute pt-[4.8rem] md:pt-0 mt-[8.5rem] md:mt-[16rem] lg:mt-0 w-[95%] mx-auto md:w-[48rem] md:bg-transparent flex-wrap lg:flex-nowrap lg:m-0 lg:left-24 bottom-24 lg:bottom-72  lg:w-[45%]'>
                <p className='md:text-[2.5rem] text-[2rem] font-bold font-prompt'>
                    Welcome to Unknown writers self-Service Portal
                </p>
                <small className='text-xl leading-9'>
                Access our services easily and quickly. Create an account and get to enjoy Unknown writers online services.
                </small>
                <div className="md:ml-20 lg:ml-0">
                    <button className='rounded-3xl lg:hidden px-5 py-3 mt-4 bg-btlinks text-white text-xl hover:bg-green-700'>
                        Login
                    </button>
                    <button className='md:ml-7 rounded-3xl px-5 py-3 mt-4 bg-btlinks text-white text-xl hover:bg-green-700'>
                        Create account
                    </button>
                </div>
            </section>

            <Div className="absolute   w-[28rem] h-[28rem] right-20 lg:right-24 top-52 rounded-full p-4  lg:inline-block ">
                
            </Div>
            
        </div>
    </div>
  )
}

const Div=styled.div`
    // background-color:blue;
    background:url(${HOME_PICTURE});
    background-attachment:scroll;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center center;
    box-shadow:inset 0px 0px 10px #f5f5dc;
`;

export default Header