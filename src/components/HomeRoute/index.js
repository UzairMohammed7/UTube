import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SearchVideos from '../SearchVideos'

import {
  MainPageContainer,
  HomeSideContainer,
  BannerImageContainer,
  ModalContainer,
  BannerImage,
  GetItNowButton,
  CloseButton,
  HomeStickyContainer
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

class Home extends Component {
  state = {
    display: 'flex',
  }

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderHomeVideos)
  }

  renderHomeVideos = () => {
    const {display} = this.state
    return (
      <>
        <BannerImageContainer data-testid="banner" display={display}>
          <ModalContainer>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <p>Buy Nxt Watch Premium prepaid plans With UPI</p>
            <GetItNowButton>Get It Now</GetItNowButton>
          </ModalContainer>
          <div>
            <CloseButton
              type="button"
              data-testi="close"
              onClick={this.onCloseBanner}
            >
              <IoMdClose size={30} color="#231f20" />
            </CloseButton>
          </div>
        </BannerImageContainer>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <div data-testid="home">
              <Header />
              <MainPageContainer>
                <HomeStickyContainer>
                  <Sidebar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderHomeVideos()}
                </HomeSideContainer>
              </MainPageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
