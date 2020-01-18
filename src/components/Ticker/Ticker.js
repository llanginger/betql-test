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

const elementWidth = 290


export class Ticker extends Component {


    state = {
        games,
        live: true,
        loaded: false
    }

    componentDidMount() {
        this.setState({
            loaded: true
        })
        console.log("Games div scroll: ", this.gamesDiv.scrollLeft)
        this.gamesDiv.addEventListener("scroll", this.handleScroll)

    }

    handleScroll = (event) => {
        // console.log("Scroll event: ", event.target.scrollLeft)
    }

    scrollNext = () => {

        const scrollAmount = this.gamesDiv.scrollLeft
        const scrollBy = (Math.ceil(scrollAmount / elementWidth) * elementWidth) - scrollAmount

        this.gamesDiv.scrollBy({
            left: scrollBy > 0 ? scrollBy : elementWidth,
            behavior: "smooth"
        })
        this.setState({}, this.showPrev())

    }

    scrollPrev = () => {

        const scrollAmount = this.gamesDiv.scrollLeft
        const scrollBy = (Math.floor(scrollAmount / elementWidth) * elementWidth) - scrollAmount
        console.log("TCL: Ticker -> scrollPrev -> scrollBy", scrollBy)

        // this.setState({}, this.showPrev())

        this.gamesDiv.scrollBy({
            left: scrollBy < 0 ? scrollBy : -elementWidth,
            behavior: "smooth"
        })
    }

    showPrev = () => {
        console.log("Can show: ", this.state.loaded && this.gamesDiv.scrollLeft !== 0)
    }


    render() {


        return (
            <Container id="ticker">
                <Live live={this.state.live} />
                <TickerButton
                    left
                    onClick={this.scrollPrev}
                />
                {this.state.loaded && this.gamesDiv.scrollLeft !== 0 &&
                    <div />
                }
                <Games ref={el => this.gamesDiv = el}>
                    {this.state.games.map((game, i) => <Game key={i} game={game} />)}
                </Games>
                <TickerButton
                    onClick={this.scrollNext}
                />
            </Container>
        )
    }
}