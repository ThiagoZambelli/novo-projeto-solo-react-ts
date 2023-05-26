import { AiOutlineLine } from 'react-icons/ai';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import styles from  './PaginaIndice.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
  titulo : string,
  habilitado? : boolean
  onde: string
}

function PaginaIndicie({titulo, habilitado, onde}: IProps) {
  const navegar = useNavigate()

  const irPara = (onde: string) => {
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