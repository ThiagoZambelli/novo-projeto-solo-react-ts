import React from 'react'
import usePegaRace from 'state/hooks/usePegaRace'
import styles from './DescricaoRace.module.scss';
import DescricaoSub from '../DescricaoSub';
import DescricaoHabilidades from 'components/DescricaoHabilidade';
import usePegaHabilidadesRace from 'state/hooks/usePegaHabilidadesRace';


function DescricaoRace() {
  const race = usePegaRace();
  const habilidadesRace = usePegaHabilidadesRace();



  return (
    <div className={styles.descricao}>
      <section className={styles.descricao__race}>
        {race.name !== '' ? <h2>{race.name}</h2> : ''}
        <div >{race.description}</div>
      </section>
      <DescricaoSub />
      <DescricaoHabilidades lista={habilidadesRace} />
    </div>
  )
}

export default DescricaoRace