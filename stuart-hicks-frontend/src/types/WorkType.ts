import { IGatsbyImageData } from 'gatsby-plugin-image'

type WorkType = {
  id: string
  mainImage: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      altText: string
    }
  }
  dateRange: string
  title: string
  body: {
    children: {
      text: string
    }
  }
  link: string
  slug: {
    current: string
  }
}

export default WorkType
