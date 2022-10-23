import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <title>{data.site.siteMetadata.title} | {title}</title>
    )
}

export default Seo