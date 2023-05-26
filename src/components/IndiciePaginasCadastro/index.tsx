import usePegaPaginas from 'state/hooks/usePegaPaginas'
import styles from './IndiciePaginasCadastro.module.scss';
import PaginaIndicie from './PaginaIndice';


function IndiciePaginasCadastro() {
  const paginasJaAcessadas = usePegaPaginas();
  

  return (
    <div className={styles.indice}>
      <PaginaIndicie onde='ancestralidade' titulo='Ancestralidade' habilitado={paginasJaAcessadas.ancestralidade} />
      <PaginaIndicie onde='experiencia' titulo='Experiencias' habilitado={paginasJaAcessadas.experiencias} />
      <PaginaIndicie onde='profissao' titulo='Profissao' habilitado={paginasJaAcessadas.profissao} />
      <PaginaIndicie onde='final' titulo='Final' habilitado={paginasJaAcessadas.final} />
    </div>
  )
}

export default IndiciePaginasCadastro