import * as variable from '../components/variables';
import styled from 'styled-components';
import plus from '../assets/icons/icon-plus.png';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Product from './Product';

function ProductPage() {
    const params = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const goBack = () => {
        navigate(-1);
        document.body.style.overflow = 'unset';
    }

    const getProduct = async (id) => {
        fetch(`http://localhost:8000/products/?id=${id}`)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                throw res;
            }) 
            .then(data =>{
                setItem(data[0]);

            })
            .catch(error =>
                {console.log("Error fetching")}
            )
    };

    useEffect(()=>{
        console.log(params.id);
        getProduct(params.id);
    }, [params.id]);
    useEffect(()=>{
        console.log(item);
        if(item){
            console.log("LOADING...");
            setIsLoaded(true);
            document.body.style.overflow = 'hidden';
        }
    },[item]);

  return (
    <Overlay>
        <Container>
        <CloseBtn 
            onClick={(e)=>{
                setIsLoaded(false);
                goBack();
            }}
        >
            <img src={plus} alt="" />
        </CloseBtn>
        {
            isLoaded && <Product 
                product={item}
            />
        }
    </Container>
    <Background onClick={(e)=>{
        setIsLoaded(false);
        goBack();
    }} />
    </Overlay>
  )
}

const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.45);
    
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
`;

const Container = styled.div`
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 2px solid #000;
    border-radius: ${variable.radius.smooth_edge};
    width: 350px;
    height: 500px;
    z-index: 2;
    
    @media ${variable.device.mobileL}{
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        transform: translate(0,0);
        border: none;
    }
`;

const CloseBtn = styled.button`
    position: fixed;
    top: 5%;
    right: 5%;
    width: 40px;
    height: 40px;
    z-index: 10;
    border-radius: ${variable.radius.round_edge};
    border: 2px solid ${(props) => props.theme.main.secondary};
    background-color: ${(props) => props.theme.main.accentRed};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 95%;
        height: 95%;
        position: relative;
        transform: rotate(45deg);
    }
`;

export default ProductPage;