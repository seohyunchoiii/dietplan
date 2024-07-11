import React, {useState,useRef} from 'react'
import styled from 'styled-components'
import Meals from './Meals'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dcdcdc;
  `

const Form = styled.form`
  width: 40%;
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MealsWrapper = styled.div`
  display: flex;
`
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`

const Open = styled.button`
  font-size: 16px;
  font-weight: 500;
  background-color: #6457f9;
  color: #fff;
  border-radius: 5px;
  height: 40px;
  padding: 3px 13px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
`
const Window = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.5);
`
const Content = styled.article`
  background-color: #ffffff;
  width: 80%;
  height: 80%;
  padding: 15px;
`
const Paragraph = styled.p``
const Close = styled.button`
  cursor: pointer;
  margin-left: auto;
`

const DietForm = ({setDiets}) => {
  const [dietData, setDietData] = useState({
    meals: []
  })

  const checkMeal = (meal) => {
    return dietData.meals.some(item => item === meal)
  }

  const selectMeal = (meal) => {
    if(dietData.meals.some(item => item === meal)) {
      // when meal is already available in the Array, remove the meal
      const filterMeals = dietData.meals.filter(item => item !== meal)
      setDietData(prev => {
        return {...prev, meals: filterMeals}
      })
    }
    else {
      setDietData(prev => {
        return {...prev, meals: [meal]}
      })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dietData);
    setDiets(prev => {
      return [...prev, dietData];
    });
    setDietData({
      buttons: []
    }
    )
  }
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Bottom>
          <MealsWrapper>
            <Meals name="조식" selectMeal={selectMeal} selected={checkMeal("조식")}/>
            <Meals name="간식1" selectMeal={selectMeal} selected={checkMeal("간식1")}/>
            <Meals name="중식" selectMeal={selectMeal} selected={checkMeal("중식")}/>
            <Meals name="간식2" selectMeal={selectMeal} selected={checkMeal("간식2")}/>
            <Meals name="석식" selectMeal={selectMeal} selected={checkMeal("석식")}/>
          </MealsWrapper>
          
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
              <Content>
                <Paragraph>메뉴를 선택하세요.</Paragraph>
                <Close onClick={() => setModalOpen(false)}>닫기</Close>
              </Content>
            </Window>
          }
            </Bottom>
      </Form>
    </Container>
  )
}

export default DietForm