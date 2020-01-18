import React from "react"
import styled from "styled-components"

// Generic text node with some additional props for ease of use and consistency
export const Text = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: ${props => props.bold ? "bold" : "normal"};
    color: ${props => props.color || "rgb(0, 0, 0)"};
    text-align: ${props => {
        if (props.left) { return "left" }
        else if (props.right) { return "right" }
        else { return "left" }
    }};
    margin: 3px 0px 3px 0px;
    font-size: 14px
`