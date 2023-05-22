import React from "react";
import { MenuButton } from "../../atoms/menuButton";
import { StyledUserCollection } from "./styledUserCollection";
import variables from '../../../sass/variables.module.scss';
import './style.scss';

export const UserCollection = ({...props}: {title: string}) => {
    return(
        <StyledUserCollection>
            <span className='collection--title'>
                {props.title}
            </span>
            <MenuButton path='/collection' color={variables.colorMenuBright}>
                    Train collection
                </MenuButton>
        </StyledUserCollection>
    )
}