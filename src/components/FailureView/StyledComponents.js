import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const FailureImage = styled.img`
  height: 250px;
`
export const FailureHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 22px;
`
export const FailureDesc = styled.p`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 16px;
  margin-top: 0;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Poppins';
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px;
  width: 90px;
`
