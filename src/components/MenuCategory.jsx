import React, {useState} from 'react'
import styled from "styled-components";
import Category from './Category';

const Container = styled.div``
const CategoryWrapper = styled.div`
  display: flex;
  gap: 30px;
`

const MenuCategory = () => {

  const [x, setX] = useState({
    category : []
  })

  const checked = (a) => {
    return x.category.includes(a);
  }

  const checkedCategory = (a) => {
    setX({category: [a]});
  }

  return (
    <Container>
      <CategoryWrapper>
        <Category name="밥류" checked={checked("밥류")} checkedCategory={checkedCategory}/>
        <Category name="과자및빵류" checked={checked("과자및빵류")} checkedCategory={checkedCategory}/>
      </CategoryWrapper>
    </Container>

  )
}

export default MenuCategory