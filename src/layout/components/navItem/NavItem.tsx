import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navItem.module.css';

interface NavItemProps {
    label: string,
    to: string
}

const NavItem:React.FC<NavItemProps> = (props: NavItemProps) => {
  const { label, to } = props;

  return (
    <NavLink
      to={to}
      className={style.navItem}
    >
      <span className={style.navLabel}>{label}</span>
    </NavLink>
  );
};

export default NavItem;