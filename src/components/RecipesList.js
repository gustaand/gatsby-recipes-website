import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const RecipesList = ({recipes=[]}) => {
  return (
    <div className='recipes-list'>
      {recipes.map((recipes)=>{
        const {id, title, image, prepTime, cookTime} = recipes;

        //in the case that we don't have images, so as not to give an error
        const pathToImage = getImage(image)

        // Slugify the text.
        const slug = slugify(title, {lower: true})

        // since i have a list in React, i neet to add a Key prop and something dynamic: in this case, the ID
        return (
          <Link key={id} to={`/${slug}`} className='recipe'>
            <GatsbyImage
              image={pathToImage} 
              className='recipe-img' 
              alt={title} 
            />
            <h5>{title}</h5>
            <p>Prep : {prepTime}min | Cook : {cookTime}min</p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
