// components/Header.tsx

import React from 'react';

interface HeaderProps {
  title: string;
  menuItems: string[];
}

function Header({ title, menuItems }: HeaderProps) {
  return (
    <header>
      <h1>333</h1>
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
