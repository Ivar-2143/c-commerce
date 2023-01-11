import styled from "styled-components";
import * as variable from './variables';

export const ProductWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-top: 40px;
    

    @media (max-width: ${variable.screen_md}) {
      gap:15px;
    }
    @media (max-width: ${variable.screen_xxsm}) {
        gap:5px;
    }
`;

export const BgContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.main.secondary};
`; 

export const LogoOverlay = styled.img`
  position: absolute;
  z-index: 10;
  width: 90%;
  left: 48%;
  top: 50%;
  transform: translate(-50%,-50%);
  filter: drop-shadow(0 0 10px black);
`;

export const GlassFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${props => props.background? 1 : 5};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.background? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)" };

`;

export const Background = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  object-fit: cover;
  filter: blur(8px);
  pointer-events: none;

`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  padding: 0;
  img{
    pointer-events: none;
  }
`;

export const SideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0;
    pointer-events: none;
    position: relative;
`; 

export const ContentWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  display: flex;
  left: 50%;
  top: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  background-color: ${(props)=> props.theme.main.primary};
  border-radius: ${variable.radius.smoother_edge};
  overflow: hidden;
  box-shadow: 0 0 5px #000;
  padding: 0;
`;

