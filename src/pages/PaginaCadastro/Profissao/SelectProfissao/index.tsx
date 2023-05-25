import { useState } from 'react'
import listaProfissoes from 'assets/db/profissoes.json';
import styles from './SelectProfissao.module.scss';
import usePegaProfissao from 'state/hooks/usePegaProfissao';
import useGravaProfissao from 'state/hooks/useGravaProfissao';
import { BsFillCaretRightFill } from 'react-icons/bs'

function SelectProfissao() {

    const [profissaoAtual, setProfissaoAtual] = useState('')
    const profissao = usePegaProfissao();
    const gravaProfissao = useGravaProfissao();

    const mudaValor = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setProfissaoAtual(evento.target.value)
        gravaProfissao(evento.target.value)
    }

    return (
        <section className={styles.selectProfissao}>
            <div className={styles.selectProfissao__titulo}>
                <h2>Profissões</h2>
                <p><BsFillCaretRightFill />   Agora que já conhecemos seu passado vamos descobrir o caminho que ira trilhar? Profissões ou Classes, nada mais são do que o modo como cada personagem encara o mundo a sua volta. Fantásticos  combatentes que usam as mais diversas armas? Poderosos manipuladores de magia que podem criar coisas com um estalar de dedos?</p>
                <p><BsFillCaretRightFill />    Em um mundo de alta Fantasia o perigo está à espreita em todos os cantos e para ser um “Aventureiro” você deve saber como se defender ou até defender os outros.</p>
            </div>
            <div className={styles.selectProfissao__escolhas}>
                <p>Escolha uma das opções:</p>
                <select value={profissaoAtual} onChange={mudaValor}>
                    {profissao.name === '' ? <option> ---- </option> : ''}
                    {listaProfissoes.map(experiencia => (<option value={experiencia.name} key={experiencia.name}>{experiencia.name}</option>))}
                </select>
            </div>
        </section>
    )
}

export default SelectProfissao