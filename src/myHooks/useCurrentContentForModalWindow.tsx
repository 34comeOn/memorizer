import React from "react";
import { NewCollectionForm } from "../components/organizms/newCollectionForm";
import { NewCollectionItemForm } from "../components/organizms/newCollectionItemForm";

export const getReactElementForModalWindowContent = (elementTitleFromState: string) => {
    let ModalWindowContent = <></>;

    switch (elementTitleFromState) {
        case 'newCollection':
            ModalWindowContent = <NewCollectionForm />
            break;
        case 'newItemOfCollection':
            ModalWindowContent = <NewCollectionItemForm />
            break;
        default:
            ModalWindowContent = <p>No content</p>;
    }

    return ModalWindowContent;
}