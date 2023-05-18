import React from 'react'
import NavLink from './NavLink'
import styles from './NavHeader.module.scss';

function NavHeader() {

  const paginas = [
    {
      to: '/',
      nome: 'Inicio'
    },
    {
      to: '/forja',
      nome: 'Forja'
    }
  ]

  return (
    <ul className={styles.navHeader}>
      {paginas.map(pagina => <NavLink
        key={pagina.nome}
        to={pagina.to}
        name={pagina.nome} 
        />)}
    </ul>
  )
}

export default NavHeader