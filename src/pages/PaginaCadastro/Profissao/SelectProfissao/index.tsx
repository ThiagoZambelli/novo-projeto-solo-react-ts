import { useState } from 'react'
import listaProfissoes from 'assets/db/classes.json';
import styles from './SelectProfissao.module.scss';
import usePegaProfissao from 'state/hooks/usePegaProfissao';
import useGravaProfissao from 'state/hooks/useGravaProfissao';

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
                <p>Após saber de onde veio, vamos descobrir o que você fazia antes de virar um aventureiro. Um soldado renegado, um Acólito de um monastério descobrindo o mundo pela primeira vez, ou talvez um criminoso ?</p>
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