import styles from './NavLink.module.scss';
import { Link, useLocation } from 'react-router-dom';
import useResetValue from 'state/hooks/useResetValue';

interface INavLink {
    to: string,
    name: string
}



function NavLink({ to, name }: INavLink) {
    const atual = useLocation();
    const reset = useResetValue();


    return (
        <Link onClick={reset} className={`${styles.link} ${atual.pathname === to ? styles.linkAtivo : ''}`} to={to}>
            {name}
        </Link>
    )
}

export default NavLink