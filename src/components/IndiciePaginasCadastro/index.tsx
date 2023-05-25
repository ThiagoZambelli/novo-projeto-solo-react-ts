import usePegaPaginas from 'state/hooks/usePegaPaginas'
import styles from './IndiciePaginasCadastro.module.scss';
import PaginaIndicie from './PaginaIndice';


function IndiciePaginasCadastro() {
  const paginasJaAcessadas = usePegaPaginas();

  return (
    <div className={styles.indice}>
      <PaginaIndicie titulo='Ancestralidade' habilitado={paginasJaAcessadas.ancestralidade} />
      <PaginaIndicie titulo='Experiencias' habilitado={paginasJaAcessadas.experiencias} />
      <PaginaIndicie titulo='Profissao' habilitado={paginasJaAcessadas.profissao} />
      <PaginaIndicie titulo='Final' habilitado={paginasJaAcessadas.final} />
    </div>
  )
}

export default IndiciePaginasCadastro