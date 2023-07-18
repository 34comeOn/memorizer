import React from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAnswerVisibilitySelector, getCurrentCardSelector, toggleAnswerVisibility } from '../../../../store/reducers/cardWindowReducer';
import { useDoneClickButton } from '../../../../myHooks/useDoneClickButton';
import './style.scss';
import { checkAdminPowers, getCurrentUserEmailFromLStorage } from '../../../../utils/utils';
import { getCurrentCollectionSelector } from '../../../../store/reducers/userCollectionsReducer';
import { DeleteCardButton } from '../../../atoms/deleteCardButton';
import { EditCardButton } from '../../../atoms/editCardButton';
import { useRequestLoading } from '../../../../myHooks/useRequestLoading';
import { CustomSpinner } from '../../../atoms/customSpinner';

export const StockCardWindow = () => {
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
    const currentCollectionAdminlist = useAppSelector(getCurrentCollectionSelector).collectionAdminList || '';
    const userHasAdminPowersForCollection = checkAdminPowers(currentUserEmailFromLStorage?? '', currentCollectionAdminlist?? []);

    const dispatch = useAppDispatch();
    const currentCard = useAppSelector(getCurrentCardSelector);
    const onDoneClickHandle = useDoneClickButton(currentCard,onChangeLoadingStatus);
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
                {userHasAdminPowersForCollection && <EditCardButton 
                _id={currentCard._id?? ''} 
                cardTitle={currentCard.collectionItemTitle} 
                cardAnswer={currentCard.collectionItemAnswer} 
                cardCategory={currentCard.collectionItemCategory?? ''} 
                cardColor={currentCard.collectionItemColor?? ''} 
            />}
                <CustomSpinner isLoading={isLoading} />
                {userHasAdminPowersForCollection && <DeleteCardButton currentCard={currentCard} onChangeLoadingStatus={onChangeLoadingStatus}/>}
            </div>
            <DoneButton onClick={onDoneClickHandle}/>
        </StyledCard>
    )
}
