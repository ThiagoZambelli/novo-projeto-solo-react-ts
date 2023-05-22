import { useRecoilValue } from "recoil";
import { paginasCadastro } from "state/atom";

export default function usePegaPaginas () {
    const paginasAcessadas = useRecoilValue(paginasCadastro);

    return paginasAcessadas;
}