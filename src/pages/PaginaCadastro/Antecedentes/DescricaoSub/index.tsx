import React from 'react'
import usePegaSubRaca from 'state/hooks/usePegaSubRaca'
import styles from './DescricaoSub.module.scss';
import {GiDramaMasks} from 'react-icons/gi'

function DescricaoSub() {
    const subRace = usePegaSubRaca();
    console.log(subRace)

    return (
        subRace.name !== ''
        ? <section className={styles.descricao}>
                <h3><GiDramaMasks />  {subRace.name}</h3>
                <p>{subRace.description}</p>
            </section>
        : <></>
    )
}

export default DescricaoSub