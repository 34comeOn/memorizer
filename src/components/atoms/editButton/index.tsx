import React from "react"
import { useDispatch } from "react-redux";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReduser";
import { NewCollectionForm } from "../../organizms/newCollectionForm";
import { StyledEditButton } from "./styledEditButton";

export const EditButton = ({collectionId = ''}: {collectionId: string}) => {
    const dispatch = useDispatch();

    return(
        <StyledEditButton onClick={()=>{
            dispatch(setContentForModalWindow(<NewCollectionForm />))
            dispatch(showModalWindow())
        }} />
    )
}