import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'

// Aways save it as export DEFAULT! If you do not, it will fail.

export default function Contact({ data }) {

  const recipes = data.allContentfulRecepi.nodes

  return(
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h3>Want To Get In Touch?</h3>
            <p>
              This is just a quick example text to show the template. 
            </p>
            <p>
              Inside here would be some information about the contact, or any paragraph.
            </p>
            <p>
              If you are more creative to create paragraphs without using a Lorem Ipsum, then enjoy and create mine too ;p
            </p>
          </article>
          <article>
            <form className='form contact-form'>
              <div className='form-row'>
                <label htmlFor='name'>your name</label>
                <input type='text' name='name' id='name' />
              </div>
              <div className='form-row'>
                <label htmlFor='email'>your email</label>
                <input type='text' name='email' id='email' />
              </div>
              <div className='form-row'>
                <label htmlFor='message'>message</label>
                <textarea name='message' id='message'></textarea>
              </div>
              <button type='submit' className='btn block'>submit</button>
            </form>
          </article>
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