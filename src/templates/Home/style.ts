import styled from 'styled-components'

export const BoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
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
