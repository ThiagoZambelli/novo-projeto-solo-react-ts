import { useSetRecoilState } from "recoil";
import { habilidadesProfissao, profissao } from "state/atom";
import lista from "assets/db/profissoes.json";

export default function useGravaProfissao() {
    const gravaProfissao = useSetRecoilState(profissao);
    const gravaHabilidadesProfissao = useSetRecoilState(habilidadesProfissao);

    return (profissao: string) => {

        const paraGravar = lista.filter(e => {
            return e.name === profissao;
        })

        gravaHabilidadesProfissao(paraGravar[0].features);

        gravaProfissao(() => ({
            name: paraGravar[0].name,
            description: paraGravar[0].description,
            hitDice: paraGravar[0].hitDice,
            proefArmor: paraGravar[0].proefArmor,
            proefWeapon: paraGravar[0].proefWeapon,
            savingThrow: paraGravar[0].savingThrow,
            listaSkills: paraGravar[0].listaSkills,

        }))
    }
}