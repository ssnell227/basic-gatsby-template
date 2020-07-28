import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Index page</p>
    <Link to='/page-2'>Second Page</Link>
  </Layout>
)

export default IndexPage
