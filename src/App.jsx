import React, {useState} from 'react'
import styled from 'styled-components'
import DietForm from './components/DietForm'
import DietColumn from './components/DietColumn'

const Container = styled.div``
const Header = styled.div`
  display: flex;
  justify-content: center;
`
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
      <DietForm/>
      <Main>
        <Column><DietColumn title="조식"/></Column>
        <Column>간식 1</Column>
        <Column>중식</Column>
        <Column>간식 2</Column>
        <Column>석식</Column>
      </Main>
    </Container>
  )
}

export default App