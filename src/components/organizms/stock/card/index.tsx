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
import { useWarningNotification } from '../../../../myHooks/utillsHooks/useWarningNotification';
import { RESPONSE_ERROR_TITLE } from '../../../../constants/stringConstants';
import { getAccountStatusSelector } from '../../../../store/reducers/accountReducer';
import { useDoneClickButtonStockItem } from '../../../../myHooks/useDoneClickButtonStockItem';

export const StockCardWindow = () => {
    const dispatch = useAppDispatch();
    const accountStatus = useAppSelector(getAccountStatusSelector);

    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const [contextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.DELETE);
    const [doneContextHolder, openDoneNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.DONE);

    const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
    const currentCollectionAdminlist = useAppSelector(getCurrentCollectionSelector).collectionAdminList;
    const currentCollection = useAppSelector(getCurrentCollectionSelector);
    const userHasAdminPowersForCollection = checkAdminPowers(currentUserEmailFromLStorage?? '', currentCollectionAdminlist?? []);
    const currentCard = useAppSelector(getCurrentCardSelector);
    const isAnswerVisible = useAppSelector(getAnswerVisibilitySelector);
    
    const onDoneClickHandle = useDoneClickButton(currentCard,onChangeLoadingStatus, openDoneNotification as ((descriptionText: string) => void));
    const onDoneClickStockItem = useDoneClickButtonStockItem(currentCard, currentCollection);

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
            <>
                {contextHolder}
            </>
            <>
                {doneContextHolder}
            </>
            <div className='edit-buttons--container'>
                {userHasAdminPowersForCollection && <EditCardButton 
                _id={currentCard._id?? ''} 
                cardTitle={currentCard.collectionItemTitle} 
                cardAnswer={currentCard.collectionItemAnswer} 
                cardCategory={currentCard.collectionItemCategory?? ''} 
                cardColor={currentCard.collectionItemColor?? ''} 
            />}
                <CustomSpinner isLoading={isLoading} />
                {userHasAdminPowersForCollection && <DeleteCardButton 
                currentCard={currentCard} 
                onChangeLoadingStatus={onChangeLoadingStatus}
                openNotification={openNotification as ((descriptionText: string) => void)}
                />}
            </div>
            <DoneButton onClick={accountStatus? onDoneClickHandle: onDoneClickStockItem}/>
        </StyledCard>
    )
}
