import { memo } from 'react'
import styles from './Banner.module.scss';

function Banner() {
  return (
    <section className={styles.banner}>
      <h2>
        Forja de Lendas
      </h2>
    </section>
  )
}

export default memo(Banner)