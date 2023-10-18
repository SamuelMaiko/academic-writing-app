import AdminTitleManager from '../../reusable_components/AdminTitleManager'
import styled from 'styled-components'
import BgImg from '../../../assets/images/bg-banner.png'
const BG_IMG=BgImg


const Statistics = () => {
  return (
    <div className=' relative w-full h-screen overflow-hidden'>
        <div className="w-[90%] mx-auto">
            <div>
                <AdminTitleManager title="Statistics" />
            </div>
            <Div className="absolute right-[-2rem] -bottom-[3.2rem] h-[22rem] w-[22rem] rounded-full">

            </Div>
            <Div className="absolute -left-[18rem] rotate-45 top-10 h-[22rem] w-[22rem] rounded-full">

            </Div>


            <div className="absolute top-[50%] translate-y-[-50%] z-10 w-[80%] mx-auto grid grid-cols-3 ">
                <div className="flex flex-col items-center">
                    <h1 className="text-[8rem] font-semibold">25</h1>
                    <p className="uppercase mb-4">Registered writers</p>
                    <p className="h-4 w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="">
                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                        </svg>
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-[8rem] font-semibold">30</h1>
                    <p className="uppercase mb-4">All Completed Work</p>
                    <p className="h-4 w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="">
                        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                        </svg>
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-[8rem] font-semibold">16</h1>
                    <p className="uppercase mb-4">Pending Submissions</p>
                    <p className="h-4 w-20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="">
                        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                        </svg>
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

const Div=styled.div`
background-image:url(${BG_IMG});
background-attachment:scroll;
background-repeat:no-repeat;
background-size:contain;
background-position:center center;
box-shadow:inset 0px 0px 10px #f5f5dc;
`;

export default Statistics