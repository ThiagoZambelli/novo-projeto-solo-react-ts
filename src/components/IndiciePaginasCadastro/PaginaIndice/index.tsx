import { AiOutlineLine } from 'react-icons/ai';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import styles from './PaginaIndice.module.scss';
import { useNavigate } from 'react-router-dom';
import useGravaPersonagem from 'state/hooks/useGravaPersonagem';


interface IProps {
  titulo: string,
  habilitado?: boolean
  grava?: boolean
  onde: string
}


function PaginaIndicie({ titulo, habilitado, onde, grava }: IProps) {  
  const navegar = useNavigate()
  const gravaPersonagem = useGravaPersonagem()

  const irPara = (onde: string) => {
    if(grava){
      gravaPersonagem()
    }   
    navegar(`/forja/${onde}`)    
  }


  return (
    <div onClick={() => irPara(onde)} className={`${styles.pagina} ${habilitado ? styles.habilitado : ''}`}>
      {titulo}
      <AiOutlineLine />
      <BsFillRecordCircleFill />
      {titulo === 'Final' ? '' : <AiOutlineLine />}
    </div>
  )
}

export default PaginaIndicie