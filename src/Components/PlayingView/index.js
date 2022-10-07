/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'

import {
  PlayingContainer,
  HeaderContainer,
  NamesContainer,
  CostumeHeading,
  ScoreContainer,
  ScoreValue,
  CardButton,
  CardImage,
  GameContainer,
  GameResultsContainer,
  GameImageContainer,
  ResultContainer,
  GameCont,
} from './styledComponents'

import PopupRules from '../PopupRules'
import {RulesButton} from '../PopupRules/styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
const randomIndex = Math.floor(Math.random() * 3)
const yourChoiceList = []

class PlayingView extends Component {
  state = {
    gameInProgress: true,
    score: 0,
    displayText: '',
  }

  onRockButton = () => {
    this.setState(prevState => ({
      gameInProgress: !prevState.gameInProgress,
    }))

    yourChoiceList.push(choicesList[0])

    console.log(yourChoiceList)

    if (
      yourChoiceList[yourChoiceList.length - 1].id === 'ROCK' &&
      choicesList[randomIndex].id === 'SCISSORS'
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        displayText: 'YOU WON',
      }))
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'ROCK' &&
      choicesList[randomIndex].id === 'PAPER'
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        displayText: 'YOU LOSE',
      }))
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'ROCK' &&
      choicesList[randomIndex].id === 'ROCK'
    ) {
      this.setState(prevState => ({
        score: prevState.score,
        displayText: 'IT IS DRAW',
      }))
    }

    /* if (displayText === 'won') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (displayText === 'lose') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
    */
  }

  onPaperButton = () => {
    this.setState(prevState => ({
      gameInProgress: !prevState.gameInProgress,
    }))

    yourChoiceList.push(choicesList[2])

    if (
      yourChoiceList[yourChoiceList.length - 1].id === 'PAPER' &&
      choicesList[randomIndex].id === 'SCISSORS'
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        displayText: 'YOU LOSE',
      }))
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'PAPER' &&
      choicesList[randomIndex].id === 'ROCK'
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        displayText: 'YOU WON',
      }))
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'PAPER' &&
      choicesList[randomIndex].id === 'PAPER'
    ) {
      this.setState(prevState => ({
        score: prevState.score,
        displayText: 'IT IS DRAW',
      }))
    }

    /*
    if (displayText === 'won') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (displayText === 'lose') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    } */
  }

  onScissorsButton = () => {
    this.setState({gameInProgress: false})

    yourChoiceList.push(choicesList[1])

    if (
      yourChoiceList[yourChoiceList.length - 1].id === 'SCISSORS' &&
      choicesList[randomIndex].id === 'ROCK'
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        displayText: 'YOU LOSE',
      }))
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'SCISSORS' &&
      choicesList[randomIndex].id === 'PAPER'
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        displayText: 'YOU WON',
      }))
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'SCISSORS' &&
      choicesList[randomIndex].id === 'SCISSORS'
    ) {
      this.setState(prevState => ({
        score: prevState.score,
        displayText: 'IT IS DRAW',
      }))
    }

    /*
    if (displayText === 'won') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (displayText === 'lose') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    } */
  }

  onPlayAgain = () => {
    this.setState({gameInProgress: true})
  }

  /*
  renderDisplayText = () => {
    if (
      yourChoiceList[yourChoiceList.length - 1].id === 'ROCK' &&
      choicesList[randomIndex].id === 'PAPER'
    ) {
      displayText = 'lose'
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'ROCK' &&
      choicesList[randomIndex].id === 'SCISSORS'
    ) {
      displayText = 'won'
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'PAPER' &&
      choicesList[randomIndex].id === 'SCISSORS'
    ) {
      displayText = 'lose'
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'PAPER' &&
      choicesList[randomIndex].id === 'ROCK'
    ) {
      displayText = 'won'
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'SCISSORS' &&
      choicesList[randomIndex].id === 'ROCK'
    ) {
      displayText = 'lose'
    } else if (
      yourChoiceList[yourChoiceList.length - 1].id === 'SCISSORS' &&
      choicesList[randomIndex].id === 'PAPER'
    ) {
      displayText = 'won'
    } else {
      displayText = 'draw'
    }
  }
*/

  renderGameResults = () => {
    const {displayText} = this.state

    return (
      <GameResultsContainer>
        <GameCont>
          <GameImageContainer>
            <ScoreValue>YOU</ScoreValue>
            <CardImage
              src={yourChoiceList[yourChoiceList.length - 1].imageUrl}
              alt="your choice"
            />
          </GameImageContainer>
          <GameImageContainer>
            <ScoreValue>OPPONENT</ScoreValue>
            <CardImage
              src={choicesList[randomIndex].imageUrl}
              alt="opponent choice"
            />
          </GameImageContainer>
        </GameCont>
        <ResultContainer>
          <ScoreValue>{displayText}</ScoreValue>
          <RulesButton type="button" onClick={this.onPlayAgain}>
            PLAY AGAIN
          </RulesButton>
        </ResultContainer>
      </GameResultsContainer>
    )
  }

  render() {
    const {gameInProgress, score} = this.state

    return (
      <PlayingContainer>
        <HeaderContainer>
          <NamesContainer>
            <CostumeHeading>Rock Paper Scissors</CostumeHeading>
          </NamesContainer>
          <ScoreContainer>
            <ScoreValue>Score</ScoreValue>
            <ScoreValue>{score}</ScoreValue>
          </ScoreContainer>
        </HeaderContainer>
        {gameInProgress ? (
          <>
            <GameContainer>
              <CardButton
                type="button"
                data-testid="rockButton"
                onClick={this.onRockButton}
              >
                <CardImage
                  src={choicesList[0].imageUrl}
                  alt={choicesList[0].id}
                />
              </CardButton>
              <CardButton
                type="button"
                data-testid="scissorsButton"
                onClick={this.onScissorsButton}
              >
                <CardImage
                  src={choicesList[1].imageUrl}
                  alt={choicesList[1].id}
                />
              </CardButton>
              <CardButton
                type="button"
                data-testid="paperButton"
                onClick={this.onPaperButton}
              >
                <CardImage
                  src={choicesList[2].imageUrl}
                  alt={choicesList[2].id}
                />
              </CardButton>
            </GameContainer>
          </>
        ) : (
          this.renderGameResults()
        )}
        <PopupRules />
      </PlayingContainer>
    )
  }
}
export default PlayingView
