import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  RulesButton,
  RulesImage,
  PopupContainer,
  CloseBtn,
} from './styledComponents'

const PopupRules = () => (
  <Popup
    model
    trigger={<RulesButton type="button"> Rules</RulesButton>}
    className="popup-content"
  >
    {close => (
      <PopupContainer>
        <CloseBtn type="button" onClick={() => close()}>
          <RiCloseLine size={20} data-testid="close" />
        </CloseBtn>

        <RulesImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </PopupContainer>
    )}
  </Popup>
)

export default PopupRules
