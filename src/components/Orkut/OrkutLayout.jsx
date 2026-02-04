import styled from 'styled-components';

// Authentic Orkut Colors from CristianoV/project-network
const colors = {
  primary: '#D4DDEE', // Background
  secondary: '#E8EEFA', // Box Header/Hover
  tertiary: '#ed2590', // Pink
  quaternary: '#BCCDE9', // Borders
  quinary: '#A5B5E6',
  senary: '#5696CD', // Header
  septenary: '#5778A1', // Darker Blue
};

export const OrkutContainer = styled.div`
  background-color: ${colors.primary};
  font-family: Arial, sans-serif, Verdana;
  font-size: 12px;
  color: #333;
  width: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  /* Reset retro scrollbars to system default/modern look */
  &::-webkit-scrollbar,
  & *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb,
  & *::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 10px;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  &::-webkit-scrollbar-track,
  & *::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;



export const MainContainer = styled.div`
  width: 1000px;
  margin: 15px auto;
  display: flex;
  gap: 15px;
  
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    padding: 10px;
    margin: 5px auto;
  }
`;

export const LeftColumn = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: sticky;
  top: 15px;
  align-self: flex-start;
  
  @media (max-width: 1000px) {
    width: 100%;
    position: static;
  }
`;

export const ContentColumn = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RightColumn = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: sticky;
  top: 15px;
  align-self: flex-start;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const WhiteBox = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid ${colors.quaternary};
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  overflow: hidden;
  margin-bottom: 0px;
`;

export const BoxTitle = styled.div`
  background-color: ${colors.secondary};
  padding: 8px 12px;
  font-weight: bold;
  color: ${colors.septenary};
  font-size: 13px;
  border-bottom: 1px solid ${colors.quaternary};
`;

export const UserName = styled.h1`
  font-size: 18px;
  color: ${colors.septenary};
  margin: 10px 12px;
  font-weight: bold;
`;

export const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #06c;
  padding: 6px 12px;
  display: block;
  font-size: 11px;
  
  &:hover {
    background-color: ${colors.secondary};
    text-decoration: underline;
  }

  ${props => props.active && `
    background-color: ${colors.secondary};
    font-weight: bold;
    border-left: 3px solid ${colors.senary};
    padding-left: 9px;
  `}
`;

export const OrkutButton = styled.button`
  background-color: ${colors.senary};
  border: 1px solid ${colors.septenary};
  color: #fff;
  padding: 6px 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background-color: ${colors.septenary};
  }
`;

// Mobile Navigation Components
export const MobileTopBar = styled.div`
  display: none;
  background: #fff;
  border-bottom: 1px solid ${colors.quaternary};
  padding: 10px 15px;
  cursor: pointer;
  user-select: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const MobileProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${colors.quaternary};
  object-fit: cover;
`;

export const MobileUserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MobileUserName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.septenary};
`;

export const MobileActiveTab = styled.span`
  font-size: 11px;
  color: #666;
`;

export const MobileChevron = styled.span`
  font-size: 12px;
  color: ${colors.septenary};
  transition: transform 0.3s ease;
  transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const MobileMenu = styled.div`
  background: #fff;
  border-bottom: 1px solid #BCCDE9;
  display: ${props => props.$expanded ? 'block' : 'none'};
  
  @media (min-width: 769px) {
    display: none !important;
  }
`;

export const MobileNavItem = styled.div`
  padding: 14px 20px;
  font-size: 13px;
  color: #06c;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.secondary};
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  ${props => props.$active && `
    background-color: ${colors.secondary};
    font-weight: bold;
    border-left: 3px solid ${colors.senary};
    padding-left: 17px;
  `}
`;
