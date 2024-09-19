import Image from 'next/image'

import styles from './infoCard.module.css'

const InfoCard = ({ data }) => {
  const { title, text, imageSrc, imageAltText } = data

  return (
    <div className={styles.infoCardContainer}>
      <h2>{title}</h2>
      <Image src={imageSrc} width={350} height={200} alt={imageAltText} />
      <p className={styles.infoCardText}>{text}</p>
    </div>
  )
}

export default InfoCard
