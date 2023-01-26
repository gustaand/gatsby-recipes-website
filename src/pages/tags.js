import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'

const Tags = ({ data }) => {

  const newTag = setupTags(data.allContentfulRecepi.nodes)

  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {newTag.map((tag, index) => {
            const [text, value] = tag

            return (
              <Link to={`/${text}`} key={index} className='tag' >
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            )

          })}
        </section>
      </main>      
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecepi {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags;