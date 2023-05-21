import INomes from 'Interfaces/INomes';
import IPaginaAtual from 'Interfaces/IPaginaAtual';
import IRaces from 'Interfaces/IRaces';
import ISubRace from 'Interfaces/ISubRace';
import { atom } from 'recoil';



export const paginaAtual = atom<IPaginaAtual>({
    key: 'paginaAtual',
    default: { paginaAtual: '' }
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
        description:''    
    }    
})

export const subRace = atom<ISubRace>({
    key: 'subRace',
    default: {
        name: '',
        description:''    
    }   
})

export const listaSubRace = atom<ISubRace[]>({
    key: 'listaSubRace',
    default: []  
})