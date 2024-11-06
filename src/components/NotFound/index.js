import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  MainPageContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <MainPageContainer>
            <Sidebar />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading color={textColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDesc color={textColor}>
                We are Sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundContainer>
          </MainPageContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
