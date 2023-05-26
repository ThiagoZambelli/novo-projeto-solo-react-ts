import { useRecoilValue, useSetRecoilState } from "recoil"
import { experiencia, habilidadesProfissao, habilidadesRaca, habilidadesSubRaca, nomes, personagem, profissao, race, subRace } from "state/atom"

export default function useGravaPersonagem() {
    const gravaPersonagem = useSetRecoilState(personagem);
    const nomeAtual = useRecoilValue(nomes);
    const experienciaAtual = useRecoilValue(experiencia);
    const raceAtual = useRecoilValue(race);
    const habilidadesRaceAtual = useRecoilValue(habilidadesRaca);
    const subAtual = useRecoilValue(subRace);
    const habilidadesSubAtual = useRecoilValue(habilidadesSubRaca);
    const profissaoAtual = useRecoilValue(profissao);
    const habilidadesProfissaoAtual = useRecoilValue(habilidadesProfissao);

    return () => {
        gravaPersonagem(() => ({
            nomeJogador: nomeAtual.nomeJogador,
            nomePersonagem: nomeAtual.nomePersonagem,
            experiencia: {...experienciaAtual},
            race: {...raceAtual},
            habilidadesRace: habilidadesRaceAtual,
            subRace: {...subAtual},
            habilidadesSubRace: habilidadesSubAtual,
            profissao: {...profissaoAtual},
            habilidadesProfisso: habilidadesProfissaoAtual,
        }))
    }
}