import {Component} from 'react'
import Cookies from 'js-cookie'
import {Circles} from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import TrendingVideoItems from '../TrendingVideoItems'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  ProductLoaderContainer,
  SearchVideosContainer,
  MainPageContainer,
  HomeStickyContainer,
  TrendingVideoContainer,
  TrendingVideosList,
  TrendingHeadContainer,
  TrendingLogo,
  TrendingHeading,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        trendingVideos: updatedData,
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
    const {trendingVideos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
          const headingBgColor = isDarkTheme ? '#231f20' : '#f4f4f4'
          return (
            <SearchVideosContainer data-testid="trending" bgColor={bgColor}>
              <TrendingHeadContainer bgColor={bgColor}>
                <TrendingLogo bgColor={headingBgColor}>
                  <AiFillFire size={34} color="red" />
                  <TrendingHeading color={textColor}>Trending</TrendingHeading>
                </TrendingLogo>
              </TrendingHeadContainer>
              <TrendingVideosList>
                {trendingVideos.map(eachVideo => (
                  <TrendingVideoItems
                    key={eachVideo.id}
                    trendingVideoDetails={eachVideo}
                  />
                ))}
              </TrendingVideosList>
            </SearchVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
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
            <div data-testid="trending">
              <Header />
              <MainPageContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <Sidebar />
                </HomeStickyContainer>
                <TrendingVideoContainer>
                  {this.renderAllViews()}
                </TrendingVideoContainer>
              </MainPageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
