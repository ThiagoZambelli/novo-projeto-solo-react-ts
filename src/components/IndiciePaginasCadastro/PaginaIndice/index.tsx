import { AiOutlineLine } from 'react-icons/ai';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import styles from  './PaginaIndice.module.scss';

interface IProps {
  titulo : string,
  habilitado? : boolean
}

function PaginaIndicie({titulo, habilitado}: IProps) {


  return (
    <div className={`${styles.pagina} ${habilitado ? styles.habilitado : ''}`}>
      {titulo}
      <AiOutlineLine />
      <BsFillRecordCircleFill />
      {titulo === 'Final' ? '' : <AiOutlineLine />}
    </div>
  )
}

export default PaginaIndicie