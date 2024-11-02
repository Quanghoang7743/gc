import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import { Link } from 'react-router-dom';


function DropdownOne() {
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
            <p className="font-bold">Signed in as</p>
            <Link to='#' className='text-blue-500'>login now</Link>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="sefety_settings">Safety & Privacy</DropdownItem>
          <DropdownItem key="audioVD">
            Audio & Video
          </DropdownItem>
          <DropdownItem key="accessibility">Accessbility</DropdownItem>
          <DropdownItem key="input">Input</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default DropdownOne
