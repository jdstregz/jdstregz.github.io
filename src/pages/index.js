import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p/>
    <div style={{ maxWidth: `500px`, margin: 'auto', marginBottom: `1.45rem` }}>
       <Image/>
    </div>
    <p style={{textAlign: 'center'}}>Welcome to my blog thingy.</p>
  </Layout>
)

export default IndexPage
