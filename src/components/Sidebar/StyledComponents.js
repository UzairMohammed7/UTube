import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  background-size: cover;
  width: 200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 50px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  /* Responsive Design */
  @media (max-width: 768px) {
    width: 180px;
  }

  @media (max-width: 576px) {
    width: 60px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 0;
`;

export const TabList = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 50px;
`;
export const NavLink = styled(Link)`
  color: ${(props) => props.color};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  padding-left: 15px;
`;
export const TabText = styled.p`
  color: ${(props) => props.color};
  font-size: 16px;
  font-family: "Poppins";
  margin-left: 12px;
  width: auto;

  @media (max-width: 576px) {
    display: none;
  }
`;
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const ContactUsHeading = styled.h1`
  color: ${(props) => props.color};
  font-size: 18px;
  font-family: "Poppins";
  width: 100%;
  padding-left: 10px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
  }
`;
export const SocialMediaImages = styled.img`
  height: 28px;
  width: 30px;
  margin-right: 10px;
  cursor: pointer;

  /* Hover effect */
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 576px) {
    height: 24px;
    width: 25px;
    margin-top: 5px;
  }
`;
