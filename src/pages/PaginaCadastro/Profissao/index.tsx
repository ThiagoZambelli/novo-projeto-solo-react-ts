import React from 'react'
import PaginaCadastro from '..'
import SelectProfissao from './SelectProfissao'
import DescricaoProfissao from './DescricaoProfissao'
import BotaoTrocaPagina from './BotaoTrocaPagina'
import styles from './Profissao.module.scss';
import usePegaPaginas from 'state/hooks/usePegaPaginas'
import PaginaDeErro from 'pages/PaginaDeErro'

function Profissao() {
  const paginas = usePegaPaginas()


  return (
    paginas.experiencias ? <PaginaCadastro>
      <section className={styles.profissao}>
        <SelectProfissao />
        <DescricaoProfissao />
      </section>
      <BotaoTrocaPagina />
    </PaginaCadastro> : <PaginaDeErro />
  )
}

export default Profissao