import React from "react";
import { CardWindow } from "../components/organizms/card";
import { NewCollectionForm } from "../components/organizms/newCollectionForm";
import { NewCollectionItemForm } from "../components/organizms/newCollectionItemForm";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../constants/stringConstants";

export const getReactElementForModalWindowContent = (elementTitleFromState: string) => {
    let ModalWindowContent = <></>;
    
    switch (elementTitleFromState) {
        case MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_COLLECTION:
            ModalWindowContent = <NewCollectionForm />
            break;
        case MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_ITEM_OF_COLLECTION:
            ModalWindowContent = <NewCollectionItemForm />
            break;
        case MODAL_WINDOW_CONTENT_STRING_CONSTANTS.RENDER_ITEM_OF_COLLECTION:
            ModalWindowContent = <CardWindow />
            break;
        default:
            ModalWindowContent = <p>No content</p>;
    }

    return ModalWindowContent;
}