import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { logOut } from "../../../store/reducers/accountReduser";
import { removeAllUserCollections } from "../../../store/reducers/userCollectionsReduser";
import { StyledAccountNavButton } from "./styledAccountNavButton";

export const AccountNavButton = ({userName}: {userName: string}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(logOut());
        dispatch(removeAllUserCollections());
        navigate('/');
    }
    return(
        <div>
            <span style={{color: 'white', marginLeft: '200px'}}>
                {userName}
            </span>
            <StyledAccountNavButton onClick={onClickHandler}>
                Log out
            </StyledAccountNavButton>
        </div>
    )
}