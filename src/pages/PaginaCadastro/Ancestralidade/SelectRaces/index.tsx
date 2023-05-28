import { useState, memo } from 'react'
import races from 'assets/db/races.json';
import useGravaRace from 'state/hooks/useGravaRace';
import styles from './SelectRaces.module.scss';
import usePegaRace from 'state/hooks/usePegaRace';
import SelectSub from '../SelectSub';
import { useSetRecoilState } from 'recoil';
import { subRace } from 'state/atom';

function SelectRaces() {
    const gravaRace = useGravaRace();
    const race = usePegaRace();
    const resetaSub = useSetRecoilState(subRace);
    const [raceAtual, setRaceAtual] = useState('')    


    const mudaValor = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setRaceAtual(evento.target.value);
        gravaRace(evento.target.value);
        resetaSub(() => ({
            name: '',
            description: ''
        }))
    }
    

    return (
        <section className={styles.selectRaces}>
            <div className={styles.selectRaces__titulo}>
                <h2>Ancestralidade</h2>
                <p>Agora vamos para uma das partes mais importantes, sua Ancestralidade. Em um mundo de Alta-Fantasia, o sangue que corre em suas veias diz muito sobre quem você é!</p>
            </div>
            <div className={styles.selectRaces__escolhas}>
                <p>Escolha uma das opções:</p>
                <select value={raceAtual} onChange={mudaValor}>
                    {race.name === '' ? <option> ---- </option> : ''}
                    {races.map(race => (<option value={race.name} key={race.name}>{race.name}</option>))}
                </select>
                <SelectSub />
            </div>
        </section>
    )
}

export default memo(SelectRaces)