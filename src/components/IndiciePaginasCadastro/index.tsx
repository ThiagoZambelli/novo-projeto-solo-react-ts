import usePegaPaginas from 'state/hooks/usePegaPaginas'
import styles from './IndiciePaginasCadastro.module.scss';
import PaginaIndicie from './PaginaIndice';
import { memo } from 'react';


function IndiciePaginasCadastro() {
  const paginasJaAcessadas = usePegaPaginas();
  const grava = paginasJaAcessadas.ancestralidade && paginasJaAcessadas.experiencias && paginasJaAcessadas.profissao;
  

  return (
    <div className={styles.indice}>
      <PaginaIndicie onde='ancestralidade' titulo='Ancestralidade' habilitado={paginasJaAcessadas.ancestralidade} />
      <PaginaIndicie onde='experiencias' titulo='Experiencias' habilitado={paginasJaAcessadas.experiencias} />
      <PaginaIndicie onde='profissao' titulo='Profissao' habilitado={paginasJaAcessadas.profissao} />
      <PaginaIndicie grava={grava} onde='final' titulo='Final' habilitado={paginasJaAcessadas.final} />
    </div>
  )
}

export default memo(IndiciePaginasCadastro);