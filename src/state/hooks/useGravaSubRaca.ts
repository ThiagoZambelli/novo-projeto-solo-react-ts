import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaSubRace, subRace } from "state/atom"



export default function useGravaSubRaca() {
    const gravaSub = useSetRecoilState(subRace);
    const listaSub = useRecoilValue(listaSubRace);   


    return (name: string) => {
        const subParaGravar = {
            ...listaSub.filter(element => {
                return element.name === name;
            })
        }       

        gravaSub(() => ({...subParaGravar[0]}))
    }
}

