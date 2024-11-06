import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f9f9f9;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
export const LoginForm = styled.form`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  width: 30%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UsernameAndPasswordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const NxtLogo = styled.img`
  height: 40px;
  width: 170px;
`

export const LabelText = styled.label`
  color: #47556999;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Poppins';
  margin-top: 20px;
  margin-bottom: 5px;
`

export const InputContainer = styled.input`
  border: 1px solid #94a3b8;
  color: #94a3b8;
  font-size: 14px;
  font-family: 'Poppins';
  width: 97%;
  padding: 10px 0 10px 10px;
  outline: none;
  border-radius: 5px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`
export const CheckboxInput = styled.input`
  margin-right: 4px;
  line-height: normal;
  width: 18px;
  height: 18px;
`
export const CheckboxLabel = styled.label`
  color: #1e293b;
  font-size: 14px;
  font-weight: bold;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Poppins';
  width: 100%;
  height: 35px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #367ae8;
  }
`
export const ShowErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: 'Poppins';
  margin-top: 0px;
`
