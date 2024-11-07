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
      console.log("User logged out successfully");
      window.location.reload();  // Reloads the page after logging out
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
