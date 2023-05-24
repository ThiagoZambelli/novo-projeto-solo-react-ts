import IExperiencia from 'Interfaces/IExperiencia';
import IHabilidades from 'Interfaces/IHabilidades';
import INomes from 'Interfaces/INomes';
import IPaginasCadastro from 'Interfaces/IPaginasCadastro';
import IProfissao from 'Interfaces/IProfissao';
import IRaces from 'Interfaces/IRaces';
import ISubRace from 'Interfaces/ISubRace';
import { atom } from 'recoil';



export const profissao = atom<IProfissao>({
    key: 'profissao',
    default: {
        name: '',
        description:'',
        hitDice: 0,
        proefArmor: '',
        proefWeapon: '',
        savingThrow: [''],
        listaSkills: '',

    }
})

export const habilidadesProfissao = atom<IHabilidades[]>({
    key: 'habilidadesProfissao',
    default: [
        {
            name: '',
            description: ''
        }
    ]
})

export const habilidadesRaca = atom<IHabilidades[]>({
    key: 'habilidadesRaca',
    default: [
        {
            name: '',
            description: ''
        }
    ]
})
export const habilidadesSubRaca = atom<IHabilidades[]>({
    key: 'habilidadesSubRaca',
    default: [
        {
            name: '',
            description: ''
        }
    ]
})

export const paginasCadastro = atom<IPaginasCadastro>({
    key: 'paginasCadastro',
    default: {
        ancestralidade: false,
        experiencias: false,
        profissao: false
    }
})

export const experiencia = atom<IExperiencia>({
    key: 'experiencia',
    default: {
        title: '',
        description: ''
    }
})

export const nomes = atom<INomes>({
    key: 'nomes',
    default: {
        nomeJogador: '',
        nomePersonagem: ''
    },
})

export const race = atom<IRaces>({
    key: 'race',
    default: {
        name: '',
        description: ''
    }
})

export const subRace = atom<ISubRace>({
    key: 'subRace',
    default: {
        name: '',
        description: ''
    }
})

export const listaSubRace = atom<ISubRace[]>({
    key: 'listaSubRace',
    default: []
})