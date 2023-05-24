import IHabilidades from "Interfaces/IHabilidades";
import { useSetRecoilState } from "recoil";
import { habilidadesSubRaca } from "state/atom";


export default function useGravaHabilidadesSubRaca() {    
    const gravaLista = useSetRecoilState(habilidadesSubRaca);

    return (lista: IHabilidades[]) =>{
        gravaLista(() => ([...lista]))
    }    
}