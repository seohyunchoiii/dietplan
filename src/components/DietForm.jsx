import React, {useState} from 'react'
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
const MealsWrapper = styled.div`
  display: flex;
`
const Submit = styled.button`
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

const DietForm = ({setDiets}) => {
  const [dietData, setDietData] = useState({
    meals: []
  })

  const checkMeal = (meal) => {
    return dietData.meals.some(item => item === meal)
  }

  const selectMeal = (meal) => {
    if(dietData.meals.some(item => item === meal)) {
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

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <MealsWrapper>
          <Meals name="조식" selectMeal={selectMeal} selected={checkMeal("조식")}/>
          <Meals name="간식1" selectMeal={selectMeal} selected={checkMeal("간식1")}/>
          <Meals name="중삭" selectMeal={selectMeal} selected={checkMeal("중식")}/>
          <Meals name="간식2" selectMeal={selectMeal} selected={checkMeal("간식2")}/>
          <Meals name="석식" selectMeal={selectMeal} selected={checkMeal("석식")}/>
        </MealsWrapper>
        <Submit>
          + Add Diet
        </Submit>
      </Form>
    </Container>
  )
}

export default DietForm