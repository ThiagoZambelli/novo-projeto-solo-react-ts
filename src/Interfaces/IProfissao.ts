import IHabilidades from "./IHabilidades";

export default interface IProfissao {
    name: string,
    description: string,
    hitDice: number,
    proefArmor: string,
    proefWeapon: string,
    savingThrow: string[],
    listaSkills: string,
    habilidades?: IHabilidades[];
}