import React from "react"
import styled from "styled-components"
import { Text } from "../Text"


// The ticker's scroll method uses the gameContainerWidth in order to scroll precisely.
// This methodology assumes that the "Game" will always have the same width, but it could be refactored easily to read the "Game"'s container width on render.
export const gameContainerWidth = 290

const GameContainer = styled.div`
    padding-left: 22px;
    padding-right: 22px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: ${gameContainerWidth}px;
    border: 1px rgba(0, 0, 0, 0.1) solid;
    border-left: 0px;
    box-sizing: border-box;
    flex-shrink: 0;
`


const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`


// The "Game" component, render methods broken out for ease or reading and refactoring.
export const Game = ({ game }) => {

    const {
        team1,
        team2,
        over,
        under,
        code,
        startTime,
        gameOver
    } = game

    // Render the teams column.
    // If game has finished, set winning team's name to bold
    const renderTeams = () => (
        <Column>
            <Text bold={gameOver && team1.score > team2.score}>{team1.name}</Text>
            <Text bold={gameOver && team2.score > team1.score}>{team2.name}</Text>
        </Column>
    )

    // Render the scores column if there are scores to display. 
    // If game has finished, set winning team's score to bold
    const renderScores = () => {
        if (team1.score && team2.score) {
            return (
                <Column>
                    <Text bold={gameOver && team1.score > team2.score}>{team1.score}</Text>
                    <Text bold={gameOver && team2.score > team1.score}>{team2.score}</Text>
                </Column>
            )
        }
    }

    // Render the right column
    // If game has finished, set text to bold.
    const renderTimeAndOdds = () => (
        <Column>
            <Text bold={startTime == "FINAL" ? true : false} right>{startTime}</Text>
            <Text right bold={gameOver}>{code} {over} O/U {under}</Text>
        </Column>
    )

    return (
        <GameContainer>
            {renderTeams()}
            {renderScores()}
            {renderTimeAndOdds()}
        </GameContainer>
    )
}