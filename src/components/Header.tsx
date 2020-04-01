import React from 'react'
import { Link } from 'gatsby'
import { LunrSearch } from './LunrSearch'
import { Header as BsHeader, Container, Img, H1 } from '@bootstrap-styled/v4'

interface HeaderProps {
  readonly title: string
}

export const Header = ({ title }: HeaderProps) => (
  <Container>
    <BsHeader className="py-3">
      <div>
        <Img fluid className="rounded" src="/testa.jpg" alt="Header image" />
        <H1 className="text-center caption">
          <Link to="/">{title}</Link>
        </H1>
        <LunrSearch limit={10} />
      </div>
    </BsHeader>
  </Container>
)
