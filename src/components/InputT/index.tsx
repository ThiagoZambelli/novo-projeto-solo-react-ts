import { useState } from 'react';
import styles from './InputT.module.scss';

interface IInputT {
    type: string,
    label: string,
    required?: boolean

}

export default function InputT({ type, label, required = false }: IInputT) {

    const [value, setValue] = useState('')

    return (
        <div className={styles.input_grup}>
            <input
                required={required}
                type={type}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <label
                className={value ? styles.preenchido : ''}
            >{label}</label>
        </div>
    )
}