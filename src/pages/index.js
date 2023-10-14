import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <h2>About Me</h2>
      <p>
        I'm an undergraduate at UC San Diego with experience in web development.
        I'm also interested in computer systems, having taken coursework in OS
        design and tutored frequently for Computer Systems classes. Artificial
        intelligence and deep learning has been another interest of mine since 
        high school. Basically, I want to learn everything there is to know about 
        computation!
      </p>
      <h2>Skills</h2>
      <p className="hanging-indent">
        <strong>Languages:</strong> Python, C/C++/C#, Java, JS/TS, ARM, x86, 
        Bash, HTML/CSS, GraphQL, SQL
      </p>
      <p className="hanging-indent">
        <strong>Libraries:</strong> React, Numpy
      </p>
      <p className="hanging-indent">
        <strong>Frameworks:</strong> Unity Game Engine, GatsbyJS, Svelte, NextJS, Django
      </p>
      <p className="hanging-indent">
        <strong>Concepts:</strong> REST Frameworks/HTTP, Data structures and 
        Algorithms, Computer Systems (especially Linux but also Windows), 
        OS Design, Artificial Intelligence
      </p>
      <h2>My Work</h2>
      <p>
        <ul>
          <li>
            <a href="https://portal.hknucsd.com/">Portal for HKN @ UCSD</a>. 
            Developed with Django Rest Framework and Svelte. Tracked
            guest and member activity during events and provided a secure interface 
            for administrative duties.
          </li>

        </ul>
      </p>
      <h2>Other Stuff</h2>
      <h3>Music I like</h3>
      <p>Prog rock, mainly. I have some background in classical music performance
        and theory, so I really admire that mix of technical ability, and smart
        rhythms. But it also just sounds really cool.
      </p>
    </Layout>
  );
}

export const Head = () => <Seo title="Home"/>
export default IndexPage
