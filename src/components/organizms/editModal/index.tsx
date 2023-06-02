import React from "react";
import Modal from 'react-modal';
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { CloseButton } from "../../atoms/closeButton";
import { useAppSelector } from "../../../app/hooks";
import { getModalWindowContentTitle, getModalWindowViewState } from "../../../store/reducers/modalWindowReduser";
import ReactModal from "react-modal";
import { useCloseModalWindowButton } from "../../../myHooks/useCloseModalWindowButton";
import { getAccountStatus } from "../../../store/reducers/accountReduser";
import { getReactElementForModalWindowContent } from "../../../myHooks/useCurrentContentForModalWindow";

ReactModal.setAppElement('#root');

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '800px',
        minHeight: 'min-content',
        backgroundColor: `${variables.colorBackgroundDark}`,
        borderRadius: '15px',
        padding: '20px',
        paddingBottom: '35px',
    },
}

export const EditModalWindow = () => {
    const modalViewState = useAppSelector(getModalWindowViewState);
    const modalWindowContent = useAppSelector(getModalWindowContentTitle);
    const closeModalWindow = useCloseModalWindowButton();
    const accountStatus = useAppSelector(getAccountStatus);
    const renderingComponentAsWindowContent = getReactElementForModalWindowContent(modalWindowContent)
    console.log(modalWindowContent)
    return(
        <Modal
            isOpen={modalViewState}
            style={modalStyles}
            // overlayClassName='modal--overlay'
        >
            <CloseButton onClick={closeModalWindow}/>
            {accountStatus && renderingComponentAsWindowContent}
        </ Modal>
    )
}
