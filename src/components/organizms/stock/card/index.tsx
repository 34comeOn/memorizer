import React from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAnswerVisibilityState, getCurrentCardState, getCurrentCardVisibilityState, toggleAnswerVisibility } from '../../../../store/reducers/cardWindowReduser';
import { useDoneClickButton } from '../../../../myHooks/useDoneClickButton';
import './style.scss';
import { CloseButton } from '../../../atoms/closeButton';
import { useCloseCollectionItemButton } from '../../../../myHooks/useCloseCollectionItemButton';

export const StockCardWindow = () => {
    const dispatch = useAppDispatch();
    const currentCard = useAppSelector(getCurrentCardState);
    const onDoneClickHandle = useDoneClickButton(currentCard);
    const isCurrentCardVisible = useAppSelector(getCurrentCardVisibilityState);
    const isAnswerVisible = useAppSelector(getAnswerVisibilityState);
    const closeCardWindow = useCloseCollectionItemButton();

    const onShowClickHandle= ()=> {
        dispatch(toggleAnswerVisibility())
    }

    return (  
    <>
        {isCurrentCardVisible && 
        <StyledCard>
            <CloseButton onClick={closeCardWindow} />
            <span className='card--title'>{currentCard.collectionItemTitle}</span>
            <ShowButton hasClicked={isAnswerVisible} onClick={onShowClickHandle}/>
            <div style={{width: '400px', minHeight: '500px'}}>
                <Answer isVisible={isAnswerVisible}>
                    {currentCard.collectionItemAnswer}
                </Answer>
            </div>
            <DoneButton onClick={onDoneClickHandle}/>
        </StyledCard>}
    </>
        
    )
}
