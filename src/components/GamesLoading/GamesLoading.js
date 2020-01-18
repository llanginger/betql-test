import React from "react"
import styled from "styled-components"
import { Text } from "../Text"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


// Simple Loading component to render while games being fetched. 
export const GamesLoading = () => {
    return (
        <Container>
            <Text bold >Loading...</Text>
        </Container>
    )
}