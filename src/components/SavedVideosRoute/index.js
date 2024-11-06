import {Component} from 'react'
import {Circles} from 'react-loader-spinner'
import {MdPlaylistAdd} from 'react-icons/md'


import AllSavedVideoItems from '../AllSavedVideoItems'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  MainPageContainer,
  NotSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedDesc,
  SearchVideosContainer,
  SavedHeadContainer,
  FireLogo,
  SavedHeading,
  VideosContainer,
  ProductLoaderContainer,
  HomeStickyContainer,
  HomeSideContainer,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

class SavedVideosRoute extends Component {
  renderSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        const headingBgColor = isDarkTheme ? '#231f20' : '#f4f4f4'

        const isSavedVideoAvailable = savedVideos.length === 0

        return isSavedVideoAvailable ? (
          <NotSavedContainer bgColor={bgColor}>
            <NoSavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedHeading color={textColor}>
              No saved videos found
            </NoSavedHeading>
            <NoSavedDesc color={textColor}>
              You can save your videos while watching them
            </NoSavedDesc>
          </NotSavedContainer>
        ) : (
          <SearchVideosContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedHeadContainer bgColor={bgColor}>
              <FireLogo bgColor={headingBgColor}>
                <MdPlaylistAdd size={34} color="red" />
                <SavedHeading color={textColor}>Saved Videos</SavedHeading>
              </FireLogo>
            </SavedHeadContainer>
            <VideosContainer bgColor={bgColor}>
              {savedVideos.map(eachVideo => (
                <AllSavedVideoItems
                  key={eachVideo.id}
                  eachVideoDetails={eachVideo}
                />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <ProductLoaderContainer className="loader-container" data-testid="loader">
      <Circles type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductLoaderContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="savedVideos">
              <Header />
              <MainPageContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <Sidebar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderSavedVideos()}
                </HomeSideContainer>
              </MainPageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideosRoute
