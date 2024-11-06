import {Component} from 'react'
import Cookies from 'js-cookie'
import {Circles} from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'

import {RiPlayListAddLine} from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  ProductLoaderContainer,
  SearchVideosContainer,
  MainPageContainer,
  HomeStickyContainer,
  VideosContainer,
  TopContainer,
  Title,
  ViewsCountAndLikesContainer,
  TitleAndDescContainer,
  SubCount,
  ViewsCountAndDateContainer,
  LikeDislikeSaveContainer,
  LikeContainer,
  DislikeContainer,
  Text,
  SaveText,
  SaveContainer,
  ViewCount,
  BottomContainer,
  Name,
  PublishedDate,
  ChannelLogo,
  Desc,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isVideoSaved: false,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const { id } = this.props.params
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      };

      const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
      const isVideoSaved = savedVideos.some(video => video.id === updatedData.id);

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
        isVideoSaved,
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
        const {isDarkTheme, removeFromSavedVideos, addToSavedVideo} = value
        const bgColor = isDarkTheme ? '#000000' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const {videoDetails,  isVideoSaved, isLiked, isDisliked} = this.state
        const {
          id,
          title,
          videoUrl,
          name,
          profileImageUrl,
          subscriberCount,
          viewCount,
          publishedAt,
          description,
        } = videoDetails

        const publishedAtDate = formatDistanceToNowStrict(new Date(publishedAt))
        

        const addOrRemoveItem = () => {
          if (isVideoSaved) {
            removeFromSavedVideos(id);
          } else {
            addToSavedVideo(videoDetails);
          }
          this.setState(prevState => ({ isVideoSaved: !prevState.isVideoSaved }));
        };

        const saveVideoToList = () => {
          addOrRemoveItem();
        };

        
        const onClickLikeButton = () => {
          this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))
        }
          
        const onClickDislikeButton = () => {
          this.setState(prev => ({isDisliked: !prev.isDisliked, isLiked: false}))
        }

        return (
          <SearchVideosContainer bgColor={bgColor}>
            <TopContainer>
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="100%"
              />
              <Title color={textColor}>{title}</Title>
              <ViewsCountAndLikesContainer>
                <ViewsCountAndDateContainer>
                  <ViewCount color={textColor}>{viewCount} views </ViewCount>
                  <PublishedDate color={textColor}> . {publishedAtDate}</PublishedDate>
                </ViewsCountAndDateContainer>

                <LikeDislikeSaveContainer>
                  <LikeContainer
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLikeButton}
                  >
                    {isLiked ? <AiFillLike size={18} /> : <AiOutlineLike size={18} />}
                  <Text color={isLiked ? '#2563eb' : '#64748b'}>Like</Text>
                  </LikeContainer>
                  <DislikeContainer
                    type="button"
                    color={isDisliked ? '#2563eb' : '#64748b'}
                    onClick={onClickDislikeButton}
                  >
                    {isDisliked ? <AiFillDislike size={18} /> : <AiOutlineDislike size={18} />}
                    <Text color={isDisliked ? '#2563eb' : '#64748b'}>Dislike</Text>
                  </DislikeContainer>
                  <SaveContainer
                    type="button"
                    onClick={saveVideoToList}  
                  >
                    <RiPlayListAddLine color={isVideoSaved ? '#2563eb' : '#64748b'} size={18} />
                    <SaveText color={isVideoSaved ? '#2563eb' : '#64748b'}>
                      {isVideoSaved ? 'Saved' : 'Save'}
                    </SaveText>
                  </SaveContainer>
                </LikeDislikeSaveContainer>
              </ViewsCountAndLikesContainer>
            </TopContainer>
            <hr />
            <BottomContainer className="bottom">
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <TitleAndDescContainer>
                <Name color={textColor}>{name}</Name>
                <SubCount color={textColor}>{subscriberCount} subscribers</SubCount>
                <Desc color={textColor}>{description}</Desc>
              </TitleAndDescContainer>
            </BottomContainer>
          </SearchVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onRetry = () => {
    this.getVideoItemDetails()
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
            <div data-testid="videoItemDetails">
              <Header />
              <MainPageContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <Sidebar />
                </HomeStickyContainer>
                <VideosContainer bgColor={bgColor}>
                  {this.renderAllViews()}
                </VideosContainer>
              </MainPageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

const VideoItemDetailsWithParams = props => {
  const params = useParams()
  return <VideoItemDetails {...props} params={params} />
}

export default VideoItemDetailsWithParams