import React from "react"
import styled from "styled-components"

export const Text = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: ${props => props.bold ? "bold" : "normal"};
    color: ${props => props.color || "rgb(0, 0, 0)"};
    text-align: ${props => {
        if (props.left) { return "left" }
        else if (props.right) { return "right" }
        else { return "left" }
    }};
    margin: 5px 0px 5px 0px;
    font-size: 14px;
`