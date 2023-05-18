import styles from './NavLink.module.scss';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

interface INavLink {
    to: string,
    name: string
}



function NavLink({ to, name }: INavLink) {
    const atual = useLocation();
    

    return (
        <Link className={`${styles.link} ${atual.pathname === to ? styles.linkAtivo : ''}`} to={to}>
            {name}
        </Link>
    )
}

export default NavLink