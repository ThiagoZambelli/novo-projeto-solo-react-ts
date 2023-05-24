import IHabilidades from "./IHabilidades";
import ISubRace from "./ISubRace";

export default interface IRaces {
    name: string,
    description: string,    
    subRace?: ISubRace;
    habilidades?: IHabilidades[];
}