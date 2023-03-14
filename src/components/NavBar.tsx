import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Logo from 'assets/images/Logo.png';

const NavBar: FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex items-baseline justify-between pt-2 md:w-[50%] xl:w-[35%]">
      <Link to="/">
        <img src={Logo} alt="logo" width={48} height={48} />
      </Link>
      <nav>
        <ul className="flex items-center gap-7">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  isActive ? 'border-b-2 border-b-[#FF2625]' : null,
                  'text-2xl',
                ].join(' ')
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {pathname === '/' && (
              <a className="text-2xl" href="#exercises">
                Exercises
              </a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
