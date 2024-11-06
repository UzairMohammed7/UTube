import {Component} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import Home from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'HOME',
    savedVideos: [],
  }

  componentDidMount() {
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
    this.setState({ savedVideos });
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addToSavedVideo = videoDetails => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (!videoObject) {
      const updatedVideos = [...savedVideos, videoDetails];
      this.setState({ savedVideos: updatedVideos });
      localStorage.setItem('savedVideos', JSON.stringify(updatedVideos));
    }
  }


  removeFromSavedVideos = id => {
    const {savedVideos} = this.state
    const updateSaveVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updateSaveVideos})
    localStorage.setItem('savedVideos', JSON.stringify(updateSaveVideos));
  }


  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeTab: this.changeTab,
          savedVideos,
          addToSavedVideo: this.addToSavedVideo,
          removeFromSavedVideos: this.removeFromSavedVideos,
        }}
      >
        <Routes>
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/" element={ <ProtectedRoute> <Home /> </ProtectedRoute> }/>
          <Route path="/trending" element={ <ProtectedRoute> <TrendingRoute/> </ProtectedRoute> } />
          <Route path="/gaming" element={ <ProtectedRoute> <GamingRoute/> </ProtectedRoute> } />
          <Route path="/saved-videos" element={ <ProtectedRoute> <SavedVideosRoute/> </ProtectedRoute> } />
          <Route path="/videos/:id" element={ <ProtectedRoute> <VideoItemDetails/> </ProtectedRoute>}/>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </ThemeContext.Provider>
    )
  }
}

export default App