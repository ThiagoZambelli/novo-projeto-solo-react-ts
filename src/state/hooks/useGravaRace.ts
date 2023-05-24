import { useSetRecoilState } from "recoil";
import { habilidadesSubRaca, listaSubRace, race, subRace } from "state/atom";
import listaRaces from 'assets/db/races.json';
import useGravaHabilidadesRaca from "./useGravaHabilidadesRaca";
import useGravaHabilidadesSubRaca from "./useGravaHabilidadeSubRaca";



export default function useGravaRace() {
    const gravaRace = useSetRecoilState(race);
    const gravaListaSub = useSetRecoilState(listaSubRace);
    const gravaSub = useSetRecoilState(subRace);
    const gravaHabilidadesRace = useGravaHabilidadesRaca();
    const resetHabilidadesSub = useSetRecoilState(habilidadesSubRaca)


    return (race: string) => {

        const descricao = {
            ...listaRaces.filter(elemento => {
                return elemento.name === race;
            })
        }

        if (descricao[0].subRace) {
            gravaListaSub(descricao[0].subRace)
        } else {
            gravaListaSub([])
            gravaSub({ name: '', description: '' })
        }
        
        gravaHabilidadesRace([...descricao[0].habilidades])
        resetHabilidadesSub(() => ([{ name: '', description: '' }]))

        gravaRace(raceAntiga => ({
            ...raceAntiga,
            name: race,
            description: descricao[0].description,
        }))

    }
}

