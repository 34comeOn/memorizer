import React from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAnswerVisibilityState, getCurrentCardState, toggleAnswerVisibility } from '../../../../store/reducers/cardWindowReduser';
import { useDoneClickButton } from '../../../../myHooks/useDoneClickButton';

export const StockCardWindow = () => {
    const dispatch = useAppDispatch();
    const currentCard = useAppSelector(getCurrentCardState);
    const isAnswerVisible = useAppSelector(getAnswerVisibilityState);
    const onDoneClickHandle = useDoneClickButton(currentCard);

    const onShowClickHandle= ()=> {
        dispatch(toggleAnswerVisibility())
    }

    return (  
    <>
        {(currentCard._id !== '0') && 
        <StyledCard>
            <h2>{currentCard.title}</h2>
            <ShowButton hasClicked={isAnswerVisible} onClick={onShowClickHandle}/>
            <div style={{width: '400px', minHeight: '500px'}}>
                <Answer isVisible={isAnswerVisible}>
                    {currentCard.answer}
                </Answer>
            </div>
            <DoneButton onClick={onDoneClickHandle}/>
        </StyledCard>}
    </>
        
    )
}
