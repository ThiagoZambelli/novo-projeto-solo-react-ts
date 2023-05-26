import React from 'react'
import styles from './DescricaoProfissao.module.scss';
import { GiStrong } from 'react-icons/gi'
import usePegaProfissao from 'state/hooks/usePegaProfissao';
import usePegaHabilidadesProfissao from 'state/hooks/usePegaHabilidadesProfissao';
import DescricaoHabilidades from 'components/DescricaoHabilidade';


function DescricaoProfissao() {
  const profissao = usePegaProfissao();
  const listaHabilidades = usePegaHabilidadesProfissao();  

  return (
    <div className={styles.descricao} key={profissao.name}>
      <section className={styles.descricao__profissao}>
        {profissao.name !== '' ? <h2>{profissao.name} <GiStrong /></h2> : ''}
        <div >{profissao.description}</div>
      </section>
      {listaHabilidades[0].name !== ''
        ? <section className={styles.descricao__habilidadesProfissao}>
          {profissao.name !== '' ? <h2>Habilidades de - {profissao.name}</h2> : ''}
          <DescricaoHabilidades lista={listaHabilidades} />
        </section>
        : ''}
    </div>
  )
}

export default DescricaoProfissao