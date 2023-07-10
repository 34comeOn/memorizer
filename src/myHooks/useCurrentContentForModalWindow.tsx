import React from "react";
import { CardWindow } from "../components/organizms/card";
import { EditCollectionForm } from "../components/organizms/editCollectionForm";
import { NewCollectionForm } from "../components/organizms/newCollectionForm";
import { NewCardForm } from "../components/organizms/newCardForm";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../constants/stringConstants";
import { EditCardForm } from "../components/organizms/editCardForm";

export const getReactElementForModalWindowContent = (elementTitleFromState: string) => {
    let ModalWindowContent = <></>;
    
    switch (elementTitleFromState) {
        case MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_COLLECTION:
            ModalWindowContent = <NewCollectionForm />
            break;
        case MODAL_WINDOW_CONTENT_STRING_CONSTANTS.EDIT_COLLECTION:
            ModalWindowContent = <EditCollectionForm />
            break;
        case MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_CARD:
            ModalWindowContent = <NewCardForm />
            break;
        case MODAL_WINDOW_CONTENT_STRING_CONSTANTS.EDIT_CARD:
            ModalWindowContent = <EditCardForm />
            break;
        case MODAL_WINDOW_CONTENT_STRING_CONSTANTS.RENDER_ITEM_OF_COLLECTION:
            ModalWindowContent = <CardWindow />
            break;
        default:
            ModalWindowContent = <p>No content</p>;
    }

    return ModalWindowContent;
}