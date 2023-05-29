import styles from './BotaoTrocaPagina.module.scss';
import { useNavigate } from 'react-router-dom';
import { GiBeamsAura } from 'react-icons/gi';
import useGravaPaginasCadastro from 'state/hooks/useGravaPaginasCadastro';
import usePegaProfissao from 'state/hooks/usePegaProfissao';
import usePegaPaginas from 'state/hooks/usePegaPaginas';
import useGravaPersonagem from 'state/hooks/useGravaPersonagem';
import {useMemo} from 'react';


function BotaoTrocaPagina() {
    const profissao = usePegaProfissao();
    const paginas = usePegaPaginas();

    const gravaPersonagem = useGravaPersonagem();
    const trocaPagina = useNavigate();
    const gravaPagina = useGravaPaginasCadastro();

    function mudaDepagina() {
        gravaPagina('final')
        trocaPagina('/forja/final')
        gravaPersonagem();
    }
    const icone = useMemo(() => <GiBeamsAura />, [])

    return (
        <div>
            {profissao.name !== '' && paginas.ancestralidade && paginas.experiencias && paginas.profissao
                ? <button
                    onClick={mudaDepagina}
                    className={styles.botao}
                >Final {icone}</button>
                : <h3 className={styles.alert}>Esta Faltando Alguma Coisa para Finalizar!</h3>}
        </div>
    )
}

export default BotaoTrocaPagina