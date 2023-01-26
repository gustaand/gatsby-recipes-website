import React from "react"
// import { Link } from "gatsby" 
//These links are intended for navigating around the project, not to external resources.
//For the external resources must use the traditional links.
import Layout from "../components/Layout"
//Made the global components in an unic component called 'layout' and change de global div for the <Layout></Layout>
//In the layout component, call de props.children or ({ children }) => (that will be the components of the page) in any place that we want.
//If we don't put the children, we won't see the components of the page.
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"


const Home = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage 
            src="../assets/images/main.jpeg" 
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>

        <AllRecipes />
        
      </main>
    </Layout>
  )
}

export default Home