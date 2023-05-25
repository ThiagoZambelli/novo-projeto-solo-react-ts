import { useSetRecoilState } from "recoil";
import { paginasCadastro } from "state/atom";

export default function useGravaPaginasCadastro() {
    const setPaginas = useSetRecoilState(paginasCadastro);
    return (pagina: string) => {
        if (pagina === 'ancestralidade') {
            setPaginas(antiga => ({
                ...antiga,
                ancestralidade: true
            }));
        } else if (pagina === 'experiencias') {
            setPaginas(antiga => ({
                ...antiga,
                experiencias: true
            }));
        } else if (pagina === 'profissao') {
            setPaginas(antiga => ({
                ...antiga,
                profissao: true
            }));
        }else if (pagina === 'final') {
            setPaginas(antiga => ({
                ...antiga,
                final: true
            }));
        }
    }
}