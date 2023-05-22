import React from 'react'
import usePegaPaginas from 'state/hooks/usePegaPaginas'
import styles from './IndiciePaginasCadastro.module.scss';
import { BsFillRecordCircleFill } from 'react-icons/bs'
import { AiOutlineLine } from 'react-icons/ai';

function IndiciePaginasCadastro() {
  const paginasJaAcessadas = usePegaPaginas();

  return (
    <div className={styles.indice}>
      <p className={`${paginasJaAcessadas.ancestralidade ? styles.indice__jaAcessados : ""}`} >Ancestralidade</p>
      <AiOutlineLine className={`${paginasJaAcessadas.ancestralidade ? styles.indice__jaAcessados : ""}`} />
      <BsFillRecordCircleFill className={`${paginasJaAcessadas.ancestralidade ? styles.indice__jaAcessados : ""}`} />
      <AiOutlineLine className={`${paginasJaAcessadas.experiencias ? styles.indice__jaAcessados : ""}`} />
      <p className={`${paginasJaAcessadas.experiencias ? styles.indice__jaAcessados : ""}`} >Experiências</p>
      <AiOutlineLine className={`${paginasJaAcessadas.experiencias ? styles.indice__jaAcessados : ""}`}/>
      <BsFillRecordCircleFill className={`${paginasJaAcessadas.experiencias ? styles.indice__jaAcessados : ""}`}/>
    </div>
  )
}

export default IndiciePaginasCadastro