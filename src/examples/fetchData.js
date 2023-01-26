import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
{
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

// the info behind the siteMetadata (info: siteMetadata) is an Alias, that is used to shorten de syntax. Can be called any name.

const FetchData = () => {

  const {
    site: {
      info: { title }, 
    },
  } = useStaticQuery(getData) // <--- we can destructure the object

  return (
    <div>
      {/* <h2>name : {data.site.siteMetadata.person.name}</h2> */} 
      <h2>site title is : { title }</h2>
    </div>
  )
}

export default FetchData