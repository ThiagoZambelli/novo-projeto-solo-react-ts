import React from 'react';
import styles from './PaginaForja.module.scss';
import FormularioNomes from 'components/FormularioNomes';

function PaginaForja() {
  return (
    <section className={styles.forja}>
      <FormularioNomes />
    </section>
  )
}

export default PaginaForja