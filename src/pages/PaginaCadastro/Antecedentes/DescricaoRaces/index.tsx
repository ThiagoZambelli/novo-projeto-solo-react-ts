import React from 'react'
import usePegaRace from 'state/hooks/usePegaRace'
import styles from './DescricaoRace.module.scss';

function DescricaoRace() {
const descricao = usePegaRace();

  return (
    <div className={styles.descricao}>{descricao.description}</div>
  )
}

export default DescricaoRace