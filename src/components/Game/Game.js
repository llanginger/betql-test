import React from "react"
import styled from "styled-components"
import { Text } from "../Text"

const GameContainer = styled.div`
    padding-left: 22px;
    padding-right: 22px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 290px;
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


export const Game = ({ game }) => {

    const {
        team1,
        team2,
        over,
        under,
        code,
        hasScores,
        startTime,
        gameOver
    } = game
    console.log("TCL: Game -> game", game)

    return (
        <GameContainer>
            <Column>
                <Text bold={gameOver && team1.score > team2.score}>{team1.name}</Text>
                <Text bold={gameOver && team2.score > team1.score}>{team2.name}</Text>
            </Column>
            {hasScores &&
                <Column>
                    <Text bold={gameOver && team1.score > team2.score}>{team1.score}</Text>
                    <Text bold={gameOver && team2.score > team1.score}>{team2.score}</Text>
                </Column>
            }
            <Column>
                <Text bold={startTime == "FINAL" ? true : false} right>{startTime}</Text>
                <Text right bold={gameOver}>{code} {over} O/U {under}</Text>
            </Column>
        </GameContainer>
    )
}