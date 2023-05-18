import SessaoPostagem from 'components/SessaoPostagem';
import styles from './PaginaInicial.module.scss';
import postagens from 'assets/db/postagensPaginaInicial.json';

export default function PaginaInicial() {    

    return (
        <section className={styles.inicial}>
            {postagens.map(
                postagem => 
                    <SessaoPostagem 
                        key={postagem.id} 
                        titulo={postagem.titulo} 
                        id={postagem.id} 
                        texto={postagem.texto} 
                    />)}
        </section>
    )
}