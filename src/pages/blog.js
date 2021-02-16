import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/blogs.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>hello from blog</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita hic
          sed nesciunt voluptas enim! Error excepturi voluptates iusto
          consectetur. Commodi.
        </p>
      </div>
    </Layout>
  )
}

export default blog
