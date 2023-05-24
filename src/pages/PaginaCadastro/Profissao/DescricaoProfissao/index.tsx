import React from 'react'
import styles from './DescricaoProfissao.module.scss';
import { GiArchiveResearch } from 'react-icons/gi'
import usePegaProfissao from 'state/hooks/usePegaProfissao';


function DescricaoProfissao() {
  const profissao = usePegaProfissao();

  return (
    <div className={styles.descricao}>
      <section className={styles.descricao__profissao}>
        {profissao.name !== '' ? <h2>{profissao.name} <GiArchiveResearch /></h2> : ''}
        <div >{profissao.description}</div>
      </section>
    </div>
  )
}

export default DescricaoProfissao