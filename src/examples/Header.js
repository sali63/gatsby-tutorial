import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          name
          age
        }
      }
    }
  }
`
const Header = () => {
  const data = useStaticQuery(getData)
  const {
    site: {
      info: {
        author,

        person: { name, age },
      },
    },
  } = data

  return (
    <>
      <h3>{author}</h3>
      <h3>{name}</h3>
      <h4>{age}</h4>
    </>
  )
}

export default Header
