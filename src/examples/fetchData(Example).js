import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
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
  `)
  return(
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexData.map((item, index)=>{
          return <p key={index}>{item.name}:{item.age}</p>
        })}
      </div>
    </div>
  )
}

export default ComponentName

// That file was used to get data on a div.