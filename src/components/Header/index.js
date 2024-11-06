import { Link } from 'react-router-dom';
import { FiSun } from 'react-icons/fi';
import { MdNightlightRound } from 'react-icons/md';
import { CgProfile } from "react-icons/cg";

import Cookies from 'js-cookie';
import Popup from 'reactjs-popup';
import {
  NavHeader,
  WebsiteLogoImage,
  ProfileAndLogoutContainer,
  NavBarListItems,
  LogoutButton,
  PopupDesign,
  PopupText,
  HorizontalButtons,
  CancelButton,
  ConfirmButton,
  ToggleSwitch,
} from './StyledComponents';

import ThemeContext from '../../context/ThemeContext';

const Header = () => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    window.location.replace('/login');
  };

  return (
    <ThemeContext.Consumer>
      {value => {
        const { toggleTheme, isDarkTheme } = value;

        const onClickToggleTheme = () => {
          toggleTheme();
        };

        const webSiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png';

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818';
        const buttonColor = isDarkTheme ? '#f9f9f9' : '#181818';
        const bgColor = isDarkTheme ? '#181818' : '#ffffff';

        return (
          <NavHeader bgColor={bgColor}>
            <Link to="/">
              <WebsiteLogoImage src={webSiteLogo} alt="website logo" />
            </Link>
            <ProfileAndLogoutContainer>
            <NavBarListItems>
                <ToggleSwitch isDarkTheme={isDarkTheme}>
                  <input type="checkbox" onChange={onClickToggleTheme} checked={isDarkTheme} />
                  <span>
                    <FiSun className="icon sun-icon" />
                    <MdNightlightRound className="icon moon-icon" />
                  </span>
                </ToggleSwitch>
              </NavBarListItems>
              <NavBarListItems>
                <CgProfile size={35} color={textColor} />
              </NavBarListItems>
              <NavBarListItems>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" data-tetid="iconButton" color={buttonColor}>
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupDesign bgColor={bgColor}>
                      <PopupText color={textColor}>
                        Are you sure, you want to logout?
                      </PopupText>
                      <HorizontalButtons>
                        <CancelButton type="button" data-tetid="closeButton" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </HorizontalButtons>
                    </PopupDesign>
                  )}
                </Popup>
              </NavBarListItems>
            </ProfileAndLogoutContainer>
          </NavHeader>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
