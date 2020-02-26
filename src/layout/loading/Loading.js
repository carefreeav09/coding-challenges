import React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

const FullWidthDiv = styled.div`
        display: flex;
        min-height: 100vh;
        min-width: 100vw;
        background: #333;
        color: white;
        justify-content: center;
        align-items : center;
    `;

const Loading = () => {
    return (
        <FullWidthDiv>
                  <Spinner color="success" />
        </FullWidthDiv>
    )
}

export default Loading;
