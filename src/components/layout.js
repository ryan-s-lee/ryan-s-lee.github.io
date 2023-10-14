import * as React from 'react'
import Navbar from "./navbar";
import { container } from './layout.module.css'
import "./layout.css"
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({children}) => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
            siteMetadata {
                title
            }
        }
    }`)
    return(
        <div className={container}>
        <Navbar/>
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
        </header>
        <main>
            {children}
        </main>
        </div>
    )
}


export default Layout;