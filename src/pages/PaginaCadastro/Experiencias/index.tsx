import React from 'react'
import PaginaCadastro from '..';
import styles from './Experiencias.module.scss';
import SelectExperiencias from './SelectExperiencias';
import DescricaoExperiencias from './DescricaoExperiencias';
import BotaoTrocaPagina from './BotaoTrocaPagina';
import usePegaPaginas from 'state/hooks/usePegaPaginas';
import PaginaDeErro from 'pages/PaginaDeErro';

function Experiencias() {
    const paginas = usePegaPaginas()

    return (
        paginas.ancestralidade ? <PaginaCadastro>            
        <section className={styles.experiencias}>
            <SelectExperiencias />
            <DescricaoExperiencias />                
        </section>
        <BotaoTrocaPagina />
    </PaginaCadastro> : <PaginaDeErro />
    )
}

export default Experiencias