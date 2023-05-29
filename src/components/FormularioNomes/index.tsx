import InputT from "components/InputT";
import styles from './FormularioNomes.module.scss';
import { useEffect, useState } from "react";
import usePegaNomes from "state/hooks/usePegaNomes";
import { useNavigate } from "react-router-dom";
import { GiAnvilImpact } from 'react-icons/gi'
import useGravaPaginasCadastro from "state/hooks/useGravaPaginasCadastro";



export default function FormularioNomes() {
    const [habilitado, setHabilitado] = useState<boolean>(false)
    const listaNomes = usePegaNomes();
    const trocaPagina = useNavigate();
    const gravaPagina = useGravaPaginasCadastro();

    useEffect(() => {
        if (listaNomes.nomeJogador !== '' && listaNomes.nomePersonagem !== "") {
            setHabilitado(true);
        }
        if (listaNomes.nomeJogador === '' || listaNomes.nomePersonagem === "") {
            setHabilitado(false);
        }
    }, [listaNomes])

    const proximaPagina = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        gravaPagina('ancestralidade')
        trocaPagina('/forja/ancestralidade')
    }


    return (
        <form className={styles.form} onSubmit={event => proximaPagina(event)}>
            <fieldset className={styles.form__names}>
                <legend>Nomes</legend>
                <p className={styles.form__names__texto}>O primeiro passo para entrar de cabeça em um mundo de fantasia é decidir o nome que irá encarnar. Isso, não só dirá muito sobre você aos outros, como constantemente lhe acompanhará por sua fantástica aventura!</p>
                <p className={styles.form__names__descricao}>Digite o nome do Jogador e o nome do seu Personagem para começar.</p>
                <div className={styles.form__names__inputs}>
                    <InputT campo='nomeJogador' required={true} type="text" label="Nome do Jogador" />
                    <InputT campo='nomePersonagem' required={true} type="text" label="Nome do Personagem" />
                </div>
                <button
                    disabled={!habilitado}
                    className={`${styles.botao} ${habilitado ? styles.botao__habilitado : ''}`}
                >Iniciar Criação <GiAnvilImpact /></button>
            </fieldset>
        </form>
    )
}