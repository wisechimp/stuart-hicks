import Image from 'next/image'

const InfoCard = () => {
  return (
    <div>
      <h2>Heading</h2>
      <Image
        src="https://placehold.co/300x200"
        width={300}
        height={200}
        alt="A placeholder image showing the dimensions in pixels"
      />
    </div>
  )
}

export default InfoCard
