import { useRecoilValue } from "recoil";
import { profissao } from "state/atom";

export default function usePegaProfissao (){
    const profissaoAtual = useRecoilValue(profissao);
    return profissaoAtual;
}