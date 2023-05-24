import React from 'react'
import PaginaCadastro from '..'
import SelectProfissao from './SelectProfissao'
import DescricaoProfissao from './DescricaoProfissao'
import BotaoTrocaPagina from './BotaoTrocaPagina'
import styles from './Profissao.module.scss';

function Profissao() {
  return (
    <PaginaCadastro>            
            <section className={styles.profissao}>
                <SelectProfissao />
                <DescricaoProfissao />                
            </section>
            <BotaoTrocaPagina />
        </PaginaCadastro>
  )
}

export default Profissao