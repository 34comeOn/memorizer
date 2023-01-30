import React, { useState } from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { spreadCards, Tcard } from '../../../../utils/utils';

// const obj = {
//     id: 75,
// }

export const StockCard = ({card, handleDoneClick}: {card: Tcard, handleDoneClick: ()=> void}) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    console.log(card)
    const onShowClickHandle= ()=> {
        setIsAnswerVisible(!isAnswerVisible)
    }
    const onDoneClickHandle = async()=> {
        fetch('http://localhost:3002/api/repeat',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                id: card['_id'],
                timesBeenRepeated: card.timesBeenRepeated + 1,
                repeatedTimeStamp: Date.now(),
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

        // fetch('http://localhost:3002/api/post-question',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json;charset=utf-8'},
        //     body: JSON.stringify(obj)
        // })

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
