import usePegaPersonagem from 'state/hooks/usePegaPersonagem';
import PaginaCadastro from '..';
import styles from './Final.module.scss';
import IndiciePaginasCadastro from 'components/IndiciePaginasCadastro';
import AncestralidadeF from './AncestralidadeF';
import ExperienciasF from './ExperienciasF';
import ProfissaoF from './ProfissaoF';


function Final() {

    const personagem = usePegaPersonagem()
    
      
    return (
        <section className={styles.final}>
            <IndiciePaginasCadastro />
            <div className={styles.final__card}>
                <section className={styles.final__card__nomes}>
                    <div className={styles.final__card__nomes__container}>
                        <span>Nome do Jogador:</span>
                        <h2>{personagem.nomeJogador}</h2>
                    </div>
                    <div className={styles.final__card__nomes__container}>
                        <span>Nome do Personagem:</span>
                        <h2>{personagem.nomePersonagem}</h2>
                    </div>
                </section>
                <section className={styles.final__ancestralidade}>
                    <AncestralidadeF personagem={personagem} />
                </section>
                <section className={styles.final__experiencias}>
                    <ExperienciasF personagem={personagem} />
                </section>
                <section className={styles.final__experiencias}>
                    <ProfissaoF personagem={personagem} />
                </section>
            </div>
        </section>

    )
}

export default Final