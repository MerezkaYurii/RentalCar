import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <div className={s.container}>
      <a className={s.logo} href="/">
        <svg width="104" height="16" className={s.logoIcon}>
          <use href="/RentalCarLogo.svg"></use>
        </svg>
      </a>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
