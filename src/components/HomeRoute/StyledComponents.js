import styled from 'styled-components'

export const MainPageContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
`
export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  display: ${props => props.display};
  width: 93%;
  height: 30vh;
  padding: 35px;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 25vh;
    padding: 20px;
  }
`
export const BannerImage = styled.img`
  object-fit: fill;
  height: 50px;
  width: 220px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

export const GetItNowButton = styled.button`
  color: #181818;
  text-align: center;
  background-color: transparent;
  height: 70px;
  width: 100px;
  margin: 20px 0;
  border: 1px solid #181818;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover{
    background-color: #ffffff; 
    transform: scale(1.05);
  }
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const HomeSideContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const HomeStickyContainer = styled.div`
  position: sticky;
  top: 0;
`