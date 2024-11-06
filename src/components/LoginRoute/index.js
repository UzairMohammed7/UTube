import {Component} from 'react'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginForm,
  UsernameAndPasswordContainer,
  NxtLogo,
  LabelText,
  InputContainer,
  ShowPasswordContainer,
  CheckboxLabel,
  CheckboxInput,
  LoginButton,
  ShowErrorMsg,
} from './StyledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isPasswordShown: false,
    showSubmitError: false,
    isClicked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  onSubmitSuccess = jwtToken => {
    // const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    // history.replace('/')
    this.setState({isClicked: true})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      isPasswordShown,
      showSubmitError,
      errorMsg,
      isClicked
    } = this.state

    const showPassword = isPasswordShown ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Navigate to="/" />
    }

    return (
      <LoginContainer>
        <LoginForm onSubmit={this.onLogin}>
          <NxtLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <UsernameAndPasswordContainer>
            <LabelText htmlFor="username">USERNAME</LabelText>
            <InputContainer
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <LabelText htmlFor="password">PASSWORD</LabelText>
            <InputContainer
              type={showPassword}
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <ShowPasswordContainer>
              <CheckboxInput
                type="checkbox"
                id="showPassword"
                onChange={this.onShowPassword}
              />
              <CheckboxLabel htmlFor="showPassword">
                Show Password
              </CheckboxLabel>
            </ShowPasswordContainer>
            <LoginButton type="submit"> 
              {isClicked === true ? "Logging..." : "Login"}
              </LoginButton>
            {showSubmitError && <ShowErrorMsg>*{errorMsg}</ShowErrorMsg>}
          </UsernameAndPasswordContainer>
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default LoginRoute
