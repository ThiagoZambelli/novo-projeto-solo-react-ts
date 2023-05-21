import ISubRace from "Interfaces/ISubRace";
import { useSetRecoilState } from "recoil";
import { listaSubRace } from "state/atom";

export default function useGravalistaSub () {
    const gravaLista = useSetRecoilState(listaSubRace);

    return (lista: ISubRace[]) =>{
        gravaLista(() => ({
            ...lista
        }))

    }
}