import React from 'react'

const RecipeTemplate = props => {
  return (
    <div>
      <h2>{props.params.title}</h2>
    </div>
  )
}

export default RecipeTemplate

//have to install npm slugify: A npm package to slugfy the URLs.