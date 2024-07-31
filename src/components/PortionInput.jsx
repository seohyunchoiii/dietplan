import React from 'react'
import styled from 'styled-components'


const Container = styled.div``
const InputBox = styled.input``

const PortionInput = ({name, checked, checkedPortion, disabled}) => {
  return (
  <Container>
    <InputBox
        id={name}
        type="text"
        value={name}
        checked={checked}
        onChange={() => checkedPortion(name)}
        selected={checked}
        disabled = {disabled}
        />
        {/* <RadioLabel for={name}>{name}</RadioLabel> */}
  </Container>
  )
}

export default PortionInput