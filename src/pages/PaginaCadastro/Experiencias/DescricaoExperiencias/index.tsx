import React from 'react'
import styles from './DescricaoExperiencias.module.scss';
import usePegaExperiencia from 'state/hooks/usePegaExperiencia';
import { GiArchiveResearch } from 'react-icons/gi'


function DescricaoExperiencias() {
  const experiencia = usePegaExperiencia();

  return (
    <div className={styles.descricao}>
      <section className={styles.descricao__race}>
        {experiencia.title !== '' ? <h2>{experiencia.title} <GiArchiveResearch /></h2> : ''}
        <div >{experiencia.description}</div>
      </section>
    </div>
  )
}

export default DescricaoExperiencias