import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'

const about = ({data:{allContentfulRecepi:{nodes:recipes}}}) => {

  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>This is the About page!</h2>
            <p>
              This is just a quick example text to show the template. 
              Inside here would be some information about the contact, 
              or any paragraph.
            </p>
            <p>
              If you are more creative to create paragraphs without using a Lorem Ipsum,
              then enjoy and create mine too ;p...
            </p>
            <Link to='/contact' className='btn'>contact</Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg' 
            alt='Person Pouring Salt in Bow' 
            className='about-img'
            placeholder='blurred'
          />
        </section>

        <section className='featured-recipes'>
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecepi(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default about