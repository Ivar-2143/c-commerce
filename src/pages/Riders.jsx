import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';
import RiderNav from '../components/RiderNav'
import * as variables from '../components/variables';




function Riders() {



  return (
    <PageWrap>
        <RiderNav />
        <ContentWrapper>
            <Outlet />
        </ContentWrapper>
    </PageWrap>
  )
}


const ContentWrapper = styled.div`
    width: 80%;
`;

const PageWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    /* background-color: green; */

`



export default Riders