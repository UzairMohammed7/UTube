import {formatDistanceToNowStrict} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  NavLink,
  SearchVideoList,
  BottomContainer,
  Image,
  ChannelLogo,
  TitleAndDescContainer,
  Title,
  Name,
  ViewsCountAndDateContainer,
  ViewCount,
  PublishedDate,
} from './StyledComponents'

const VideoItemOne = props => {
  const {videosDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    name,
    profileImageUrl,
    publishedAt,
  } = videosDetails

  const publishedAtDate = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`videos/${id}`}>
            <SearchVideoList>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <BottomContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <TitleAndDescContainer>
                  <Title color={textColor}>{title}</Title>
                  <Name color={textColor}>{name}</Name>
                  <ViewsCountAndDateContainer>
                    <ViewCount color={textColor}>{viewCount} views </ViewCount>
                    <PublishedDate color={textColor}>
                      . {publishedAtDate}
                    </PublishedDate>
                  </ViewsCountAndDateContainer>
                </TitleAndDescContainer>
              </BottomContainer>
            </SearchVideoList>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItemOne
