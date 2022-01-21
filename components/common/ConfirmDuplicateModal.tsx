import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { MediaQueries } from '../../common/utilities/MediaQueries'

type ModalType = {
    isOpen: boolean,
    onRequestClose?: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledH2ForModal = styled.h2
`
    color: #f71717;
    margin: 0 0 15px 0;
    height: 20px;
`

const StyledPForModal = styled.p
`
    font-size: 1.2em;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const StyledButtonForModal =  styled.button
`
    padding: 16px;
    border: none;
    border-radius: 0 20px 0 20px;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
        90deg,
        rgba(93, 12, 255, 1) 0%,
        rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    margin-top: 15px;
`

const StyledModal = styled(Modal).attrs(props => ({
    isOpen: props.isOpen,
    onRequestClose: props.onRequestClose? props.onRequestClose : "null"
})
)
`
    background: rgb(106, 110, 109);
    background: linear-gradient(39deg, rgb(120, 124, 122) 7%, rgb(218, 177, 67) 42%, rgba(9,157,228,1) 100%);
    border-radius: 30px;
    justify-content: center;
    height: 135px;
    width: auto;
    text-align: center;
    margin: 50px 25px 0 25px;
    ${
        MediaQueries("smm")
        `
            width: fit-content;
            height: 150px;
        `
    }
`

const ConfirmDuplicateModal: React.FC<ModalType> = ({isOpen, onRequestClose, onClick}) => {
    return<>
    (
        <StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
            <StyledH2ForModal>Ooops!</StyledH2ForModal>
            <StyledPForModal>It's look like you already add this task...</StyledPForModal>
            <StyledButtonForModal onClick={onClick}>I Know</StyledButtonForModal>
        </StyledModal>
    )
    </>
}

export default ConfirmDuplicateModal