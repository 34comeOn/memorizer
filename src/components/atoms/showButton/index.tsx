import React from 'react';

import { StockButton } from '../stock/button';

export const ShowButton = ({onClick, hasClicked}: {onClick : ()=> void,hasClicked: boolean}) => {
    return (
        <StockButton onClick={onClick} color='bisque' text={!hasClicked? 'Show answer':'Hide answer'}/>
    )
}