import { useState } from 'react';
import styles from './InputT.module.scss';
import useGravaNomes from 'state/hooks/useGravaNomes';

interface IInputT {
    type: string,
    label: string,
    required?: boolean,
    campo: string 
}

export default function InputT({ campo, type, label, required = false }: IInputT) {

    const [value, setValue] = useState('')
    const setNomes = useGravaNomes()
    

    const mudandoValor = (evento : React.ChangeEvent<HTMLInputElement>) => {
        let valor = evento.target.value;
        setValue(valor);
        setNomes(campo, valor);              
    }
    const prevenirEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      };

    return (
        <div className={styles.input_grup}>
            <input
                required={required}
                type={type}
                value={value}
                onChange={evento => mudandoValor(evento)}
                onKeyDown={prevenirEnter}              
            />
            <label
                className={value ? styles.preenchido : ''}
            >{label}</label>
        </div>
    )
}