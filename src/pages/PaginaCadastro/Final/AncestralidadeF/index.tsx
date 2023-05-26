import IPersonagem from 'Interfaces/IPersonagem'
import React from 'react'
import Descricao from './Descricao'
import styles from './AncestralidadeF.module.scss';

interface Props {
    personagem: IPersonagem
}

function AncestralidadeF({ personagem }: Props) {

    return (
        <div className={styles.ancestralidade}>
            <div className={styles.ancestralidade__titulo}>
                <h2>{personagem.race.name}</h2>
                {personagem.subRace.name !== '' ? <h3>{personagem.subRace.name}</h3> : ''}
            </div>
            <div className={styles.ancestralidade__habilidades}>
                {personagem.habilidadesRace.map(e => (<Descricao key={e.name} habilidade={e} />))}
                {personagem.habilidadesSubRace[0].name !== ''
                    ? personagem.habilidadesSubRace.map(e => (<Descricao key={e.name} habilidade={e} />))
                    : ''}
            </div>
        </div>
    )
}

export default AncestralidadeF