import { useRecoilValue } from "recoil";
import { nomes } from "state/atom";

export default function usePegaNomes(){
    return useRecoilValue(nomes);
}