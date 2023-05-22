import { useSetRecoilState } from "recoil";
import { listaSubRace, nomes, paginasCadastro, race, subRace } from "state/atom";

export default function useResetValue() {
    const apagarNomes = useSetRecoilState(nomes);
    const apagarRaca = useSetRecoilState(race);
    const apagarSub = useSetRecoilState(subRace);
    const apagarListaSub = useSetRecoilState(listaSubRace);
    const apagaPagina = useSetRecoilState(paginasCadastro);

    return () => {
        apagarNomes((nomesAntigos) => ({
            ...nomesAntigos,
            nomePersonagem: '',
            nomeJogador: ''
        }))
        apagarRaca((racAntiga) => ({
            ...racAntiga,
            description: '',
            name: ''
        }))
        apagarSub((subAntiga) => ({
            ...subAntiga,
            description: '',
            name: ''
        }))
        apagarListaSub([])

        apagaPagina(antiga => ({
            ...antiga,
            ancestralidade: false,
            experiencias: false
        }))
    }
}