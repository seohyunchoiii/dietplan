import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const PortionButton = styled.input`
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #101316;
  border-radius: 5px;
  padding: 2px 10px;
  margin-right: 10px;
`
const RadioLabel = styled.label`
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Portion = ({name, checked, checkedPortion}) => {
  return (
    <Container>
        <PortionButton
        id={name}
        type="radio"
        value={name}
        checked={checked}
        onChange={() => checkedPortion(name)}
        selected={checked}
        />
        <RadioLabel for={name}>{name}</RadioLabel>
      
    </Container>
  )
}

export default Portion