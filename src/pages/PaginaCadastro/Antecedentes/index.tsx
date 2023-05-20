import React from 'react'
import PaginaCadastro from '..'
import SelectRaces from './SelectRaces'
import DescricaoRace from './DescricaoRaces'
import styles from './Antecedentes.module.scss';


function Antecedentes() {
  return (
    <PaginaCadastro>
        <section className={styles.antecedentes}>
          <SelectRaces />
          <DescricaoRace />
        </section>
    </PaginaCadastro>
  )
}

export default Antecedentes