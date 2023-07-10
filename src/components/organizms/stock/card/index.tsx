import React from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAnswerVisibilitySelector, getCurrentCardSelector, toggleAnswerVisibility } from '../../../../store/reducers/cardWindowReduser';
import { useDoneClickButton } from '../../../../myHooks/useDoneClickButton';
import './style.scss';
import { checkAdminPowers, getCurrentUserEmailFromLStorage } from '../../../../utils/utils';
import { getCurrentCollectionSelector } from '../../../../store/reducers/userCollectionsReduser';
import { EditButton } from '../../../atoms/editButton';
import { DeleteCardButton } from '../../../atoms/deleteCardButton';

export const StockCardWindow = () => {
    const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
    const currentCollectionAdminlist = useAppSelector(getCurrentCollectionSelector).collectionAdminList || '';
    const userHasAdminPowersForCollection = checkAdminPowers(currentUserEmailFromLStorage?? '', currentCollectionAdminlist?? []);

    const dispatch = useAppDispatch();
    const currentCard = useAppSelector(getCurrentCardSelector);
    const onDoneClickHandle = useDoneClickButton(currentCard);
    const isAnswerVisible = useAppSelector(getAnswerVisibilitySelector);

    const onShowClickHandle= ()=> {
        dispatch(toggleAnswerVisibility())
    }

    return (  
        <StyledCard>
            <span className='card--title'>{currentCard.collectionItemTitle}</span>
            <ShowButton hasClicked={isAnswerVisible} onClick={onShowClickHandle}/>
            <div className='answer--container' >
                <Answer isVisible={isAnswerVisible}>
                    {currentCard.collectionItemAnswer}
                </Answer>
            </div>
            <div className='edit-buttons--container'>
                {userHasAdminPowersForCollection && <EditButton _id={currentCard._id || ''} />}
                {userHasAdminPowersForCollection && <DeleteCardButton currentCard={currentCard} />}
            </div>
            <DoneButton onClick={onDoneClickHandle}/>
        </StyledCard>
    )
}
