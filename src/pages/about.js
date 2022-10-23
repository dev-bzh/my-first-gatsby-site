import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTitle="Title with component's prop">
            <p>Children inside layout component</p>
        </Layout>
    )
}

export const Head = () => <title>About Page</title>

export default AboutPage