import Image from 'next/image'
import infoCardData from '../../dummyData/infoCardData'

const InfoCard = () => {
  const { title, text, imageSrc, imageAltText } = infoCardData

  return (
    <div>
      <h2>{title}</h2>
      <Image
        src={imageSrc}
        width={300}
        height={200}
        alt={imageAltText}
      />
      <p>{text}</p>
    </div>
  )
}

export default InfoCard
