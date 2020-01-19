import React from 'react'
import { IndexPageQuery, TagPageQuery } from 'generated/types/gatsby'
import { Link } from 'gatsby'

interface ContentListProps {
  readonly edges: IndexPageQuery['allMdx']['edges'] | TagPageQuery['allMdx']['edges']
}

export const ContentList = ({ edges }: ContentListProps) => (
  <ul>
    {edges.map(({ node }) => {
      const { path, title } = node.frontmatter
      return (
        <li key={path}>
          <Link to={path}>{title}</Link> ({node.frontmatter.date})
        </li>
      )
    })}
  </ul>
)
