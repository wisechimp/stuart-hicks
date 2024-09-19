import Image from 'next/image'
import heroData from '../../dummyData/heroData'

import styles from './heroImage.module.css'
import ButtonLink from '../button-link'

const HeroImage = () => {
  const { text, imageSrc, imageAltText } = heroData
  return (
    <div className={styles.heroImageContainer}>
      <Image src={imageSrc} width={900} height={500} alt={imageAltText} />
      <div className={styles.heroImageCaption}>
        <p className={styles.heroImageCaptionText}>{text}</p>
        <ButtonLink />
      </div>
    </div>
  )
}

export default HeroImage
