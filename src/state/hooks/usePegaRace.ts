import { useRecoilValue } from "recoil"
import { race } from "state/atom"

export default function usePegaRace (){
    const raceAtual = useRecoilValue(race);
    return raceAtual;
}