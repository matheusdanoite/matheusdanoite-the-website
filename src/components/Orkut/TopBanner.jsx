import styled from 'styled-components';
import { OrkutHeader } from './OrkutLayout';

const Nav = styled.nav`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  user-select: none;
  background: #fff;
  padding: 5px 15px;
  font-family: 'Inter', sans-serif;
  
  span:first-child {
    color: #ed2590; /* Orkut Pink */
  }
  
  span:last-child {
    color: #5696CD; /* Orkut Blue */
    font-size: 16px;
    margin-top: 5px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #5778A1; /* septenary */
  padding: 3px 12px;
  border-radius: 12px;
  gap: 8px;
  
  input {
    border: none;
    background: transparent;
    padding: 2px 5px;
    font-size: 12px;
    width: 150px;
    color: #fff;
    outline: none;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const TopNavItems = styled.div`
  display: flex;
  gap: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  
  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const OrkutTopBanner = () => {
  return (
    <OrkutHeader>
      <Nav>
        <Logo>
          <span>orkut</span><span>.com</span>
        </Logo>
        <TopNavItems>
          <span>início</span>
          <span>perfil</span>
          <span>comunidades</span>
          <span>jogos</span>
        </TopNavItems>
        <SearchBar>
          <input type="text" placeholder="pesquisar no orkut" />
        </SearchBar>
      </Nav>
    </OrkutHeader>
  );
};
