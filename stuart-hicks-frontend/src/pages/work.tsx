import React from 'react'
import Layout from '../components/layout/Layout'
import WorkCard from '../components/workcard/WorkCard'
import { PageProps, graphql } from 'gatsby'

const Work = ({ data }: PageProps<Queries.WorkPageQuery>) => {
  return (
    <Layout pageTitle="Work Experience">
      {data.allSanityWork.edges.map(({ node }) => {
        return <WorkCard work={node} />
      })}
    </Layout>
  )
}

export default Work

export const workQuery = graphql`
  query WorkPage {
    allSanityWork {
      edges {
        node {
          id
          mainImage {
            asset {
              gatsbyImageData
              altText
            }
          }
          dateRange
          title
          link
          slug {
            current
          }
          body {
            children {
              text
            }
          }
        }
      }
    }
  }
`
