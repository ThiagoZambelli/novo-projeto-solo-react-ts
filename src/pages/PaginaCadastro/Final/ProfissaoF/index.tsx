import IPersonagem from 'Interfaces/IPersonagem'
import React from 'react'
import Descricao from './Descricao'
import styles from './ProfissaoF.module.scss';

interface Props {
    personagem: IPersonagem
}

function ProfissaoF({ personagem }: Props) {
    
    return (        
        <div className={styles.profissao}>
            <div className={styles.profissao__titulo}>
                <h2>{personagem.profissao.name}</h2>
                <p><span>Seu Dado de Vida: </span>{personagem.profissao.hitDice}</p>              
                <p><span>Armaduras que pode usar: </span>{personagem.profissao.proefArmor}</p>             
                <p><span>Armas que pode usar: </span>{personagem.profissao.proefWeapon}</p>             
                <p><span>Suas Pericias: </span>{personagem.profissao.listaSkills}</p>            
                <p><span>Suas Melhores resistencias: </span>{`${personagem.profissao.savingThrow[0]} e ${personagem.profissao.savingThrow[1]}`}</p>            
            </div>
            <div className={styles.profissao__habilidades}>
                {personagem.habilidadesProfisso.map(e => (<Descricao key={e.name} habilidade={e} />))}                
            </div>
        </div>
    )
}

export default ProfissaoF