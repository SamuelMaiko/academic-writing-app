import NavBar from '../components/common/NavBar'
import Header from '../components/common/Header'
import { useMyCustomHook } from '../context/MyContext'

const HomePage = () => {
  const {show}=useMyCustomHook()
  return (
    <div className='relative h-full w-full '>
        <NavBar />
        <div className='h-[screen-5rem] '>
        <Header /> 
        </div>
        <div className={`${show?"visible":"invisible opacity-0"} opacity-1 transition-all duration-500 absolute lg:hidden z-[4] bg-white right-0 left-0 bottom-0 top-[5rem]`}>

        </div>
    </div>
  )
}

export default HomePage