import React, {useState} from 'react'
import styled from "styled-components";
import Category from './Category';
import List from './List';

const Container = styled.div``
const CategoryWrapper = styled.div`
  display: flex;
  gap: 30px;
`

const ListWrapper = styled.div`
  display: flex;
  gap: 10px;
`
const Title = styled.h2`
  display: flex;
`
const TitleB = styled.h2`
  display: flex;
  margin-top: 100px;
`
const Box = styled.div`
  background-color: #efc180;
  width: 800px;
  height: 200px;
  padding: 10px 10px;
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

  const [y, setY] = useState({
    list : []
  })
  const checkedB= (a) => {
    return y.list.includes(a);
  }

  const checkedList =  (a) => {
    setY({list: [a]});
  }

  return (
    <Container>

      <Title>메뉴선택</Title>
      <CategoryWrapper>
        <Category name="밥류" checked={checked("밥류")} checkedCategory={checkedCategory}/>
        <Category name="과자및빵류" checked={checked("과자및빵류")} checkedCategory={checkedCategory}/>
      </CategoryWrapper>

      <TitleB>음식 목록</TitleB>
      <Box>
      <ListWrapper>
        <List name="감자밥" category="밥류" checked={checkedB("감자밥")} checkedList={checkedList}/>
        <List name="검정콩밥" category="밥류" checked={checkedB("검정콩밥")} checkedList={checkedList}/>
      </ListWrapper>
      </Box>
    </Container>

  )
}

export default MenuCategory