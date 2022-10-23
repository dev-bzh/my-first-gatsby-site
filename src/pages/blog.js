import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({data}) => {
    //data = query (requete graphql de la page transmise en tant que prop data, doit être défini en dehors du composant de page)
    return (
        <Layout pageTitle="My blog posts">
            
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>

        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage