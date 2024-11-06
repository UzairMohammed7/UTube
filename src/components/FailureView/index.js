import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading color={textColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDesc color={textColor}>
              We are having some trouble to complete your request.
            </FailureDesc>
            <FailureDesc color={textColor}>Please try again.</FailureDesc>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
