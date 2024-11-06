import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameListItems = styled.li`
  list-style-type: none;
  cursor: pointer;
  width: 200px;
  margin-right: 35px;
  border-bottom: 1px solid #000000;

  @media (max-width: 768px) {
    width: 180px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #13293b;
  margin-bottom: 10px;
`

export const Image = styled.img`
  height: 250px;
  width: 100%;

  @media (max-width: 768px) {
    height: 140px;
    width: 130px;
    }
    
    @media (max-width: 576px) {
      height: 140px;
      width: 130px;
  }
`
export const Title = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 20px;
  margin-top: 0px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`
export const ViewsCount = styled.p`
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${props => props.color};
  font-family: 'Poppins';

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 576px) {
    font-size: 10px;
  }
`
