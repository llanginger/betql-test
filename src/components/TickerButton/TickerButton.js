import React from "react"
import styled from "styled-components"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Container = styled.div`
    background-color: white;
    border: 1px rgba(0, 0, 0, 0.1) solid;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 50px;
    height: 100%;
    flex-shrink: 0;

    :hover {
        cursor: pointer;
    }
`


// Ticker scroll button.
// Takes a "left" boolean prop to determine which icon to use as well as an onClick prop
export const TickerButton = ({ left, onClick }) => {
    return (
        <Container onClick={onClick}>
            {left ? <FaChevronLeft size={26} /> : <FaChevronRight size={26} />}
        </Container>
    )
}