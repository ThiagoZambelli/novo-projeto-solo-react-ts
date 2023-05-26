import { useRecoilValue } from "recoil"
import { personagem } from "state/atom"

export default function usePegaPersonagem(){
    const personagemMontado = useRecoilValue(personagem);
    return personagemMontado;
}