import Image from 'next/image'
import heroData from '../../dummyData/heroData'

const HeroImage = () => {
  const { text, imageSrc, imageAltText } = heroData
  return (
    <div>
    <Image
      src={imageSrc}
      width={900}
      height={500}
      alt={imageAltText}
    />
    <p>{text}</p>
    </div>
  )
}

export default HeroImage
