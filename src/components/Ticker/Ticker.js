import React, { Component } from "react"
import styled from "styled-components"
import { Live } from "../Live"
import { Game, Games, gameContainerWidth } from "../Games"
import { games } from "./gameData"
import { TickerButton } from "../TickerButton"
import { GamesLoading } from "../GamesLoading"

const Container = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`

export class Ticker extends Component {

    state = {
        games,
        live: true,
        loading: false
    }


    // Helper method to determine exact amount to scroll - ensures the scroll button will always cause the scroll to line up the next/previous game component with the left side of the ticker
    getScrollBy = (direction) => {
        const scrollAmount = this.gamesDiv.scrollLeft

        if (direction === "next") {
            const scrollBy = (Math.ceil(scrollAmount / gameContainerWidth) * gameContainerWidth) - scrollAmount
            return scrollBy > 0 ? scrollBy : gameContainerWidth
        } else if (direction === "prev") {
            const scrollBy = (Math.floor(scrollAmount / gameContainerWidth) * gameContainerWidth) - scrollAmount
            return scrollBy < 0 ? scrollBy : -gameContainerWidth
        }
    }

    // Method to scroll the game ticker children to the next / previous game in ticker
    scroll = (direction) => {
        this.gamesDiv.scrollBy({
            left: this.getScrollBy(direction),
            behavior: "smooth"
        })
    }

    // If loading, render the loading indicator, else render list of games.
    // The "Games" component's ref is set in order to enable programatic scrolling.
    // Note; the loading indicator is very basic. A more complete option would be to render enough placeholder "empty" games to fill the ticker
    renderGames = () => {
        return (
            <Games ref={el => this.gamesDiv = el}>
                {
                    !this.state.loading ?
                        this.state.games.map((game, i) => <Game key={i} game={game} />)
                        : <GamesLoading />
                }
            </Games>
        )
    }

    // Nearly finished "bonus" work - fully functional, just not animated. Uncomment in render method to use.
    renderPrevButton = () => {
        if (!this.state.loading) {
            return (
                <TickerButton
                    left
                    onClick={() => this.scroll("prev")}
                />

            )
        }
    }

    render() {
        return (
            <Container id="ticker">
                <Live live={this.state.live} />
                {/* {this.renderPrevButton()} */}
                {this.renderGames()}
                <TickerButton
                    onClick={() => this.scroll("next")}
                />
            </Container>
        )
    }
}