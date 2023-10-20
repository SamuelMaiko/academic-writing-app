import React, { useEffect, useState,useRef } from 'react'

const InputField = ({title, detail, isEditing}) => {
    
    const [currentValue, setCurrentValue] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [showPhoneError,setShowPhoneError]=useState(false)
    const [showEmailError, setShowEmailError] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [phoneNoError, setPhoneNoError] = useState("")
    const firstNameRef=useRef()

    useEffect(()=>{
        if (title=="First Name"){
            setCurrentValue(detail)
            setFirstName(detail)
            firstNameRef.current.focus()
        }
        else if (title=="Last Name"){
            setCurrentValue(detail)
            setLastName(detail)
        }
        else if (title=="Phone number"){
            setCurrentValue(detail)
            setPhoneNumber(detail)
        }
        else if (title=="Email"){
            setCurrentValue(detail)
            setEmail(detail)
        }
        else if (title=="Role"){
            setCurrentValue(detail)
        }

        

    },[])

    // _____________________validate email 
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
          setShowEmailError(true)
          setEmailError('Please enter a valid email address.');
        } else {
          setShowEmailError(false)
          setEmailError('');
        }
      };
    //   ______________________validate phone number
    const validatePhoneNumber=(phoneNo)=>{
        if (phoneNo.length!==13){
            setShowPhoneError(true)
            setPhoneNoError("Please enter a valid phone number.")
        }
        else if(phoneNo.length===13){
            setShowPhoneError(false)
        }
    }
    // _________________________input onchange
    const handleInputChange=(e)=>{
        setCurrentValue(e.target.value)
        if (title=="First Name"){
            setFirstName(e.target.value)
        }
        else if (title=="Last Name"){
            setLastName(e.target.value)
        }
        else if (title=="Phone number"){
            setPhoneNumber(e.target.value)
            validatePhoneNumber(e.target.value)
        }
        else if (title=="Email"){
            setEmail(e.target.value)
            validateEmail(e.target.value)
        }
        // else if (title=="Role"){
        //     setFirstName(e.target.value)
        // }
        console.log(firstName,lastName,phoneNumber,email)

    }
  return (
    <div>
        {
            title!=="Role" ?(
                <>
        <input ref={firstNameRef} onChange={handleInputChange} type="text"
            className={`${isEditing?"opacity-1":"opacity-0"} transition-colors-opacity duration-300 w-[9rem] border-[1px] outline-blue-500 outline-[1px] border-[rgba(0,0,0,0.2)] rounded-lg pl-2 p-1 py-1`}
            value={currentValue}
            >
        </input>
        <p className={`${showPhoneError?"":"hidden"} text-sm text-red-500`}>{phoneNoError}</p>
        <p className={`${showEmailError?"":"hidden"} text-sm text-red-500`}>{emailError}</p>
        </>
        ):(
            <select onChange={handleInputChange} type="text"
            className={`${isEditing?"opacity-1":"opacity-0"} transition-colors-opacity duration-300 w-[9rem] border-[1px] outline-blue-500 outline-[1px] border-[rgba(0,0,0,0.2)] rounded-lg pl-2 p-1 py-1`}
            value={currentValue}
            >
                <option value="Admin" className="rounded-lg">Admin</option>
                <option value="Writer" className="rounded-lg">Writer</option>
        </select>
        )
        }
    </div>
  )
}

export default InputField