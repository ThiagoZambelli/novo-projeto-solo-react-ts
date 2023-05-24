import styles from './BotaoTrocaPagina.module.scss';
import { useNavigate } from 'react-router-dom';
import { GiDropWeapon } from 'react-icons/gi';
import useGravaPaginasCadastro from 'state/hooks/useGravaPaginasCadastro';
import usePegaExperiencia from 'state/hooks/usePegaExperiencia';


function BotaoTrocaPagina() {
    const experiencias = usePegaExperiencia();

    const trocaPagina = useNavigate();
    const gravaPagina = useGravaPaginasCadastro();

    function mudaDepagina() {
        gravaPagina('profissao')
        trocaPagina('/forja/final')
    }

    return (
        <div>
            {experiencias.title !== ''
                ? <button
                    onClick={mudaDepagina}
                    className={styles.botao}
                >Final <GiDropWeapon /></button>
                : ''}
        </div>
    )
}

export default BotaoTrocaPagina