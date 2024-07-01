import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Header = styled.div``
const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 8%;
`
const Column = styled.div`
  width: 33.33%;
  margin: 20px;
`

const App = () => {
  return (
    <Container>
      <Header>내식관리</Header>
      <Main>
        <Column>아침</Column>
        <Column>간식</Column>
        <Column>점심</Column>
        <Column>간식</Column>
        <Column>저녁</Column>
      </Main>
    </Container>
  )
}

export default App