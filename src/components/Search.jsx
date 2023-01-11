import styled from 'styled-components';
import * as variable from './variables';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById('search');
    console.log(input.value);

    if(input.value){
      navigate(`/search/${input.value}`);      
    }


  }

  return (
    <SearchBar>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" id="search" />
      </form>
        
    </SearchBar>
  )
}
 
const SearchBar = styled.div`
    width: 100%;
    input{
      margin-top: 35px;
      position: relative;
      left: 50%;
      transform: translate(-50%,0);
      width: 500px;
      font-size: ${variable.font_standard};
      text-align: center;
      border-radius: ${variable.small_radius};
      padding: 3px 0;
      border: 2px solid ${(props) => props.theme.main.secondary};
      background-color: ${(props) => props.theme.main.secondary};
      color: ${(props) => props.theme.main.primary}
      
    }
    @media (max-width: ${variable.smallScreen}) {
      input{
        width: 100%;
      }
    }
`;


export default Search;