import React, { Component } from "react"
import styled from "styled-components"
import { Live } from "../Live"
import { Game } from "../Game/Game"
import { games } from "./data"
import { TickerButton } from "../TickerButton/TickerButton"

const Container = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    /* overflow: auto; */
    `

const Games = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    /* background-color: red; */
`



export class Ticker extends Component {


    state = {
        games
    }

    scrollNext = () => {
        console.log("Scrolling to next")
        this.games.scrollBy({
            left: 290,
            behavior: "smooth"
        })
    }

    scrollPrev = () => {

        console.log("Scrolling to previous")
        this.games.scrollBy({
            left: -290,
            behavior: "smooth"
        })
    }


    render() {
        return (
            <Container id="ticker">
                <Live live />
                <TickerButton left onClick={this.scrollPrev} />
                <Games ref={el => this.games = el}>
                    {this.state.games.map((game, i) => <Game key={i} game={game} />)}
                </Games>
                <TickerButton onClick={this.scrollNext} />
            </Container>
        )
    }
}