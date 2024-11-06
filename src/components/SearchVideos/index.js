import {Component} from 'react'
import Cookies from 'js-cookie'
import {Circles} from 'react-loader-spinner'

import {AiOutlineSearch} from 'react-icons/ai'

import FailureView from '../FailureView'
import VideoItemOne from '../VideoItemOne'

import {
  ProductLoaderContainer,
  SearchVideosContainer,
  SearchButton,
  SearchInputAndButton,
  VideosContainer,
  Image,
  Heading,
  Desc,
  RetryButton,
  SearchInput,
  NoVideosFound,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchVideos: [],
    searchInput: '',
    searchValue: '',
  }

  componentDidMount() {
    this.getSuggestionVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getSuggestionVideos)
  }

  onPressEnter = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.getSuggestionVideos)
    }
  }

  getSuggestionVideos = async () => {
    const {searchValue} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        searchVideos: updatedData,
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

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {searchInput, searchVideos} = this.state

        const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const isVideosAvailable = searchVideos.length === 0

        return isVideosAvailable ? (
          <NoVideosFound bgColor={bgColor}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading color={textColor}>No Search results found</Heading>
            <Desc color={textColor}>
              Try different key words or remove search filter
            </Desc>
            <RetryButton type="button" onClick={this.getSuggestionVideos}>
              Retry
            </RetryButton>
          </NoVideosFound>
        ) : (
          <SearchVideosContainer bgColor={bgColor}>
            <SearchInputAndButton>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                onKeyDown={this.onPressEnter}
              />
              <SearchButton
                type="button"
                data-testid="searchButton"
                onClick={this.onClickSearchButton}
              >
                <AiOutlineSearch size={18} />
              </SearchButton>
            </SearchInputAndButton>
            <VideosContainer>
              {searchVideos.map(eachVideo => (
                <VideoItemOne key={eachVideo.id} videosDetails={eachVideo} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onRetry = () => {
    this.getSuggestionVideos()
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
    return <>{this.renderAllViews()}</>
  }
}

export default SearchVideos
