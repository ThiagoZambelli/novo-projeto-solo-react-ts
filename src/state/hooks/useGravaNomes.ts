import { useSetRecoilState } from "recoil";
import { nomes } from "state/atom";

export default function useGravaNomes() {
    const setNomes = useSetRecoilState(nomes);

    return (onde: string, valor: string) => {

        if (onde === 'nomeJogador') {

            return setNomes((nomesAntigos) => ({
                ...nomesAntigos,
                nomeJogador: valor
            }))
        } else if (onde === 'nomePersonagem') {

            return setNomes((nomesAntigos) => ({
                ...nomesAntigos,
                nomePersonagem: valor
            }))
        }

    }
}



