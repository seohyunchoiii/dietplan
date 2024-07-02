import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Meal = styled.button`
  font-size: 14px;
  font-weight: 500;
  background-color: #f9f9f9;
  border: 1px solid #dfe3e6;
  border-radius: 5px;
  padding: 2px 10px;
  margin-right: 10px;
  cursor: pointer;
`

const Meals = ({name, selectMeal, selected}) => {
  const buttonStyle = {
    조식: {backgroundColor: "#fda821"},
    간식1: {backgroundColor: "#15d4c8"},
    중식: {backgroundColor: "#ffd12c"},
    간식2: {backgroundColor: "#4c75fc"},
    석식: {backgroundColor: "#a275c3"},
    default: {backgroundColor: "#f9f9f9"},
  }

  return (
    <Container>
      <Meal
        type = "button"
        style = {selected ? buttonStyle[name] : buttonStyle.default}
        onClick = { () => selectMeal(name)}>
      </Meal>
    </Container>
  )
}

export default Meals