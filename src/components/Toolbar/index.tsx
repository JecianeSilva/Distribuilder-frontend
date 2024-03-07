import React, { ReactNode, useState } from 'react';
import { ToolbarContainer, MenuItem, MenuList } from "./styles";

import { default as MenuIcon } from '../../assets/icons/menu.svg';
import { default as SquareIcon } from '../../assets/icons/square.svg';
import { default as DeviceIcon } from '../../assets/icons/device.svg';

interface menuProps {
  isOpen: boolean;
}

interface MenuItemsProps {
  key: number;
  icon: string;
  subItemMenu?: ReactNode;
  hasSubItem?: boolean;
  // onPress?: () => {};
}

const menuItemsArray: MenuItemsProps[] = [
  {
    key: 1,
    icon: SquareIcon,
  },
  {
    key: 2,
    icon: DeviceIcon,
    // onPress: handleShowDevice(),
  },
];

const handleShowDevice = () => {
  console.log('teste')
}
const Toolbar: React.FC = () => {
  return (
    <ToolbarContainer>
      <MenuList>
        <button
          id="toggle-menu-button"
          className="toogle-menu"
        >
          <img src={MenuIcon} alt="" />
        </button>
        {menuItemsArray.map(
          (item) => (
            <MenuItem hasSubItem={item.hasSubItem}>
              <img src={item.icon} alt="" />

            </MenuItem>)
        )}
      </MenuList>
    </ToolbarContainer>
  )
}
export default Toolbar;