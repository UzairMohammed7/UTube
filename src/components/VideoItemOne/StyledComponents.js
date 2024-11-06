import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #13293b;
  margin-bottom: 10px;
`

export const SearchVideoList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 10px;
  width: 260px;

  @media (max-width: 768px) {
    width: 220px;
  }

  @media (max-width: 576px) {
    width: 180px;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  margin-top: 5px;

  @media (max-width: 576px) {
    align-items: flex-start;
  }
`
export const Image = styled.img`
  height: 150px;
  width: 100%;

  @media (max-width: 768px) {
    height: 130px;
  }

  @media (max-width: 576px) {
    height: 100px;
  }
`
export const ChannelLogo = styled.img`
  height: 30px;
  width: 30px;

  @media (max-width: 576px) {
    height: 25px;
    width: 25px;
  }
`
export const TitleAndDescContainer = styled.div`
  margin-left: 10px;
  font-stretch: 2px;

  @media (max-width: 576px) {
    margin-left: 5px;
  }
`
export const Title = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 2px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`
export const Name = styled.p`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 12px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media (max-width: 576px) {
    font-size: 10px;
  }
`
export const ViewsCountAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`
export const ViewCount = styled.p`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 12px;

  @media (max-width: 576px) {
    font-size: 10px;
  }
`
export const PublishedDate = styled.p`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 12px;
  margin-left: 5px;

  @media (max-width: 576px) {
    font-size: 10px;
    margin-left: 2px;
  }
`
