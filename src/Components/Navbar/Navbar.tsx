import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={s.nav}>
                <NavLink className={s.nav__link} to={"/prejunior"} activeClassName={s.active}>preJunior</NavLink>
                <NavLink className={s.nav__link} to={"/junior"} activeClassName={s.active}>Junior</NavLink>
                <NavLink className={s.nav__link} to={"/junior_plus"} activeClassName={s.active}>Junior+</NavLink>
        </div>
    )
}


export default Navbar;