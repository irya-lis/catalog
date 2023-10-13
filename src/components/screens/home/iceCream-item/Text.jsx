import styled, { keyframes } from 'styled-components';
import React from 'react';
import { rotateIn } from 'react-animations';

const ScrollAnimation = styled.div`animation: 10s ${keyframes`${rotateIn} ` }  infinite `;

const Text = () => {
    return (
        <ScrollAnimation
        >
            <h1  style={{paddingLeft: '1000px', position: 'absolute', paddingTop: '190px', color: '#5d0c8a' }}>
                Ice Cream
            </h1>
        </ScrollAnimation>
    );
};

export default Text;
