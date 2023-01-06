import * as variable from './variables';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Categories() {
  return (
    <CategoryContainer>
      <StyledLink to={"products/Meats"}>Meat</StyledLink>
      <StyledLink to={"products/Veggies"}>Veggies</StyledLink>
      <StyledLink to={"products/Fruits"}>Fruits</StyledLink>
      <StyledLink to={"products/Seafoods"}>Seafood</StyledLink>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div`
  position: relative;
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  left: 50%;
  transform: translate(-50%, 0);
  position: relative;
  margin-top: 2px;

  @media (max-width: ${variable.smallScreen}) {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: ${variable.font_standard};
  cursor: pointer;
  position: relative;
  padding: 4px 0;
  text-decoration: none;
  color: ${(props) => props.theme.main.secondary};
  &:before{
    content: '';
    position: absolute;
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: ${(props) => props.theme.main.secondary};
    transition: width 0.3s ease;
    width: 0;
    left: 0;
  }
  &:hover:after{
    width: 100%;
  }
  &.active:after{
    width: 100%;
  }
`;
export default Categories;