import React from 'react'
import styles from './NomesResgistrados.module.scss';
import usePegaNomes from 'state/hooks/usePegaNomes';



function NomesRegistrados() {
    const nomes = usePegaNomes();

  return (
    <section className={styles.nomes}>
        <h3 className={styles.nomes__jogador}>{nomes.nomeJogador} </h3>
        <h3 className={styles.nomes__personagem}>{nomes.nomePersonagem}</h3>
    </section>
  )
}

export default NomesRegistrados