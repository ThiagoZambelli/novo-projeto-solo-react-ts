import IRace from 'Interfaces/IRaces';
import { atom } from 'recoil';

interface INomes {
    nomeJogador: string,
    nomePersonagem: string
}

export const paginaAtual = atom<object>({
    key: 'paginaAtual',
    default: {
        ancestralidade: false,
        antecedentes: false,
        classes: false,
        magias: false
    },
})

export const nomes = atom<INomes>({
    key: 'nomes',
    default: {
        nomeJogador: '',
        nomePersonagem: ''
    },
})

export const race = atom<IRace>({
    key: 'race',
    default: {
        name:'',
        description:''
    }
})
