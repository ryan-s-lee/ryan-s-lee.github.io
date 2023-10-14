import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby';

const BlogPost = ({data, children}) => {
    return(
        <Layout>
            <h2>{data.mdx.frontmatter.title}</h2>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </Layout>
    )
}

export const query = graphql`
query ($id:String) {
    mdx(id: {eq: $id}) {
        frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
        }
    }
}
`

export const Head = () => <Seo title="Blog Post" />

export default BlogPost;