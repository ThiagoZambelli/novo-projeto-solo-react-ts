import { useSetRecoilState } from "recoil";
import { listaSubRace, race, subRace } from "state/atom";
import listaRaces from 'assets/db/races.json';
import useGravaHabilidadesRaca from "./useGravaHabilidadesRaca";



export default function useGravaRace() {
    const gravaRace = useSetRecoilState(race);
    const gravaListaSub = useSetRecoilState(listaSubRace);
    const gravaSub = useSetRecoilState(subRace);
    const gravaHabilidadesRace = useGravaHabilidadesRaca();
         

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

        gravaRace(raceAntiga => ({
            ...raceAntiga,
            name: race,
            description: descricao[0].description,
        }))               
        
    }
}

