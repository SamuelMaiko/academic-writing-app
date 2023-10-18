import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
const UptakenWorkCard = ({ID,TITLE, STATUS}) => {
    // const STATUS="Doner"
  return (
    <div className='w-full'>
        <div className="uptaken relative flex justify-between w-full h-[7rem] rounded-lg overflow-y-scroll bg-secondary border-2 border-[#c3c6ce] transition-all duration-500 shadow-[0_0_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_10px_0_rgba(0,0,0,0.28)] overflow-hidden">
            <div className="card-details text-tcolor h-full overflow-y-scroll"> 
                <p className="underline ml-4 text-xl hover:text-black cursor-pointer">{ID}</p>
                <p className="ml-4 text-lg">{TITLE}</p>
            </div>

            
                {
                    STATUS=="Done"?
                    <button className="absolute right-0 bg-[#ff8c00] text-[#fff] px-2">Done</button>:
                    <button className="absolute right-0 bg-[#008000] text-[#cccccc] px-2">In progress</button>
                }

            

            <div className="flex items-center cursor-pointer">
            <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className='border-none'>
            
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
                </Button>
            </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" textValue="user" ><span className='text-xl'>Submit</span></DropdownItem>
        <DropdownItem key="copy" textValue="user"><span className='text-xl text-red-600'>Remove</span></DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
    </div>
        
        </div>

  )
}

export default UptakenWorkCard