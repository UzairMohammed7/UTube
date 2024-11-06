import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedVideos: [],
  addToSavedVideo: () => {},
  removeFromSavedVideos: () => {},
})

export default ThemeContext