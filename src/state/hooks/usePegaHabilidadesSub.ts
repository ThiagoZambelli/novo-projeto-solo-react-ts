import { useRecoilValue } from "recoil";
import { habilidadesSubRaca } from "state/atom";

export default function usePegaHabilidadesSubRace(){
    const habilidadesSubAtual = useRecoilValue(habilidadesSubRaca);
    return habilidadesSubAtual;
}