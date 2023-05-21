import usePegaListaSub from "./usePegaListaSub";

export default function useTestaSub (){    
    const listaSub = usePegaListaSub();

    if(listaSub.length > 1){
        return listaSub
    }else{
        return 
    }
}