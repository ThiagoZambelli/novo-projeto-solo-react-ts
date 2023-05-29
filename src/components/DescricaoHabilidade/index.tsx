import { useMemo } from 'react'
import styles from './DescricaoHabilidade.module.scss';
import IHabilidades from 'Interfaces/IHabilidades';
import { GiArrowDunk } from 'react-icons/gi';

interface Props {
    lista: IHabilidades[]
}


function DescricaoHabilidades({ lista }: Props) {

    const icone = useMemo(() => <GiArrowDunk />, [])

    return (
        lista[0].name !== ''
            ?
            <section className={styles.habilidades}>
                {lista.map(e => (
                    <div key={e.name} className={styles.habilidades__habilidade}>
                        <h3>{icone} {e.name}:</h3>
                        <p>{e.description}</p>
                    </div>
                ))}
            </section>
            : <></>


    )
}

export default DescricaoHabilidades