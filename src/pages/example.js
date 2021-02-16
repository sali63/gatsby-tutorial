import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import { graphql } from "gatsby"

const example = ({
  data: {
    site: { info },
  },
}) => {
  return (
    <Layout>
      <p>hello from example</p>
      <h3>title: {info.title}</h3>
      <Header></Header>
    </Layout>
  )
}
export const query = graphql`
  query Myquery {
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

export default example
