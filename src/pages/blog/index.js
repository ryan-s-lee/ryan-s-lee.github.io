import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'

const BlogPage = ({data}) => {
    let blogItems = data.allMdx.nodes.map((node) => {
        return <p key={node.frontmatter.title}><Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></p>
    })
    return (
        <Layout>
            <h2>Blog</h2>
            {blogItems}
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx {
        nodes {
            frontmatter {
                title
                slug
                date
            }
        }
    }
}
`
export const Head = () => <Seo title="Blog"/>

export default BlogPage;