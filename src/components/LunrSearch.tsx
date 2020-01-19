import React, { useState } from 'react'
import { useOutside } from '@pacote/react-use-outside'
import { Link } from 'gatsby'
import lunr from 'lunr'

declare global {
  interface Window {
    __LUNR__: {
      readonly [language: string]: {
        readonly index: lunr.Index
        readonly store: {
          readonly [key: string]: any
        }
      }
    }
  }
}

interface SearchResult extends lunr.Index.Result {
  readonly title: string
  readonly path: string
}

const search = (query: string): readonly SearchResult[] => {
  const { index, store } = window.__LUNR__ && window.__LUNR__.en
  return query ? index.search(query).map(({ ref }) => store[ref]) : []
}

interface LunrSearchProps {
  readonly limit?: number
}

export const LunrSearch = ({ limit }: LunrSearchProps) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<readonly SearchResult[]>([])
  const [isActive, setActive] = useState(false)

  const ref = useOutside<HTMLDivElement>('click', () => {
    setActive(false)
  })

  return (
    <div ref={ref}>
      <label>
        <span>Search</span>
        <input
          type="search"
          value={query}
          onChange={event => {
            setQuery(event.target.value)
            setResults(search(event.target.value))
            setActive(true)
          }}
        />
      </label>
      {isActive ? (
        <ul>
          {results.slice(0, limit).map((result, index) => (
            <li key={index}>
              <Link to={result.path}>{result.title}</Link>
            </li>
          ))}
          <li>
            Showing {limit ? `${Math.min(limit, results.length)} of` : null} {results.length}{' '}
            {results.length === 1 ? 'result' : 'results'}.
          </li>
        </ul>
      ) : null}
    </div>
  )
}
