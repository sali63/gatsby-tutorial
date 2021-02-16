import { graphql, Link } from "gatsby"

import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"

const productTemplate = ({
  data: {
    product: {
      title,
      price,
      info: { info },
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>single product</h1>
      </div>
      <section className="single-product">
        <article>
          <Img fixed={fixed} alt={title}></Img>
        </article>
        <article>
          <h1>{title}</h1>
          <h3>{price}</h3>
          <p>{info}</p>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      id
      title
      price
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default productTemplate
