const TitleManager = ({title}) => {
  return (
    <div className="w-full mb-4">
      <div className="w-full h-[5rem] flex justify-center lg:justify-normal items-center border-t-0 border-b-1 border-b-[rgba(0,0,0,0.14)] border-t-[rgba(0,0,0,0.14)]">
        <h1 className="font-prompt text-4xl text-tcolor md:text-[3rem] text-[2rem] font-light">{title}</h1>
      </div>
    </div>
    
  )
}

export default TitleManager