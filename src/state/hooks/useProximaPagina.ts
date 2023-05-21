import { useLocation } from "react-router-dom";

export default function useProximaPagina (){
    const paginaAtual = useLocation()
    return () => console.log(paginaAtual);
}