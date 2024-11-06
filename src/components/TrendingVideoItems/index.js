import {formatDistanceToNowStrict} from 'date-fns'

import {
  NavLink,
  TrendingVideoList,
  Image,
  TitleAndDescContainer,
  Title,
  Name,
  ViewsCountAndDateContainer,
  ViewCount,
  PublishedDate,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const TrendingVideoItems = props => {
  const {trendingVideoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    name,
    publishedAt,
  } = trendingVideoDetails

  const publishedAtDate = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`/videos/${id}`}>
            <TrendingVideoList>
              <Image src={thumbnailUrl} alt="video thumbnail" />
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
            </TrendingVideoList>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItems
