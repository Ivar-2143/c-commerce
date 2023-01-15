import React from 'react'
import styled from 'styled-components';
import * as variable from './variables';
import userIc from '../assets/icons/user-icon.png';
import locIc from '../assets/icons/icon-location.png';
function OrderPreview() {
  return (
    <StyledPreview>
        <ContentWrapper>
            <ProfileSection>
                <img src={userIc} alt="" />
            </ProfileSection>
            <DetailSection>
                <Status>
                    <div></div>
                    <span>Waiting for a rider</span>
                </Status>
                <ShippingInfo>
                    <img src={locIc} alt="" />
                    <span>123 Bartolome St., New Zealand Compound, Brgy. Houston, New York City, Philippines </span>
                </ShippingInfo>
            </DetailSection>
            <DetailsBtn>
                <button>Order Details</button>
            </DetailsBtn>
        </ContentWrapper>
    </StyledPreview>
  )
}

const StyledPreview = styled.li`
    list-style: none;
    width: 100%;
    height: 120px;
    background-color: white;
    position: relative;
    border-radius: ${variable.radius.smoother_edge};
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
    }
`
const ContentWrapper = styled.div`
    width: 90%;
    position: relative;
    height: 90%;
    /* background-color: green; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 2fr 6fr 2fr;
`;

const ProfileSection = styled.div`
    width: 95px;
    height: 90%;
    border-radius: ${variable.radius.round_edge};
    background-color: ${(props)=> props.theme.main.primary};
    position: relative;
    top: 50%;
    transform: translate(0,-50%);
    img{
        width: 100%;
        height: 99%;

    }
`;
const DetailSection = styled.div`
    
`;

const ShippingInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr;
    img{
        width: 20px;
        height: 20px;
    }
`;

const Status = styled.div`

div{
    height: 40px;
    width: 40px;
    border-radius: ${variable.radius.round_edge};
    background-color: darkgray;

}
`;

const DetailsBtn = styled.div`
    
`

export default OrderPreview