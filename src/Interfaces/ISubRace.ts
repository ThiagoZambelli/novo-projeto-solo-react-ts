import IHabilidades from "./IHabilidades";

export default interface ISubRace {
    name: string,
    description: string,
    habilidades?: IHabilidades[];  
}