import React from 'react'
import styled from "styled-components";
import Category from './Category';

const Container = styled.div``
const CategoryWrapper = styled.div`
  display: flex;
  gap: 30px;
`

const Menu = () => {
  return (
    <Container>
      <CategoryWrapper>
        <Category name="밥류"/>
        <Category name="과자 및 빵류"/>
      </CategoryWrapper>
    </Container>

  )
}

export default Menu