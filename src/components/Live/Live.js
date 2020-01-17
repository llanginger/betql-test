import React from "react"
import styled from "styled-components"
import { Text } from "../Text"

const Background = styled.div`
   background-color: ${props => props.live ? "#c5625b" : "#999"};
   display: flex;
flex-shrink: 0;
   justify-content: center;
   align-items: center;
   width: 50px;
   height: 100%;
`

export const Live = ({ live = false }) => {
    return (
        <Background live={live}>
            <Text color="white" bold>LIVE</Text>
        </Background>
    )
}