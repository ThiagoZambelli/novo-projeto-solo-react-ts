import React from 'react'
import PaginaCadastro from '..'
import SelectRaces from './SelectRaces'
import DescricaoRace from './DescricaoRaces'
import styles from './Ancestralidade.module.scss';
import BotaoTrocaPagina from './BotaoTrocaPagina';
import usePegaNomes from 'state/hooks/usePegaNomes';
import PaginaDeErro from 'pages/PaginaDeErro';



function Ancestralidade() {
  const nomes = usePegaNomes()



  return (
    nomes.nomeJogador !== '' && nomes.nomePersonagem !== ''
      ? <PaginaCadastro>
        <section className={styles.ancestralidade}>
          <SelectRaces />
          <DescricaoRace />
        </section>
        <BotaoTrocaPagina />
      </PaginaCadastro>
      : <PaginaDeErro />
  )
}

export default Ancestralidade