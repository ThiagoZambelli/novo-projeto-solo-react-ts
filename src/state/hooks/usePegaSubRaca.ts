import { useRecoilValue } from "recoil";
import { subRace } from "state/atom";

export default function usePegaSubRaca () {
    const subRaca = useRecoilValue(subRace);
    return subRaca;
}