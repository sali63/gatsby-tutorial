import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/products.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Img fluid={product.image.fluid} alt={product.title}></Img>
              <h3>
                {product.title}
                <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>check out</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
          resize(cropFocus: RIGHT) {
            height
          }
        }
      }
    }
  }
`
export default products
