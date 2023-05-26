import IExperiencia from "./IExperiencia";
import IHabilidades from "./IHabilidades";
import IProfissao from "./IProfissao";
import IRaces from "./IRaces";
import ISubRace from "./ISubRace";

export default interface IPersonagem{
    nomeJogador: string,
    nomePersonagem: string,
    experiencia: IExperiencia,
    race:IRaces,
    habilidadesRace: IHabilidades[],
    subRace: ISubRace,
    habilidadesSubRace: IHabilidades[],
    profissao: IProfissao,
    habilidadesProfisso: IHabilidades[],

}