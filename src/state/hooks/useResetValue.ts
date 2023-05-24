import { useSetRecoilState } from "recoil";
import { experiencia, habilidadesProfissao, habilidadesRaca, habilidadesSubRaca, listaSubRace, nomes, paginasCadastro, profissao, race, subRace } from "state/atom";

export default function useResetValue() {
    const apagarNomes = useSetRecoilState(nomes);
    const apagarRaca = useSetRecoilState(race);
    const apagarSub = useSetRecoilState(subRace);
    const apagarListaSub = useSetRecoilState(listaSubRace);
    const apagaPagina = useSetRecoilState(paginasCadastro);
    const apagaExperiencia = useSetRecoilState(experiencia);
    const apagaHabilidadesRace = useSetRecoilState(habilidadesRaca);
    const apagaHabilidadesSubRace = useSetRecoilState(habilidadesSubRaca);
    const apagaHabilidadesProfissao = useSetRecoilState(habilidadesProfissao);
    const apagaProfissao = useSetRecoilState(profissao);

    return () => {
        apagarNomes((nomesAntigos) => ({
            ...nomesAntigos,
            nomePersonagem: '',
            nomeJogador: ''
        }))
        apagarRaca((racAntiga) => ({
            ...racAntiga,
            description: '',
            name: ''
        }))
        apagarSub((subAntiga) => ({
            ...subAntiga,
            description: '',
            name: ''
        }))
        apagarListaSub([])

        apagaPagina(antiga => ({
            ...antiga,
            ancestralidade: false,
            experiencias: false
        }))
        apagaExperiencia(antiga => ({
            ...antiga,
            title: '',
            description: ''
        }))
        apagaHabilidadesRace(() => ([{ name: '', description: '' }]))
        apagaHabilidadesSubRace(() => ([{ name: '', description: '' }]))
        apagaHabilidadesProfissao(() => ([{ name: '', description: '' }]))
        apagaProfissao(() => ({
            name: '',
            description:'',
            hitDice: 0,
            proefArmor: '',
            proefWeapon: '',
            savingThrow: [''],
            listaSkills: '',

        }))
    }
}