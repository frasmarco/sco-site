import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { SiteMetadataQuery } from 'generated/types/gatsby'
import { Header } from './Header'
import { makeTheme } from 'bootstrap-styled'
import { BootstrapProvider } from '@bootstrap-styled/provider'

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

const theme: any = makeTheme({
  '$body-bg': '#2b3034'
})

export const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  return (
    <main>
      <BootstrapProvider theme={theme}>
        <Helmet
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords
            }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <div>{children}</div>
      </BootstrapProvider>
    </main>
  )
}
