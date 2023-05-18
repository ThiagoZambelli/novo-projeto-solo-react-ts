import InputT from "components/InputT";
import styles from './FormularioCriacao.module.scss';

export default function FormularioCriacao() {
    return (
        <form className={styles.form}>
            <fieldset className={styles.form__names}>
                <legend>Names</legend>
                <InputT required={true} type="text" label="Nome do Jogador"/>
                <InputT required={true} type="text" label="Nome do Personagem"/>
            </fieldset>
        </form>
    )
}