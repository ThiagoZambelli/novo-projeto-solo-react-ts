import InputT from "components/InputT";
import styles from './FormularioCriacao.module.scss';

export default function FormularioCriacao() {
    return (
        <form className={styles.form}>
            <fieldset className={styles.form__names}>
                <legend>Names</legend>
                <InputT type="text" label="Nome do Jogador"/>
                <InputT type="text" label="Nome do Personagem"/>
            </fieldset>
        </form>
    )
}