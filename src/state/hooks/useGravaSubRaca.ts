import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaSubRace, subRace } from "state/atom"
import useGravaHabilidadesSubRaca from "./useGravaHabilidadeSubRaca";



export default function useGravaSubRaca() {
    const gravaSub = useSetRecoilState(subRace);
    const listaSub = useRecoilValue(listaSubRace);
    const gravaHabilidadesSubRace = useGravaHabilidadesSubRaca();


    return (name: string) => {

        const subParaGravar = {
            ...listaSub.filter(element => {
                return element.name === name;
            })
        }

        console.log(subParaGravar[0]['habilidades']);

        

        

        gravaSub(() => ({ ...subParaGravar[0]}))
    }
}

