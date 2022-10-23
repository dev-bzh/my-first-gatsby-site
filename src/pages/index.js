import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout pageTitle="Homepage">
        <p>Texte inside layout component</p>
        <StaticImage
          alt="Plage by Connor James on Unsplash"
          src="../images/bretagne-plage.jpg"
        />
      </Layout>
  )
}

export const Head = () => <Seo title="Homepage"/>
export default IndexPage