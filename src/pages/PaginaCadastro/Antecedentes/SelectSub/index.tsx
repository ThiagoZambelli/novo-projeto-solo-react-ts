import React from 'react'
import usePegaListaSub from 'state/hooks/usePegaListaSub'
import { useState } from 'react'
import useGravaSubRaca from 'state/hooks/useGravaSubRaca';
import usePegaSubRaca from 'state/hooks/usePegaSubRaca';
import style from './SelectSub.module.scss';

function SelectSub() {
    const listaSub = usePegaListaSub();
    const gravaSub = useGravaSubRaca();
    const [subAtual, setSubAtual] = useState('')
    const subRace = usePegaSubRaca();

    const mudaValor = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setSubAtual(evento.target.value)
        gravaSub(evento.target.value)
    }
    

    return (
        listaSub[1]
            ? <div className={style.selectSub}>
                <p>Escolha uma das Variações:</p>
                <select value={subAtual} onChange={mudaValor}>
                    {subRace.name === '' ? <option> ---- </option> : ''}
                    {listaSub.map(sub => (<option value={sub.name} key={sub.name}>{sub.name}</option>))}
                </select>
            </div>
            : <></>
    )
}

export default SelectSub