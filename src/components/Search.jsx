import React, {useState,useRef} from 'react'
import styled from 'styled-components'

const Container = styled.div``
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`

const Open = styled.btn``
const Window = styled.div``

const Search = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <Container>
      <BtnWrapper>
        <Open onClick={() => setModalOpen(true)}>
          메뉴 검색
        </Open>
      </BtnWrapper>
      {
        modalOpen &&
        <Window ref={modalBackground} onClick={ e=> {
          if (e.target === modalBackground.current){
            setModalOpen(false);
          }
        }}>
          
        </Window>

      }
    </Container>
  )
}

export default Search