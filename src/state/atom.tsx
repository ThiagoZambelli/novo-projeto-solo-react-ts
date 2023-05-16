import { atom } from 'recoil';

export const paginaAtual = atom<object>({
    key: 'paginaAtual',
    default: {
        ancestralidade: false,
        antecedentes: false,
        classes: false,
        magias: false
    },
})