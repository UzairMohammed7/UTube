import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 40px;
  position: sticky;
  background-color: ${props => props.bgColor};
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
  }
`

export const ProfileAndLogoutContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin-left: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => (props.isDarkTheme ? '#4d4d4d' : '#ccc')};
    transition: 0.4s;
    border-radius: 30px;

    &::before {
      position: absolute;
      content: '';
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: #fff;
      transition: 0.4s;
      border-radius: 50%;
      transform: ${props => (props.isDarkTheme ? 'translateX(30px)' : 'translateX(0)')};
    }

    .icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      color: #000000;
    }

    .sun-icon {
      left: 6px;
      opacity: ${props => (props.isDarkTheme ? 0 : 1)};
      transition: opacity 0.4s;
    }

    .moon-icon {
      right: 6px;
      opacity: ${props => (props.isDarkTheme ? 1 : 0)};
      transition: opacity 0.4s;
    }
  }
`


export const NavBarListItems = styled.li`
  list-style-type: none;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`

export const WebsiteLogoImage = styled.img`
  width: 140px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
    height: 25px;
  }
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  border-color: ${props => props.color};
  border-width: 2px;
  border-style: solid;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Poppins';
  border-radius: 5px;
  padding: 5px;
  width: 80px;
  cursor: pointer

  &:hover{
    transform: scale(1.05)
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    width: 80px;
    padding: 5px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
    width: 60px;
    padding: 3px;
  }
`

export const LogoutIcon = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  border: none;
  cursor: pointer
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

`

export const PopupDesign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  box-shadow: 0 2px 5px 0;
  border-radius: 5px;
  width: 350px;
  height: 180px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 20px;
  }
`

export const PopupText = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-family: 'Poppins';
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`
export const HorizontalButtons = styled.div`
  display: flex;
  align-items: center;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 2px solid #909090;
  color: #909090;
  font-size: 18px;
  font-family: 'Poppins';
  height: 40px;
  width: 90px;
  margin-right: 20px;
  cursor: pointer

  &:hover {
    background-color: #2161d0;
    border-color: #2161d0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    width: 70px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-family: 'Poppins';
  height: 40px;
  width: 90px;
  cursor: pointer

  &:hover {
    background-color: #2161d0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    width: 70px;
  }
`
