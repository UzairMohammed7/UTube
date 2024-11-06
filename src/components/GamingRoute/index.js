import {Component} from 'react'
import Cookies from 'js-cookie'
import {Circles} from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import GamingVideoItems from '../GamingVideoItems'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  ProductLoaderContainer,
  MainPageContainer,
  SearchVideosContainer,
  HomeStickyContainer,
  HomeSideContainer,
  GamingVideosList,
  GamingHeadContainer,
  GamingLogo,
  GamingHeading,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <ProductLoaderContainer className="loader-container" data-testid="loader">
      <Circles type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductLoaderContainer>
  )

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
          const headingBgColor = isDarkTheme ? '#231f20' : '#f4f4f4'

          return (
            <SearchVideosContainer data-testid="gaming" bgColor={bgColor}>

              <GamingHeadContainer bgColor={bgColor}>
                <GamingLogo bgColor={headingBgColor}>
                  <SiYoutubegaming size={34} color="red"/>
                  <GamingHeading color={textColor}>Gaming</GamingHeading>
                </GamingLogo>
              </GamingHeadContainer>
              <GamingVideosList bgColor={bgColor}>
                {gamingVideos.map(eachVideo => (
                  <GamingVideoItems
                    key={eachVideo.id}
                    gameVideoDetails={eachVideo}
                  />
                ))}
              </GamingVideosList>
            </SearchVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="home">
              <Header />
              <MainPageContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <Sidebar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderAllViews()}
                </HomeSideContainer>
              </MainPageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingRoute
