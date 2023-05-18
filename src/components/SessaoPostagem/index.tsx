import React from 'react'
import styles from './SessaoPostagem.module.scss';
import usePar from 'state/hooks/usePar';

interface IPostagem {
    titulo: string,
    texto: string,
    id: number,
}

function SessaoPostagem({ id, texto, titulo }: IPostagem) {

    const par = usePar(id);

    return (
        <section className={styles.postagem}>
            <div className={styles.postagem__textos}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
            <img
                className={`${styles.postagem__imagem} ${par ? styles.imagemEsquerda : ''}`}
                src={`assets/img/${id}.png`}
                alt={`Imagem da postagem: ${titulo}`}
            />
        </section>
    )
}

export default SessaoPostagem