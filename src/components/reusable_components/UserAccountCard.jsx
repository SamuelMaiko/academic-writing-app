import {NavLink} from 'react-router-dom'

const UserAccountCard = ({firstname,lastname,email,user_status,work_id,profile_url,icon}) => {
    const userCardStyles={
        // background:`url(${profile_url})`,
        backgroundSize:'cover',
        backgroundAttachment:'scroll',
        backgroundPosition:'center center',
        backgroundRepeat:"no-repeat"


    } 
    if (profile_url==null){
        profile_url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
  return (
    <div>
        {/* w-[19rem] */}
        <div className="user-card  bg-secondary flex flex-col items-center p-4 rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[2px_4px_8px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-pointer">
            <div className="">
                <div className=" relative border-[2px] border-blue-800 h-[110px] w-[110px] rounded-full">
                    <div className='w-full h-full overflow-hidden flex items-center justify-center rounded-full'>                        
                        <img style={userCardStyles} src={`${profile_url}`} className=' w-full h-full'></img>
                    </div>
                    <p className='absolute top-0 right-0 text-white text-[1.2rem] font-medium bg-blue-800 p-1 rounded-full'>{icon}</p>
                </div>
            </div>
            <p className='names text-lg font-medium'>{firstname} {lastname}</p>
            <p className='names'>{email}</p>
            <p className={`${user_status=="Active"?"text-green-500":"text-red-500 names"} text-md `}>{user_status}</p>

            <button type="button" className="seemore-btn transition-all duration-500 py-2 px-5 bg-blue-800 rounded-lg text-white font-medium"><NavLink to={`/users/${work_id}`}>View details</NavLink></button>
        </div>

        {/* ___________________________________________Modal for more info */}
    </div>
  )
}

export default UserAccountCard