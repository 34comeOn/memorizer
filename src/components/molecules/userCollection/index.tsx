import React from "react";
import { MenuButton } from "../../atoms/menuButton";
import { StyledUserCollection } from "./styledUserCollection";
import variables from '../../../sass/variables.module.scss';
import './style.scss';

export const UserCollection = ({title, color}: {title: string, color: string}) => {
    return(
        <StyledUserCollection color={color}>
            <span className='collection--title'>
                {title}
            </span>
            <MenuButton path='/collection' color={variables.colorMenuBright}>
                Train collection
            </MenuButton>
        </StyledUserCollection>
    )
}