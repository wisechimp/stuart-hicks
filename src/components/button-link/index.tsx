import Link from 'next/link'

import styles from './buttonLink.module.css'

const ButtonLink = () => {
  return (
    <Link className={styles.buttonLink} href="./contact">
      Contact Me!
    </Link>
  )
}

export default ButtonLink
