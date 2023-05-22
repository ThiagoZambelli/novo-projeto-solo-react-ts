import React from 'react'
import PaginaCadastro from '..';
import styles from './Experiencias.module.scss';
import SelectExperiencias from './SelectExperiencias';
import DescricaoExperiencias from './DescricaoExperiencias';
import BotaoTrocaPagina from './BotaoTrocaPagina';

function Experiencias() {
    return (
        <PaginaCadastro>            
            <section className={styles.experiencias}>
                <SelectExperiencias />
                <DescricaoExperiencias />                
            </section>
            <BotaoTrocaPagina />
        </PaginaCadastro>
    )
}

export default Experiencias