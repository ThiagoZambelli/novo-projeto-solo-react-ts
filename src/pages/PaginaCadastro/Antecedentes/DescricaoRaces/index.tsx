import React from 'react'
import usePegaRace from 'state/hooks/usePegaRace'
import styles from './DescricaoRace.module.scss';

function DescricaoRace() {
const race = usePegaRace();

  return (
    <section className={styles.descricao}>
      <h2>{race.name}</h2>
      <div >{race.description}</div>
    </section>
  )
}

export default DescricaoRace