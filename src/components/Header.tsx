import React from 'react'
import { Link } from 'gatsby'
import { LunrSearch } from './LunrSearch'

interface HeaderProps {
  readonly title: string
}

export const Header = ({ title }: HeaderProps) => (
  <div>
    <div>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <LunrSearch limit={10} />
    </div>
  </div>
)
