import InputField from "./InputField"

const InfoDisplay = ({title, detail, isEditing, icon}) => {
  return (
    <div>
        <div className="flex items-center justify-between w-[35rem]">
            <div className="text-lg flex items-center"><span className="text-md mr-2">{icon}</span><span>{title}</span></div>
            <div className="text-left text-[1.02rem] w-[11rem]">
                {
                    isEditing && title!=="Work ID"?(
                        
                       <InputField isEditing={isEditing} title={title} detail={detail}/> 
                    ):
                    detail
                }
            </div>
        </div>
    </div>
  )
}

export default InfoDisplay