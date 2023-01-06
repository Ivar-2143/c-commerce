import * as variable from './variables';
import styled from 'styled-components';
import iconAdd from '../assets/icons/icon-plus.png';
import { Link, Outlet, useLocation } from 'react-router-dom';

function ProductCard({name,image,price,unit,id}) {
  const location = useLocation();
  

  return (
    <>
      <Container to={`/product/${id}`} state={{background: location}}>
        <ImgContainer>
          <img src={require(`../assets/product-images/${image}`)} alt={name} />
        </ImgContainer>
        <Line />
        <DetailContainer>
          <Name>
            {name}
          </Name>
          <Price>
            ₱{price}{unit}
          </Price>
        </DetailContainer>
        <Button>
          <img src={iconAdd} alt="../assets/icons/icon-plus.png" />
        </Button>
      </Container>
    </>
  )
}

const Button = styled.div`
    position: absolute;
    width: 35px;
    height: 35px;
    bottom: 5%;
    right: 5%;
    border-radius: ${variable.big_radius};
    border: 2px solid ${(props) => props.theme.main.secondary};
    background-color: ${(props)=> props.theme.main.accentBlue};

    img{
        position: relative;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        width: 25px;
        pointer-events: none;
        user-select: none;
        -webkit-user-drag: none;
    }
`;

const Line = styled.div`
    width: 90%;
    height: 2px;
    position: relative;
    left:50%;
    transform: translate(-50%,0);
    border-radius: ${variable.small_radius};
    background-color: ${(props)=> props.theme.main.secondary};
    margin-top: 1px;
`;

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 10px;
    height: 23%;

`;

const Name = styled.span`
  font-size: ${variable.font_medium};
`;
const Price = styled.span`
  font-size: ${variable.font_standard};
  font-weight: 600;
`

const Container = styled(Link)`
    position: relative;
    width: 220px;
    height: 300px;
    border-radius: ${variable.small_radius};
    background-color: ${(props)=> props.theme.main.primary};
    overflow: hidden;
    border: 2px solid #000;
    cursor: pointer;
    text-decoration: none;
    color: ${(props)=> props.theme.main.secondary};
    &:hover{  
      background-color: ${(props)=> props.theme.main.tintedSecondary};
      transition: 0.45s ease;
      span{
        color: ${(props) => props.theme.main.primary};
      }
      ${Button}{
        border: 2px solid ${(props) => props.theme.main.primary} ;
      }
      ${Line}{
        background-color: ${(props) => props.theme.main.primary};
      }
      
    }

    @media (max-width: ${variable.screen_md}) {
      width: 150px;
      height: 220px;
      ${Button}{
        width: 25px;
        height: 25px;
      }
      ${Name}{
        font-size: ${variable.font_small}
      }
      ${Price}{
        font-size: ${variable.font_xsm};
      }
    }
    @media (max-width: ${variable.screen_xxsm}) {
      width: 120px;
      height: 180px;
      ${Button}{
        width: 25px;
        height: 25px;
      }
      ${DetailContainer}{
        margin: 5px;
      }
      ${Price}, ${Name}{
        font-size: ${variable.font_xsm};
      }
    }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 65%;
  position: relative;
  img{
    position:relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`



export default ProductCard;