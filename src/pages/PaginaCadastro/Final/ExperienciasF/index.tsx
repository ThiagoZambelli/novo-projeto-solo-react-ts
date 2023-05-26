import IPersonagem from 'Interfaces/IPersonagem'
import React from 'react'
import styles from './ExperienciasF.module.scss';

interface Props {
    personagem: IPersonagem
}

function ExperienciasF({ personagem }: Props) {

    return (
        <div className={styles.experiencia}>
            <div className={styles.experiencia__titulo}>
                <h2>{personagem.experiencia.title}</h2>
            </div>
            <div className={styles.experiencia__descricao}>
                <p>{personagem.experiencia.description}</p>
            </div>
        </div>
    )
}

export default ExperienciasF