import React from "react"
import { Button } from "../components/Button"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello from gatsby home</h1>
      <Button onClick={() => console.log("cliked")}>click me</Button>
    </Layout>
  )
}
