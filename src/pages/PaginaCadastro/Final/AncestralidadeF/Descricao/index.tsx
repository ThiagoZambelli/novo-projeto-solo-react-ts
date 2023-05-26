import IHabilidades from 'Interfaces/IHabilidades'
import { useState } from 'react'
import {BsArrowDownSquareFill, BsArrowUpSquareFill} from 'react-icons/bs'
import styles from './Descricao.module.scss';

interface Props {
    habilidade: IHabilidades
}

function Descricao({ habilidade }: Props) {
    const [aberto, setAberto] = useState(false);


    return (
        <div key={habilidade.name} className={styles.descricao}>
            <h4 onClick={() => setAberto(!aberto)}>{habilidade.name} {aberto ? <BsArrowUpSquareFill /> : <BsArrowDownSquareFill />}</h4>
            {aberto ? <p>{habilidade.description}</p> : ""}
        </div>)
}


export default Descricao