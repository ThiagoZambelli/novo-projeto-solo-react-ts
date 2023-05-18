import FormularioCriacao from 'components/FormularioCriacao';
import React from 'react';
import styles from './PaginaForja.module.scss';

function PaginaForja() {
  return (
    <section className={styles.forja}>
      <FormularioCriacao />
    </section>
  )
}

export default PaginaForja