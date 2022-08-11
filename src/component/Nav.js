import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', txt: 'Home' },
  { to: '/starred', txt: 'Starred' },
];

const Nav = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.txt}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Nav;
