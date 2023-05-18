import React from 'react'
import lithtleZ from 'assets/logoLithtleZ.svg';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
        <img src={lithtleZ} alt="Logo da LithtleZ" />
        <p>&#169; Projeto desenvolvido por: <Link className={styles.footer__ancora} to={'https://meu-portfolio-neon-nu.vercel.app/'}>Thiago Zambelli</Link></p>
    </footer>
  )
}

export default Footer