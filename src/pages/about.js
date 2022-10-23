import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
    return (
        <Layout pageTitle="Title with component's prop">
            <p>Children inside layout component</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutPage