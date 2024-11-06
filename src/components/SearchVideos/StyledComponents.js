import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

export const ProductLoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const SearchInput = styled.input`
  width: 255px;
  border: 1px solid #64748b;
  border-radius: 2px;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 40px;
  outline: none;
  height: 30px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 576px) {
    width: 200px;
  }
`
export const SearchButton = styled.button`
  width: 50px;
  height: 30px;
  margin-left: 5px;

  @media (max-width: 768px) {
    width: 40px;
    margin-left: 3px;
  }

  @media (max-width: 576px) {
    width: 35px;
    margin-left: 2px;
  }
`
export const SearchInputAndButton = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    align-items: flex-start;
  }
`

export const NoVideosFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RetryButton = styled.button`
  cursor: pointer;
  background-color: ${props => props.bgColor};
  border: none;
  color: ${props => props.color};
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  width: 250px;
`
export const Image = styled.img`
  height: 250px;
  width: 250px;
  
  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
    
  @media (max-width: 576px) {
    height: 150px;
    width: 150px;
  }
`

export const VideosContainer = styled.ul`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

export const Heading = styled.h1`
  color: ${props => props.color};
  font-family: Poppins;
  `
  export const Desc = styled.p`
  font-family: Poppins;
  color: ${props => props.color};
`