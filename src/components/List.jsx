import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const ListButton = styled.input`
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
  background-color: white;
  cursor: pointer;
  &:hover {
    border: 2px solid #b02727;
    color: #b02727
  }
  /* display: none; */
`

const SelectList = styled.div`
  display: flex;
  color: ${(props) => props.selected ? '#b02727' : '#000000'};
`

const List = ({name, checkedList, checked}) => {
  console.log('checked',checked)
  return (
    <Container>
      <SelectList selected={checked}>
        <ListButton
        id={name}
        type="radio"
        value={name}
        checked={checked}
        onChange={() => checkedList(name)}
        selected={checked}
        />
        
        <RadioLabel for={name}>{name}</RadioLabel>
      </SelectList>
    </Container>
  )
}

export default List