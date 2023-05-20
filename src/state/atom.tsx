import INomes from 'Interfaces/INomes';
import IPaginaAtual from 'Interfaces/IPaginaAtual';
import IRace from 'Interfaces/IRaces';
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

export const race = atom<IRace>({
    key: 'race',
    default: {
        name: '',
        description: ''
    }
})
