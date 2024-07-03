import React from 'react'
import styled from 'styled-components'
import DietCard from './DietCard'

const Container = styled.div``
const Heading = styled.h2`
  display: flex;
  align-items: center;
`

const DietColumn = ({title}) => {
  return (
    <Container>
      <Heading>{title}</Heading>

      <DietCard/>
    </Container>
  )
}

export default DietColumn