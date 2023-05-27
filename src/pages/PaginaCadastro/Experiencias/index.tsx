import PaginaCadastro from '..';
import styles from './Experiencias.module.scss';
import SelectExperiencias from './SelectExperiencias';
import DescricaoExperiencias from './DescricaoExperiencias';
import BotaoTrocaPagina from './BotaoTrocaPagina';
import PaginaDeErro from 'pages/PaginaDeErro';
import usePegaRace from 'state/hooks/usePegaRace';

function Experiencias() {
    const ancestralidade = usePegaRace();

    return (
        ancestralidade.name !== '' ? <PaginaCadastro>
            <section className={styles.experiencias}>
                <SelectExperiencias />
                <DescricaoExperiencias />
            </section>
            <BotaoTrocaPagina />
        </PaginaCadastro> : <PaginaDeErro />
    )
}

export default Experiencias