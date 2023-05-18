import React from 'react'
import NavHeader from './NavHeader'
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>      
      <NavHeader />
    </header>
  )
}

export default Header