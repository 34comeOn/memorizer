import React from "react";
import { TrainCollectionButton } from "../../atoms/trainCollectionButton";
import { StyledUserCollection } from "./styledUserCollection";
import variables from '../../../sass/variables.module.scss';
import './style.scss';

export const UserCollection = ({title, color}: {title: string, color: string}) => {
    return(
        <StyledUserCollection color={color}>
            <span className='collection--title'>
                {title}
            </span>
            <TrainCollectionButton path='/collection' color={variables.colorMenuBright}>
                Train collection
            </TrainCollectionButton>
        </StyledUserCollection>
    )
}