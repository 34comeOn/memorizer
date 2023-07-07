import React from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAnswerVisibilitySelector, getCurrentCardSelector, toggleAnswerVisibility } from '../../../../store/reducers/cardWindowReduser';
import { useDoneClickButton } from '../../../../myHooks/useDoneClickButton';
import './style.scss';

export const StockCardWindow = () => {
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
            <DoneButton onClick={onDoneClickHandle}/>
        </StyledCard>
    )
}
