
import {Button} from '@nextui-org/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import DropdownOne from '../dropdown/DropdownOne'
import Navbar from './navbar/Navbar'



function Header() {
  return (
    <div className='sticky top-0 left-0 right-0 z-[100]'>
     <div className="flex justify-between items-center px-[5%] py-[1rem] bg-[#1A1B1E]">
        <div className="flex items-center gap-5">
            <h1 className='text-[2rem] text-white'>GameCloud.</h1>
            <Button className='bg-black text-white font-bold hover:bg-slate-600'>Cloud Gaming <FontAwesomeIcon icon={faGamepad}/></Button>
            <Navbar/>
        </div>
        
        <div className='flex gap-6 items-center'>
          <Button className='px-[5rem] text-black font-bold rounded-md bg-[#5E9400]'>Login</Button>
          
          <DropdownOne/>
        </div>
    </div> 
    </div>
  )
}

export default Header
