// import {Component} from 'react'

// import {IoMdHome} from 'react-icons/io'
// import {FaFire} from 'react-icons/fa'
// import {SiYoutubegaming} from 'react-icons/si'
// import {MdPlaylistAdd} from 'react-icons/md'

// import {
//   SidebarContainer,
//   LinkContainer,
//   NavLink,
//   TabList,
//   TabText,
//   ContactUsContainer,
//   ContactUsHeading,
//   SocialMediaLinks,
//   SocialMediaImages,
// } from './StyledComponents'

// import ThemeContext from '../../context/ThemeContext'

// class Sidebar extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {value => {
//           const {isDarkTheme, changeTab} = value
//           const { location } = this.props;

//           const bgColor = isDarkTheme ? '#181818' : '#ffffff'
//           const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
//           const activeTagBg = isDarkTheme ? '#475569' : '#cbd5e1'

//           const onClickHome = () => {
//             changeTab('HOME')
//           }

//           const onClickTrending = () => {
//             changeTab('TRENDING')
//           }

//           const onClickGaming = () => {
//             changeTab('GAMING')
//           }

//           const onClickSavedVideo = () => {
//             changeTab('SAVED VIDEOS')
//           }

//           // Determine active tab based on the path
//           const currentPath = location.pathname;
//           const getActiveTab = () => {
//             switch (currentPath) {
//               case '/':
//                 return 'HOME';
//               case '/trending':
//                 return 'TRENDING';
//               case '/gaming':
//                 return 'GAMING';
//               case '/saved-videos':
//                 return 'SAVED VIDEOS';
//               default:
//                 return '';
//             }
//           };

//           const activeTab = getActiveTab();


//           return (
//             <SidebarContainer backgroundColor={bgColor}>
//               <LinkContainer>
//                 <TabList
//                   onClick={onClickHome}
//                   bgColor={activeTab === 'HOME' ? activeTagBg : 'none'}
//                 >
//                   <NavLink to="/">
//                     <IoMdHome
//                       size={28}
//                       color={activeTab === 'HOME' ? '#ff0b37' : '#909090'}
//                     />
//                     <TabText color={textColor}>Home</TabText>
//                   </NavLink>
//                 </TabList>

//                 <TabList
//                   onClick={onClickTrending}
//                   bgColor={activeTab === 'TRENDING' ? activeTagBg : 'none'}
//                 >
//                   <NavLink to="/trending">
//                     <FaFire
//                       size={28}
//                       color={activeTab === 'TRENDING' ? '#ff0b37' : '#909090'}
//                     />
//                     <TabText color={textColor}>Trending</TabText>
//                   </NavLink>
//                 </TabList>

//                 <TabList
//                   onClick={onClickGaming}
//                   bgColor={activeTab === 'GAMING' ? activeTagBg : 'none'}
//                 >
//                   <NavLink to="/gaming">
//                     <SiYoutubegaming
//                       size={28}
//                       color={activeTab === 'GAMING' ? '#ff0b37' : '#909090'}
//                     />
//                     <TabText color={textColor}>Gaming</TabText>
//                   </NavLink>
//                 </TabList>

//                 <TabList
//                   onClick={onClickSavedVideo}
//                   bgColor={activeTab === 'SAVED VIDEOS' ? activeTagBg : 'none'}
//                 >
//                   <NavLink to="/saved-videos">
//                     <MdPlaylistAdd
//                       size={28}
//                       color={
//                         activeTab === 'SAVED VIDEOS' ? '#ff0b37' : '#909090'
//                       }
//                     />
//                     <TabText color={textColor}>Saved Videos</TabText>
//                   </NavLink>
//                 </TabList>
//               </LinkContainer>
//               <ContactUsContainer>
//                 <ContactUsHeading color={textColor}>
//                   CONTACT US
//                 </ContactUsHeading>
//                 <SocialMediaLinks>
//                   <SocialMediaImages
//                     src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
//                     alt="facebook logo"
//                   />
//                   <SocialMediaImages
//                     src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
//                     alt="twitter logo"
//                   />
//                   <SocialMediaImages
//                     src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
//                     alt="linked in logo"
//                   />
//                 </SocialMediaLinks>
//               </ContactUsContainer>
//             </SidebarContainer>
//           )
//         }}
//       </ThemeContext.Consumer>
//     )
//   }
// }

// export default Sidebar


import React, { useContext } from 'react';
import { IoMdHome } from 'react-icons/io';
import { FaFire } from 'react-icons/fa';
import { SiYoutubegaming } from 'react-icons/si';
import { MdPlaylistAdd } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import {
  SidebarContainer,
  LinkContainer,
  TabList,
  NavLink,
  TabText,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaLinks,
  SocialMediaImages,
} from './StyledComponents';

const Sidebar = () => {
  const { isDarkTheme, changeTab } = useContext(ThemeContext);
  const location = useLocation();

  const bgColor = isDarkTheme ? '#181818' : '#ffffff';
  const textColor = isDarkTheme ? '#f9f9f9' : '#231f20';
  const activeTagBg = isDarkTheme ? '#475569' : '#cbd5e1';

  const activeTab = location.pathname;

  return (
    <SidebarContainer backgroundColor={bgColor}>
      <LinkContainer>
        <TabList
          onClick={() => changeTab('HOME')}
          bgColor={activeTab === '/' ? activeTagBg : 'none'}
        >
          <NavLink to="/">
            <IoMdHome size={28} color={activeTab === '/' ? '#ff0b37' : '#909090'} />
            <TabText color={textColor}>Home</TabText>
          </NavLink>
        </TabList>

        <TabList
          onClick={() => changeTab('TRENDING')}
          bgColor={activeTab === '/trending' ? activeTagBg : 'none'}
        >
          <NavLink to="/trending">
            <FaFire size={28} color={activeTab === '/trending' ? '#ff0b37' : '#909090'} />
            <TabText color={textColor}>Trending</TabText>
          </NavLink>
        </TabList>

        <TabList
          onClick={() => changeTab('GAMING')}
          bgColor={activeTab === '/gaming' ? activeTagBg : 'none'}
        >
          <NavLink to="/gaming">
            <SiYoutubegaming
              size={28}
              color={activeTab === '/gaming' ? '#ff0b37' : '#909090'}
            />
            <TabText color={textColor}>Gaming</TabText>
          </NavLink>
        </TabList>

        <TabList
          onClick={() => changeTab('SAVED VIDEOS')}
          bgColor={activeTab === '/saved-videos' ? activeTagBg : 'none'}
        >
          <NavLink to="/saved-videos">
            <MdPlaylistAdd
              size={28}
              color={activeTab === '/saved-videos' ? '#ff0b37' : '#909090'}
            />
            <TabText color={textColor}>Saved Videos</TabText>
          </NavLink>
        </TabList>
      </LinkContainer>

      <ContactUsContainer>
        <ContactUsHeading color={textColor}>CONTACT US</ContactUsHeading>
        <SocialMediaLinks>
          <SocialMediaImages
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialMediaImages
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialMediaImages
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialMediaLinks>
      </ContactUsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
