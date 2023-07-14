import React, { useEffect } from "react";
import { cutTitle, getPunishmentForLatePractice, TcollectionItemData } from "../../../utils/utils";
import { StyledRepeatListItem } from "./styledRepeatListItem";
import { MAX_REPEATLIST_ITEM_TITLE_LENGTH } from "../../../constants/stockConstants";
import Snackbar from "@mui/material/Snackbar";
import './style.scss';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getTrainedCardIdSelector, setTrainedCardId } from "../../../store/reducers/cardWindowReduser";

type TrepeatListItem = {
    onClick: ()=>void,
    item: TcollectionItemData,
}

export const RepeatListItem = ({onClick, item} :TrepeatListItem) => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useAppDispatch();
    const itemTitle = cutTitle(item.collectionItemTitle,MAX_REPEATLIST_ITEM_TITLE_LENGTH);
    const timesBeenRepeatedAfterPunishment = getPunishmentForLatePractice(item.collectionItemTimesBeenRepeated, item.collectionItemRepeatedTimeStamp);
    const timesRepeatedDiffer = item.collectionItemTimesBeenRepeated - timesBeenRepeatedAfterPunishment;

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
    dispatch(setTrainedCardId(''))
    setOpen(false);
    };

    const trainedCardId = useAppSelector(getTrainedCardIdSelector);

    useEffect(()=> {
        setOpen(true);
    }, [])

    return(
        <StyledRepeatListItem 
            color={item.collectionItemColor || 'white'}
            className='list--item' 
            onClick={() => onClick()}
        >
            {itemTitle}
            <div className='repeat-counter'>
                {timesBeenRepeatedAfterPunishment}
                {(timesRepeatedDiffer > 0) && <Snackbar style={{position: 'absolute', top: '10px'}} 
                open={open} 
                autoHideDuration={10000} 
                onClose={handleClose}>
                    <div className="update-info--box update-info--box__get-punishment">
                        -{timesRepeatedDiffer}
                    </div>
                </Snackbar>}
                {(item._id === trainedCardId) && <Snackbar style={{position: 'absolute', top: '10px'}} 
                open={open} 
                autoHideDuration={2000} 
                onClose={handleClose}>
                    <div className="update-info--box update-info--box__done-click">
                        +1
                    </div>
                </Snackbar>}
            </div>
        </StyledRepeatListItem>
    )
}