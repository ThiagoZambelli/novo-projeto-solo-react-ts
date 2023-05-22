import { useSetRecoilState } from "recoil";
import { experiencia } from "state/atom";
import listaExperiencia from 'assets/db/bg.json';

export default function useGravaExperiencia() {
    const gravaExperiencia = useSetRecoilState(experiencia);

    return (experiencia: string) => {

        const descricao = {
            ...listaExperiencia.filter(elemento => {
                return elemento.title === experiencia;
            })
        }

        gravaExperiencia(experienciaAntiga => ({
            ...experienciaAntiga,
            title: experiencia,
            description: descricao[0].description,
        }))

    }
}