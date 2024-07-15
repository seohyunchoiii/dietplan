import React from 'react'
import styled from 'styled-components'

const buttonStyle = {
  조식: {backgroundColor: "#fda821"},
  간식1: {backgroundColor: "#15d4c8"},
  중식: {backgroundColor: "#ffd12c"},
  간식2: {backgroundColor: "#4c75fc"},
  석식: {backgroundColor: "#a275c3"},
  default: {backgroundColor: "#f9f9f9"},
}

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.selected ? buttonStyle[props.name].backgroundColor : '#fff'};
`
const MealRadioButton = styled.input`
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
const Meals = ({name, selectMeal, selected}) => {
console.log('name')

  console.log('name',name)
  return (
    <Container selected={selected} name={name}>
      <MealRadioButton
        id={name}
        type="radio"
        // name="meal"
        value={name}
        checked={selected}
        onChange={() => selectMeal(name)}
        selected={selected}
        />
        <RadioLabel for={name}>{name}</RadioLabel>
    </Container>
  )
}

export default Meals