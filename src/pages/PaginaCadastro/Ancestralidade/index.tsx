import React from 'react'
import PaginaCadastro from '..'
import SelectRaces from './SelectRaces'
import DescricaoRace from './DescricaoRaces'
import styles from './Ancestralidade.module.scss';



function Ancestralidade() {
  
  
  return (
    <PaginaCadastro>
        <section className={styles.ancestralidade}>
          <SelectRaces />
          <DescricaoRace />
        </section>        
    </PaginaCadastro>
  )
}

export default Ancestralidade