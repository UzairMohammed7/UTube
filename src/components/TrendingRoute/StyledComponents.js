import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const SearchVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
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

export const TrendingVideoContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
`

export const TrendingVideosList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
export const TrendingHeadContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 40px;
`
export const TrendingLogo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
`
export const TrendingHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-weight: bold;
  padding-left: 35px;
  width: 100%;
`
export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
