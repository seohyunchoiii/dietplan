import React from 'react'
import styled from 'styled-components'
import Meals from './Meals'
import deleteIcon from '../assets/delete.png'

const Container = styled.article`
  width: 100%;
  min-height: 100px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
`
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Tags = styled.div`
  display: flex;
`

const DietCard = () => {
  return (
    <Container>
      <Card>
        <Tags>
        </Tags>
      </Card>
    </Container>
  )
}

export default DietCard