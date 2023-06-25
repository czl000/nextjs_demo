// components/Header.tsx

import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';

interface HeaderProps {
  title: string;
  menuItems: string[];
}

function Header({ title, menuItems }: HeaderProps) {
  return (
    <header>
      <Menu>
        <MenuHandler>
          <Button>Open Menu</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
      <div className="text-center">
        <button className="h-10 w-10 p-2 m-2 rounded bg-indigo-700  font-semibold text-white  transform  hover:bg-red-800 duration-300  hover:scale-125">
          1
        </button>
        <button className="h-10 w-10 p-2 m-2 rounded bg-indigo-700  font-semibold text-white  transform  hover:ring hover:bg-red-800 duration-300 hover:rotate-45">
          2
        </button>
        <button className="h-10 w-10 p-2 m-2 rounded bg-indigo-700  font-semibold text-white hover:ring   focus:invisible    hover:bg-red-800 duration-300   ">
          3
        </button>
      </div>

      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
