import React from 'react'
import usePegaRace from 'state/hooks/usePegaRace'
import styles from './DescricaoRace.module.scss';
import DescricaoSub from '../DescricaoSub';
import DescricaoHabilidades from 'components/DescricaoHabilidade';
import usePegaHabilidadesRace from 'state/hooks/usePegaHabilidadesRace';
import usePegaHabilidadesSubRace from 'state/hooks/usePegaHabilidadesSub';
import usePegaSubRaca from 'state/hooks/usePegaSubRaca';


function DescricaoRace() {
  const race = usePegaRace();
  const subRace = usePegaSubRaca();
  const habilidadesRace = usePegaHabilidadesRace();
  const habilidadesSubRace = usePegaHabilidadesSubRace();



  return (
    <div className={styles.descricao}>
      <section className={styles.descricao__race}>
        {race.name !== '' ? <h2>{race.name}</h2> : ''}
        <div >{race.description}</div>
      </section>
      <DescricaoSub />
      <section className={styles.descricao__habilidadesRace}>
        {race.name !== '' ? <h2>Habilidades de - {race.name}</h2> : ''}
        <DescricaoHabilidades lista={habilidadesRace} />
      </section>
      {habilidadesSubRace[0].name !== ''
        ? <section className={styles.descricao__habilidadesRace}>
          {subRace.name !== '' ? <h2>Habilidades de - {subRace.name}</h2> : ''}
          <DescricaoHabilidades lista={habilidadesSubRace} />
        </section>
        : ''}
    </div>
  )
}

export default DescricaoRace