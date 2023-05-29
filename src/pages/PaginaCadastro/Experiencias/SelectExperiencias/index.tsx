import { useState } from 'react'
import listaExperiencias from 'assets/db/bg.json';
import styles from './SelectExperiencias.module.scss';
import usePegaExperiencia from 'state/hooks/usePegaExperiencia';
import useGravaExperiencia from 'state/hooks/useGravaExperiencia';
import { BsFillCaretRightFill } from 'react-icons/bs'
import { memo } from 'react'

function SelectExperiencias() {

    const [experienciaAtual, setExperienciaAtual] = useState('')
    const experiencia = usePegaExperiencia();
    const gravaExperiencia = useGravaExperiencia();

    const mudaValor = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setExperienciaAtual(evento.target.value)
        gravaExperiencia(evento.target.value)
    }

    return (
        <section className={styles.selectExperiencias}>
            <div className={styles.selectExperiencias__titulo}>
                <h2>Experiências</h2>
                <p><BsFillCaretRightFill />   Após saber de onde veio, vamos descobrir o que você fazia antes de virar um aventureiro. Um soldado renegado, um Acólito de um monastério descobrindo o mundo pela primeira vez, ou talvez um criminoso ?</p>
            </div>
            <div className={styles.selectExperiencias__escolhas}>
                <p>Escolha uma das opções:</p>
                <select value={experienciaAtual} onChange={mudaValor}>
                    {experiencia.title === '' ? <option> ---- </option> : ''}
                    {listaExperiencias.map(experiencia => (<option value={experiencia.title} key={experiencia.title}>{experiencia.title}</option>))}
                </select>
            </div>
        </section>
    )
}

export default memo(SelectExperiencias)