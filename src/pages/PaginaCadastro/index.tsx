import React, { ReactNode } from 'react'
import styles from './PaginaCadastro.module.scss';
import NomesRegistrados from 'components/NomesRegistrados';
import IndiciePaginasCadastro from 'components/IndiciePaginasCadastro';

interface Props {
    children: ReactNode;
  }

function PaginaCadastro({children}:Props) {
  return (
    <section className={styles.cadastro}>
      <div className={styles.cadastro__header} >
        <NomesRegistrados />
        <IndiciePaginasCadastro />
      </div>
        {children}
    </section>
  )
}

export default PaginaCadastro