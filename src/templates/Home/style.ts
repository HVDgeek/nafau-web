import styled from 'styled-components'

export const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

export const HelloImage = styled.img`
  max-height: 100px;
  object-fit: contain;
  margin-right: 20px;
`

export const MainGreeting = styled.div`
  margin-left: 1rem;
`

export const BoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
`

export const Card = styled.div`
  position: relative;
  flex: 1;
  max-width: 300px;
  height: 150px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex: 100%;
    max-width: 600px;
  }
`
export const Number = styled.h2`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
`
export const Title = styled.h4`
  color: #fff;
  font-size: 18px;
`

export const MainCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin: 2rem 0;
  padding: 0 10px;

  @media only screen and (max-width: 855px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 0;
  }
`
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  padding: 25px;
  border-radius: 5px;
  background: #ededed;
  // box-shadow: 2px 2px 8px #ededed, -2px -2px 8px #ffffff;

  @media only screen and (max-width: 855px) {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
`

export const CardInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardInnerText = styled.p`
  color: #a5aaad;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`

export const CardInnerSpan = styled.span`
  color: #2e4a66;
  font-size: 25px;
  font-weight: 700;
`
export const NewCard = styled.div`
  //background: #50a7ff;
  position: relative;
  flex: 1;
  max-width: 460px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 800px) {
    flex: 100%;
    max-width: 600px;
  }
`
export const NewCardContent = styled.div`
  background: #ff7675;
  position: relative;
  flex: 1;
  max-width: 1270px;
  height: 300px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 20%);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex: 100%;
    max-width: 600px;
  }
`
