import React, { useState } from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { 
    spreadCollectionData, 
    } from '../../../../utils/utils';
import { useAppSelector } from '../../../../app/hooks';
import { getCurrentCardState } from '../../../../store/reducers/cardWindowReduser';

// const obj = {
//     id: 75,
// }

export const StockCardWindow = () => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const currentCard = useAppSelector(getCurrentCardState);
    
    const onShowClickHandle= ()=> {
        setIsAnswerVisible(!isAnswerVisible)
    }
    const onDoneClickHandle = async()=> {
        fetch('http://localhost:3002/api/repeat',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                id: currentCard['_id'],
                timesBeenRepeated: currentCard.timesBeenRepeated + 1,
                repeatedTimeStamp: Date.now(),
            })
        })
        .then(res => res.json())
        .then(
          (result) => {
            spreadCollectionData(typeof result === 'string'? JSON.parse(result): result)
            
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
