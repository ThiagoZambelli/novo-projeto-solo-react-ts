import React from 'react'
import styles from './PaginaDeErro.module.scss';
import { useNavigate } from 'react-router-dom';

function PaginaDeErro() {
    const voltar = useNavigate()

    const voltarAoInicio = () => {
        voltar('/')
    }
  return (
    <section className={styles.erro}>
        <img src={`/assets/img/ops.png`} alt="Algo deu errado" />
        <button onClick={voltarAoInicio}>Voltar Ao Inicio</button>
    </section>
  )
}

export default PaginaDeErro