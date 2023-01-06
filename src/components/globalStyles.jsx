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

