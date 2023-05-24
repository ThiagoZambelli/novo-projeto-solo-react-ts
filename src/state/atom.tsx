import IExperiencia from 'Interfaces/IExperiencia';
import IHabilidades from 'Interfaces/IHabilidades';
import INomes from 'Interfaces/INomes';
import IPaginasCadastro from 'Interfaces/IPaginasCadastro';
import IRaces from 'Interfaces/IRaces';
import ISubRace from 'Interfaces/ISubRace';
import { atom } from 'recoil';


export const habilidadesRaca = atom<IHabilidades[]>({
    key: 'habilidadesRaca',
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
        experiencias: false
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