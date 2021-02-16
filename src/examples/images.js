import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/waterfall.jpg"
import Img from "gatsby-image"

const getImages = graphql`
  query MyQuery {
    fluid: file(name: { eq: "landscape" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fixed: file(name: { eq: "forest" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    example: file(name: { regex: "/land/" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const {
    fluid: {
      childImageSharp: { fluid },
    },
    fixed: {
      childImageSharp: { fixed },
    },
    example,
  } = useStaticQuery(getImages)
  console.log(fluid)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} alt="" width="100%" />
      </article>

      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Img fixed={fixed}></Img>
      </article>

      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Img fluid={fluid}></Img>
        <Img fluid={example.childImageSharp.fluid}></Img>
      </article>
    </section>
  )
}

export default Images
