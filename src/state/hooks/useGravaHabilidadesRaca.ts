import IHabilidades from "Interfaces/IHabilidades";
import { useSetRecoilState } from "recoil";
import { habilidadesRaca } from "state/atom";


export default function useGravaHabilidadesRaca() {    
    const gravaLista = useSetRecoilState(habilidadesRaca);

    return (lista: IHabilidades[]) =>{
        gravaLista(() => ([...lista]))
    }    
}