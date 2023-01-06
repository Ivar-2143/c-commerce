
import styled from "styled-components";
import * as variable from '../components/variables';

function Product(product) {
    console.log(product);
  return (
    <>
        <ImageContainer>
        <img src={require(`../assets/product-images/${product.image}`)} alt="" />
        <GlassMask />
        </ImageContainer>
        <ProductDetails>
            <NamePriceWrap>
                <Name>
                    {product.name}
                </Name>
                <Price>
                    ₱ {product.price}{product.unit}
                </Price>
            </NamePriceWrap>
        </ProductDetails>
        <FormContainer>
            <textarea type="text" placeholder='Order NOtes...' wrap='hard' rows='1' />
        </FormContainer>
        <AddToCartBtn> Add to Cart </AddToCartBtn>
            
    </>
  )
}


const Name = styled.span`
    margin-top: 20px;
    font-size: ${variable.font.size_l};
    display: block;
`;

const Price = styled.span`
    display: block;
    font-size: ${variable.font.size_m};
    margin-left: 10px;
    font-weight: 500;
`;
const NamePriceWrap = styled.div`
    position: relative;
    width: 80%;
    left: 50%; 
    transform: translate(-50%,0);

    border-bottom: 2px solid ${(props) => props.theme.main.secondary};
`;

const GlassMask = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    left: 50%;
    margin: 0;
    padding: 0;
    top: 50%;
    transform: translate(-50%,-50%);
`;

const ImageContainer = styled.div`
    position: relative;
    border-bottom: 2px solid ${(props)=> props.theme.main.secondary};
    z-index: 3;
    width: 100%;
    height: 50%;
    overflow: hidden;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    @media ${variable.device.mobileL}{
        width: 100%;
        height: 48%;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        
    }
`;

const FormContainer = styled.div`
    height: calc(100% - (68% + 40px));
    position: relative;
    width: 100%;
    textarea{
        position: relative;
        bottom: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        resize:none;
        width: 70%;
        height: 1.5rem;
        font-size: ${variable.font_standard};
        border: none;
        top: 90%;
        border-bottom: 2px solid ${(props) => props.theme.main.secondary};
    }
`;

const ProductDetails = styled.div`
    height: 18%;
    width: 100%;
    position: relative;
`;

const AddToCartBtn = styled.button`
    margin: 4%   0;
    height: 40px;
    width: 80%;
    cursor: pointer;
    border-radius: ${variable.radius.smooth_edge};
    border: 2px solid ${(props) => props.theme.main.secondary};
    background-color: ${(props) => props.theme.main.tintedBlue};
`;


export default Product;