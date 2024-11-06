import {
  GameListItems,
  NavLink,
  Image,
  Title,
  ViewsCount,
} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'

const GamingVideoItems = props => {
  const {gameVideoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gameVideoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`/videos/${id}`}>
            <GameListItems>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <Title color={textColor}>{title}</Title>
              <ViewsCount color={textColor}>
                {viewCount} Watching Worldwide
              </ViewsCount>
            </GameListItems>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingVideoItems
