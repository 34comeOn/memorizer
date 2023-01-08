import React, { useState } from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { Tcard } from '../../../../utills/utills';

export const StockCard = ({card}: {card: Tcard}) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const onShowClickHandle= ()=> {
        setIsAnswerVisible(!isAnswerVisible)
    }
    const onDoneClickHandle= async()=> {
        fetch('http://localhost:3002/api/repeat',{
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                timeStamp: Date.now(),
                cardId: card.id
            })
        })
    }

    return (  
        <StyledCard>
            <h2>{card.title}</h2>
            <ShowButton onClick={onShowClickHandle}/>
            <div style={{width: '400px', height: '500px'}}>
                <Answer isVisible={isAnswerVisible}>
                    {card.answer}
                </Answer>
            </div>
            <DoneButton onClick={onDoneClickHandle}/>
        </StyledCard>
    )
}