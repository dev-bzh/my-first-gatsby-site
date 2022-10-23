import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({data}) => {
    //data = query (requete graphql de la page transmise en tant que prop data, doit être défini en dehors du composant de page)
    return (
        <Layout pageTitle="My blog posts">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage