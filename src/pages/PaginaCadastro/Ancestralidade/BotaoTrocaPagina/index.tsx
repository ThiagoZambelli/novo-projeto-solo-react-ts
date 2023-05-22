import styles from './BotaoTrocaPagina.module.scss';
import usePegaRace from 'state/hooks/usePegaRace';
import usePegaSubRaca from 'state/hooks/usePegaSubRaca';
import usePegaListaSub from 'state/hooks/usePegaListaSub';
import { useNavigate } from 'react-router-dom';
import { GiArchiveRegister } from 'react-icons/gi';
import useGravaPaginasCadastro from 'state/hooks/useGravaPaginasCadastro';


function BotaoTrocaPagina() {
    const race = usePegaRace();
    const subRace = usePegaSubRaca();
    const listaSub = usePegaListaSub();
    const temSub = listaSub.length > 1;

    const trocaPagina = useNavigate();
    const gravaPagina = useGravaPaginasCadastro();



    function mudaDepagina() {
        gravaPagina('experiencias')
        trocaPagina('/forja/experiencias')
    }

    return (
        <div>
            {!temSub && race.name !== ''
                ? <button
                    onClick={mudaDepagina}
                    className={styles.botao}
                >Experiencias <GiArchiveRegister /></button>
                : ''}
            {temSub && subRace.name !== ''
                ? <button
                    onClick={mudaDepagina}
                    className={styles.botao}
                >Experiencias <GiArchiveRegister /></button>
                : ''}
        </div>
    )
}

export default BotaoTrocaPagina