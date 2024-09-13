import Image from 'next/image'

const HeroImage = () => {
  return (
    <Image
      src="https://placehold.co/900x500"
      width={900}
      height={500}
      alt="A placeholder image with numbers showing the pixel dimensions of the image"
    />
  )
}

export default HeroImage
