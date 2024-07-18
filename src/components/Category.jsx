import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const CategoryButton = styled.input`
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #101316;
  border-radius: 5px;
  padding: 2px 10px;
  margin-right: 10px;
  /* display: none; */
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
      <CategoryButton
      id={name}
      type="radio"
      value={name}
      checked={checked}
      onChange={() => checkedCategory(name)}
      // selected={selected}
      />
      <RadioLabel for={name}>{name}</RadioLabel>
    </Container>
    
  )
}

export default Category