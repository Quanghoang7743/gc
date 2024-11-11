import { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";

import { signOut } from 'firebase/auth';
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
            }}
            className="transition-transform"
            description=""
            name=""
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Profile</p>
            
          </DropdownItem>
          <DropdownItem key="settings" onClick={handleSettingsClick}>
            My Settings
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default DropdownOne;
