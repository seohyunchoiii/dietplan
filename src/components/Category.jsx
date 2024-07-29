import React from 'react'
import styled from 'styled-components'

const ButtonStyle = {
  밥류: {backgroundColor: "#fda821"},
  과자및빵류: {backgroundColor: "#15d4c8"},
//   국류: {backgroundColor: "#ffd12c"},
//   찌개류: {backgroundColor: "#4c75fc"},
//   찜류: {backgroundColor: "#a275c3"},
  default: {backgroundColor: "#f9f9f9"},
}

const Container = styled.div``
const SelectCategory = styled.div`
  display: flex;
  background-color: ${(props) => props.selected ? ButtonStyle[props.name].backgroundColor : '#fff'};
`
const CategoryButton = styled.input`
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #101316;
  border-radius: 5px;
  padding: 2px 10px;
  margin-right: 10px;
  display: none;
`
const RadioLabel = styled.label`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dfdfdf;
  cursor: pointer;
`

const Category = ({name, checked, checkedCategory}) => {
  return (
    <Container>
      <SelectCategory selected={checked} name={name}>
        <CategoryButton
        id={name}
        type="radio"
        value={name}
        checked={checked}
        onChange={() => checkedCategory(name)}
        selected={checked}
        />
        <RadioLabel for={name}>{name}</RadioLabel>
      </SelectCategory>
    </Container>
  )
}

export default Category