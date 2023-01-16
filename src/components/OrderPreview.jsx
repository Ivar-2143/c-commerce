import React from 'react'
import styled from 'styled-components';
import * as variable from './variables';
import userIc from '../assets/icons/user-icon.png';
import locIc from '../assets/icons/icon-location.png';
import { useNavigate } from 'react-router';
function OrderPreview({userDetails}) {
  const navigate = useNavigate()
  return (
    <StyledPreview onClick={() => navigate(userDetails.orders[0].orderNumber)}>
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
                    <span>{userDetails.address}</span>
                    <span>Order Number: {userDetails.orders[0].orderNumber}</span>
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
    span{
        word-wrap: break-word;
    }
`;
const DetailSection = styled.div`
    position: relative;
`;

const ShippingInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr;
    word-wrap: break-word;
    align-items: center;
    justify-items: center;
    img{
        width: 20px;
        height: 20px;
    }
`;

const Status = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 6fr;
    margin: 15px 0;
    align-items: center;
    div{
        height: 15px;
        width: 15px;
        left: 35%;
        position: relative;
        border-radius: ${variable.radius.round_edge};
        background-color: darkgray;

    }
    span{
        
        font-weight: 600;
    }
`;

const DetailsBtn = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
    button{
        background-color: ${(props)=> props.theme.main.accent};
        border-radius: ${variable.radius.smooth_edge};
        width: 170px;
        height: 40px;
        pointer-events: none;
        outline: none;
        border: none;
        font-weight: 500;
        font-size: ${variable.font.size_l};
        /* border: 2px solid ${(props) => props.theme.main.secondary}; */
    }
`

export default OrderPreview