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
let displayText = ''

class PlayingView extends Component {
  state = {
    gameInProgress: true,
    yourChoiceList: [],
    score: 0,
  }

  onRockButton = () => {
    const {yourChoiceList} = this.state

    this.setState(prevState => ({
      yourChoiceList: [...prevState.yourChoiceList, choicesList[0]],
      gameInProgress: !prevState.gameInProgress,
    }))

    if (displayText === 'won') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (displayText === 'lose') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
    console.log(choicesList[randomIndex].id)
    console.log(yourChoiceList)
  }

  onPaperButton = () => {
    const {yourChoiceList} = this.state

    this.setState(prevState => ({
      yourChoiceList: [...prevState.yourChoiceList, choicesList[2]],
      gameInProgress: !prevState.gameInProgress,
    }))
    if (displayText === 'won') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (displayText === 'lose') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
    console.log(yourChoiceList)
  }

  onScissorsButton = () => {
    const {yourChoiceList} = this.state

    this.setState({gameInProgress: false})

    this.setState(prevState => ({
      yourChoiceList: [...prevState.yourChoiceList, choicesList[1]],
    }))

    if (displayText === 'won') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (displayText === 'lose') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
    console.log(yourChoiceList)
  }

  onPlayAgain = () => {
    this.setState({gameInProgress: true})
  }

  renderGameResults = () => {
    const {yourChoiceList} = this.state

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

    console.log(displayText)

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
          {displayText === 'won' && <ScoreValue>YOU WON</ScoreValue>}
          {displayText === 'lose' && <ScoreValue>YOU LOSE</ScoreValue>}
          {displayText === 'draw' && <ScoreValue>IT IS DRAW</ScoreValue>}
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
