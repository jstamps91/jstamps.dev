import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

export function AvatarHome(props) {
    return (
        <Container>
            <AvatarContainer>
                <GatsbyImage alt='avatar' image={props.image} />
            </AvatarContainer>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`
const AvatarContainer = styled.div`
  width: 150px;
  ${media.sm`
    width: 150px;
  `}
  ${media.lg`
    width: 200px;
  `}
  .gatsby-image-wrapper {
    z-index: 1;
    overflow: inherit !important;
    display: block;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -20%;
      transform: rotate(-45deg);
      height: 150px;
      width: 150px;
      background-color: #8daac8;
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 4%;
      left: 6%;
      background-color: #5b0e17;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`

export default props => (
  <Container>
    <AvatarContainer>
      <GatsbyImage alt="avatar" image={props.avatar} />
    </AvatarContainer>
  </Container>
)