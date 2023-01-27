import React, { useState } from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { spreadCards, Tcard } from '../../../../utils/utils';

export const StockCard = ({card, handleDoneClick}: {card: Tcard, handleDoneClick: ()=> void}) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    console.log(card)
    const onShowClickHandle= ()=> {
        setIsAnswerVisible(!isAnswerVisible)
    }
    const onDoneClickHandle = async()=> {
        fetch('http://localhost:3002/api/repeat',{
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                repeatedTimeStamp: Date.now(),
                id: card['_id']
            })
        })
        .then(res => res.json())
        .then(
          (result) => {
            spreadCards(typeof result === 'string'? JSON.parse(result): result)
            console.log(result)
          },
          (error) => {
            alert(error);
          }
        )
        ;

        handleDoneClick();
    }

    return (  
        <StyledCard>
            <h2>{card.title}</h2>
            <ShowButton hasClicked={isAnswerVisible} onClick={onShowClickHandle}/>
            <div style={{width: '400px', minHeight: '500px'}}>
                <Answer isVisible={isAnswerVisible}>
                    {card.answer}
                </Answer>
            </div>
            <DoneButton onClick={onDoneClickHandle}/>
        </StyledCard>
    )
}
