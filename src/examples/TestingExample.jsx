import React from 'react'
import { graphql } from 'gatsby'

const TestingExample = ({ data }) => {
  const author = data.site.info.author
  return (
    <div>
      <h2>author: {author}</h2>
    </div>
  )
}

//

export const data = graphql`
  query {
    site {
      info: siteMetadata {   
        author
        description
        simpleData
        title
        complexData {
          name
          age
        }
        person {
          age
          name
        }
      }
    }
  }
`
//that "query" naming the object must be unique for each data. If there's more then one data with the sam name, it will give error.

export default TestingExample