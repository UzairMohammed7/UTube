import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
`
export const GamingHeadContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 40px;
`
export const GamingLogo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
`
export const ProductLoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const MainPageContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${props => props.bgColor};
`

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
export const HomeSideContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  // width: 100%;
`

export const GamingVideosList = styled.ul`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

export const GamingHeading = styled.h1`
  color: ${props => props.color};
  margin-left: 35px;
`
