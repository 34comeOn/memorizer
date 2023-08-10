import React from "react";
import Modal from 'react-modal';
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { CloseButton } from "../../atoms/closeButton";
import { useAppSelector } from "../../../app/hooks";
import { getModalWindowContentTitleSelector, getModalWindowViewSelector } from "../../../store/reducers/modalWindowReducer";
import ReactModal from "react-modal";
import { useCloseModalWindowButton } from "../../../myHooks/useCloseModalWindowButton";
import { getReactElementForModalWindowContent } from "../../../myHooks/useCurrentContentForModalWindow";

ReactModal.setAppElement('#root');

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '800px',
        minHeight: 'min-content',
        minWidth: 'min-content',
        backgroundColor: `${variables.colorBackgroundDark}`,
        borderRadius: '15px',
        padding: '20px',
        paddingBottom: '35px',
    },
}

export const EditModalWindow = () => {
    const modalViewState = useAppSelector(getModalWindowViewSelector);
    const modalWindowContent = useAppSelector(getModalWindowContentTitleSelector);
    const closeModalWindow = useCloseModalWindowButton();
    const renderingComponentAsWindowContent = getReactElementForModalWindowContent(modalWindowContent)
    return(
        <Modal
            isOpen={modalViewState}
            style={modalStyles}
            // overlayClassName='modal--overlay'
        >
            <CloseButton onClick={closeModalWindow}/>
            {renderingComponentAsWindowContent}
        </ Modal>
    )
}
