import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const images = () => {
  return (
    <Wrapper>
      <StaticImage 
        src='../assets/images/recipe-1.jpg'
        alt='food' 
        placeholder='blurred'
        layout='fixed'
        width={200}
        height={200}
        className=''
        as='div'
      />
      <h2>Gatsby image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img{
    width: 200px;
  }
`
//All images that ar inside the Wrapper are being selected
//In any case, check the gatsby image-plugin-image documentation. There will be all the explanation about the plugin.
export default images