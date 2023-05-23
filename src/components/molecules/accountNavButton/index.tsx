import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { logOut } from "../../../store/reducers/accountReduser";
import { StyledAccountNavButton } from "./styledAccountNavButton";

export const AccountNavButton = ({userName}: {userName: string}) => {
    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(logOut());
    }
    return(
        <StyledAccountNavButton onClick={onClickHandler}>
            {userName}
        </StyledAccountNavButton>
    )
}