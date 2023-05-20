import { useSetRecoilState } from "recoil";
import { race } from "state/atom";
import listaRaces from 'assets/db/races.json';

export default function useGravaRace() {
    const gravaRace = useSetRecoilState(race);    

    return (race: string) => {    
        const descricao = {...listaRaces.filter(elemento =>{
            return elemento.name === race;
        })}
        
        gravaRace(raceAntiga => ({
            ...raceAntiga,
            name:race,
            description: descricao[0].description
        }))      
        
    }
}

