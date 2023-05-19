import InputT from "components/InputT";
import styles from './FormularioNomes.module.scss';
import { useEffect, useState } from "react";
import usePegaNomes from "state/hooks/usePegaNomes";


export default function FormularioNomes() {
    const [habilitado, setHabilitado] = useState<boolean>(false)
    const listaNomes = usePegaNomes();

    useEffect(()=>{        
       if(listaNomes.nomeJogador !== '' && listaNomes.nomePersonagem !== ""){
        setHabilitado(true);
       }
       if(listaNomes.nomeJogador === '' || listaNomes.nomePersonagem === ""){
        setHabilitado(false);
       }
       console.log(listaNomes);
    },[listaNomes])
    
    
    


    const gravarNomes = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }


    return (
        <form className={styles.form} onSubmit={event => gravarNomes(event)}>
            <fieldset className={styles.form__names}>
                <legend>Names</legend>
                <p className={styles.form__names__descricao}>Digite o nome do Jogador e o nome do seu Personagem para começar.</p>
                <div className={styles.form__names__inputs}>
                    <InputT campo='nomeJogador' required={true} type="text" label="Nome do Jogador" />
                    <InputT campo='nomePersonagem' required={true} type="text" label="Nome do Personagem" />
                </div>
                <button
                    disabled={!habilitado}
                    className={`${styles.botao} ${habilitado ? styles.botao__habilitado : ''}`}
                >Iniciar Criação</button>
            </fieldset>
        </form>
    )
}