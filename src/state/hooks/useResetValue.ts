import { useSetRecoilState } from "recoil";
import { nomes, race } from "state/atom";

export default function useResetValue(){
    const apagarNomes = useSetRecoilState(nomes);
    const apagarRaca = useSetRecoilState(race);

    return () => {
        apagarNomes((nomesAntigos) => ({
            ...nomesAntigos,
            nomePersonagem: '',
            nomeJogador: ''
        }))
        apagarRaca((racAntiga) => ({
            ...racAntiga,
            description:'',
            name: ''
        }))
    }
}