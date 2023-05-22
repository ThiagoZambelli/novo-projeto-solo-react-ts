import { useRecoilValue } from "recoil";
import { experiencia } from "state/atom";


export default function usePegaExperiencia() {
    const experienciaAtual = useRecoilValue(experiencia);
    return experienciaAtual;
}