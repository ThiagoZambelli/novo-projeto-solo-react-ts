import React from 'react'
import PaginaCadastro from '..'
import SelectRaces from './SelectRaces'
import DescricaoRace from './DescricaoRaces'
import styles from './Antecedentes.module.scss';
import useProximaPagina from 'state/hooks/useProximaPagina';


function Antecedentes() {
  const verificaPagina = useProximaPagina()
  verificaPagina();
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