import React, { ReactNode } from 'react'
import styles from './PaginaCadastro.module.scss';
import NomesRegistrados from 'components/NomesRegistrados';

interface Props {
    children: ReactNode;
  }

function PaginaCadastro({children}:Props) {
  return (
    <section className={styles.cadastro}>
        <NomesRegistrados />
        {children}
    </section>
  )
}

export default PaginaCadastro