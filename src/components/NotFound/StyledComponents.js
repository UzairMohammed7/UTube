import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
`
export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  height: 300px;
`
export const NotFoundHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
`
export const NotFoundDesc = styled.p`
  color: ${props => props.color};
  font-family: 'Poppins';
`
