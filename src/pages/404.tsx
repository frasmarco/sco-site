import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h2>Nothing Here</h2>
    <p>Check that you followed the correct address.</p>
    <p>
      <Link to="/">Inizio</Link>
    </p>
  </Layout>
)

export default NotFoundPage
