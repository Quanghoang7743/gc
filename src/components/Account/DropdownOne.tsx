import {useState} from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User} from "@nextui-org/react";


import Modal from './Setting/Seting';



function DropdownOne() {
  const [isModalOpen, setModalOpen] = useState(false);


  const handleSettingsClick = () => {
    setModalOpen(true);
  };






  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove('AT');
      Cookies.remove('RT');
      Cookies.remove('data');
      setIsLoggedIn(false); // Update the state after logout
      console.log("User logged out successfully");
      window.location.reload(); // Optional: to refresh the app state
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };


  return (
      <div>
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "",
                  size: "sm"
                }}
                className=" transition-transform"
                description=""
                name=""
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Profile</p>

            </DropdownItem>
            <DropdownItem key="settings" onClick={handleSettingsClick}>
              <div className='flex items-center gap-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-7 h-7"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                      d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573
                      1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756
                      .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31
                      -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724
                      1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065
                      -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543
                      .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                  ></path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                </svg>
                <h1>Setting</h1>
              </div>
            </DropdownItem>
            <DropdownItem key="payment" >
              <div className='flex items-center gap-2'>
                <svg width="24px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                        d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569
                        19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z"
                        stroke="#000000" stroke-width="2"></path>
                    <path d="M3 10H21" stroke="#000000" stroke-width="2"></path>
                    <path d="M14 15L17 15" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
                  </g>
                </svg>
                <h1>Payment</h1>
              </div>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              <div className='flex items-center gap-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-7 h-7"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                      d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                  ></path>
                  <path d="M9 12h12l-3 -3"></path>
                  <path d="M18 15l3 -3"></path>
                </svg>
                <h1>Log Out</h1>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Modal component */}
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
      </div>
  );
}

export default DropdownOne;

