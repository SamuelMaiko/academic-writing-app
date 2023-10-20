import ProfilePicture from '../../assets/images/home-picture2.jpeg'
import {NavLink} from 'react-router-dom'

const UserAccountCard = ({firstname,lastname,email,user_status,work_id,profile_url,icon}) => {
    const userCardStyles={
        // background:`url(${profile_url})`,
        backgroundSize:'cover',
        backgroundAttachment:'scroll',
        backgroundPosition:'center center',
        backgroundRepeat:"no-repeat"


    }
  return (
    <div>
        {/* w-[19rem] */}
        <div className="user-card  bg-secondary flex flex-col items-center p-4 rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:scale-[1.01] cursor-pointer">
            <div className="">
                <div className=" relative border-[2px] border-blue-800 h-[110px] w-[110px] rounded-full">
                    <div className='w-full h-full overflow-hidden flex items-center justify-center rounded-full'>                        
                        <img style={userCardStyles} src={`${profile_url}`} className='w-full h-full'></img>
                    </div>
                    <p className='absolute top-0 right-0 text-white text-[1.2rem] font-medium bg-blue-800 p-1 rounded-full'>{icon}</p>
                </div>
            </div>
            <p className='text-lg font-medium'>{firstname} {lastname}</p>
            <p>{email}</p>
            <p className={`${user_status=="Active"?"text-green-500":"text-red-500"} text-md `}>{user_status}</p>

            <button type="button" className="seemore-btn py-2 px-5 bg-blue-800 rounded-lg text-white font-medium"><NavLink to={`/users/${work_id}`}>See more</NavLink></button>
        </div>

        {/* ___________________________________________Modal for more info */}
    </div>
  )
}

export default UserAccountCard