import React from 'react'
import WorkType from '../../types/WorkType'
import { GatsbyImage, getImageData } from 'gatsby-plugin-image'
import { OutboundLink } from 'gatsby-plugin-gtag'

interface WorkCardProps {
  work: WorkType
}

const WorkCard = ({ work }: WorkCardProps) => {
  const { title, mainImage, description, dateRange, link } = work
  const { altText, gatsbyImageData } = mainImage.asset
  const projectImage = getImageData(gatsbyImageData)
  return (
    <div>
      <h2>{title}</h2>
      <GatsbyImage image={projectImage} alt={altText} />
      <p>{description}</p>
      <p>{dateRange}</p>
      <OutboundLink href={link} />
    </div>
  )
}

export default WorkCard
