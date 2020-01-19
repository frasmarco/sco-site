import React from 'react'
import { Link } from 'gatsby'
import { LunrSearch } from './LunrSearch'
import { Header as BsHeader, Container, Img } from '@bootstrap-styled/v4'

interface HeaderProps {
  readonly title: string
}

export const Header = ({ title }: HeaderProps) => (
  <Container>
    <BsHeader className="py-3">
      <div>
        <Img fluid className="rounded" src="/testa.jpg" alt="" />
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <LunrSearch limit={10} />
      </div>
    </BsHeader>
  </Container>
)
