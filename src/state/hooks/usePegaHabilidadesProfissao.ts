import { useRecoilValue } from "recoil";
import { habilidadesProfissao } from "state/atom";

export default function usePegaHabilidadesProfissao(){
    const habilidadesProfissaoAtual = useRecoilValue(habilidadesProfissao);
    return habilidadesProfissaoAtual;
}