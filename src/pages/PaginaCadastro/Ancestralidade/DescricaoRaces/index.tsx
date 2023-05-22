import React from 'react'
import usePegaRace from 'state/hooks/usePegaRace'
import styles from './DescricaoRace.module.scss';
import DescricaoSub from '../DescricaoSub';

function DescricaoRace() {
  const race = usePegaRace();

  return (
    <div className={styles.descricao}>
      <section className={styles.descricao__race}>
        {race.name !== '' ? <h2>{race.name}</h2> : ''}
        <div >{race.description}</div>
      </section>
      <DescricaoSub />
    </div>
  )
}

export default DescricaoRace