import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import DropdownOne from "../Account/DropdownOne.tsx";
import Cookies from 'js-cookie';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status based on cookies
  useEffect(() => {
    const accessToken = Cookies.get('AT');
    setIsLoggedIn(!!accessToken); // Sets isLoggedIn to true if token exists
  }, []);

  return (
      <div className='sticky top-0 left-0 right-0 z-[1000]'>
        <div className="flex justify-between items-center px-[5%] py-[1rem] bg-[#1A1B1E]">
          <div className="flex items-center gap-5">
            <Navbar />
          </div>
          <div className="">
            <h1 className='text-[2rem] mr-[15rem] text-center text-white'>GameCloud.</h1>
          </div>
          <div className='flex gap-6 items-center'>
            {isLoggedIn ? (
                <DropdownOne />  // Show the dropdown if logged in
            ) : (
                <>
                  <Link to='/login' className='text-white font-bold'>Login</Link>
                  <p className='text-white'>/</p>
                  <Link to='/register' className='text-white font-bold'>Register</Link>
                </>
            )}
          </div>
        </div>
      </div>
  );
}

export default Header;
