import React from 'react'
import { Link } from 'gatsby'

interface PagerProps {
  readonly prefix: string
  readonly page: number
  readonly total: number
}

function pageUrl(prefix: string, page: number): string {
  return page <= 1 ? `/${prefix}` : `/${prefix}/${page}`
}

export const Pager = ({ prefix, page, total }: PagerProps) => (
  <div>
    {page > 1 && <Link to={pageUrl(prefix, page - 1)}>Previous</Link>}
    {page < total && <Link to={pageUrl(prefix, page + 1)}>Next</Link>}
  </div>
)
