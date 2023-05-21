import { useRecoilValue } from "recoil";
import { listaSubRace } from "state/atom";

export default function usePegaListaSub (){
    const listaSub = useRecoilValue(listaSubRace);

    return listaSub;
}