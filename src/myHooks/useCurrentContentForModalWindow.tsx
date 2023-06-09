import React from "react";
import { NewCollectionForm } from "../components/organizms/newCollectionForm";

export const getReactElementForModalWindowContent = (elementTitleFromState: string) => {
    let ModalWindowContent = <></>;

    switch (elementTitleFromState) {
        case 'newCollection':
            ModalWindowContent = <NewCollectionForm />
            break;
        default:
            ModalWindowContent = <p>No content</p>;
    }

    return ModalWindowContent;
}