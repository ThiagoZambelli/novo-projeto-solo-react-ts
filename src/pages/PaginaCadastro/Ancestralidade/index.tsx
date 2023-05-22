import React from 'react'
import PaginaCadastro from '..'
import SelectRaces from './SelectRaces'
import DescricaoRace from './DescricaoRaces'
import styles from './Ancestralidade.module.scss';
import BotaoTrocaPagina from './BotaoTrocaPagina';



function Ancestralidade() {
  


  return (
    <PaginaCadastro>
      <section className={styles.ancestralidade}>
        <SelectRaces />
        <DescricaoRace />
      </section>
      <BotaoTrocaPagina />    
    </PaginaCadastro>
  )
}

export default Ancestralidade