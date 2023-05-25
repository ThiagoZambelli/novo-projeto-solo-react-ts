import styles from './BotaoTrocaPagina.module.scss';
import { useNavigate } from 'react-router-dom';
import { GiBeamsAura } from 'react-icons/gi';
import useGravaPaginasCadastro from 'state/hooks/useGravaPaginasCadastro';
import usePegaProfissao from 'state/hooks/usePegaProfissao';


function BotaoTrocaPagina() {
    const profissao = usePegaProfissao();

    const trocaPagina = useNavigate();
    const gravaPagina = useGravaPaginasCadastro();

    function mudaDepagina() {
        gravaPagina('profissao')
        trocaPagina('/forja/final')
    }

    return (
        <div>
            {profissao.name !== ''
                ? <button
                    onClick={mudaDepagina}
                    className={styles.botao}
                >Final <GiBeamsAura /></button>
                : ''}
        </div>
    )
}

export default BotaoTrocaPagina