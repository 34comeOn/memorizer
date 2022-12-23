import React, { useState } from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';

export const StockCard = () => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const [isDivVisible, setIsDivVisible] = useState(false);

    const onShowClickHandle= ()=> {
        setIsAnswerVisible(!isAnswerVisible)
    }
    const onDoneClickHandle= async()=> {
        const result = await fetch('http://localhost:3001/some')
        console.log(result)
        setIsDivVisible(!isDivVisible)
        const json = await result.json()
        console.log(json)
    }

    return (
       
        
        <StyledCard>
            <h2>Название карточки</h2>
            <ShowButton onClick={onShowClickHandle}/>
            <div style={{width: '400px', height: '500px'}}>
                <Answer isVisible={isAnswerVisible}>
                    {'Ответ'}
                </Answer>
            </div>
            <DoneButton onClick={onDoneClickHandle}/>
            {isDivVisible && <div style={{width: '400px', height: '500px', backgroundColor: 'red'}}>

            </div>}
        </StyledCard>
        
       
    )
}