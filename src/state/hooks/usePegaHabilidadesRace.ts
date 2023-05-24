import { useRecoilValue } from "recoil";
import { habilidadesRaca } from "state/atom";

export default function usePegaHabilidadesRace(){
    const habilidadesRacaAtual = useRecoilValue(habilidadesRaca);
    return habilidadesRacaAtual;
}