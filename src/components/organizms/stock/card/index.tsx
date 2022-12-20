import React, { useState } from 'react';
import { DoneButton } from '../../../atoms/doneButton';
import { ShowButton } from '../../../atoms/showButton';
import { StyledCard } from './styledCard';
import { Answer } from '../../../atoms/answer';
import { dataBase } from '../../../../mock/mockData';

export const StockCard = () => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const onShowClickHandle= ()=> {
        setIsAnswerVisible(!isAnswerVisible)
    }
    const onDoneClickHandle= ()=> {
        alert('Done!');
    }

    return (
        <StyledCard>
            <h2>{dataBase[0].title}</h2>
            <ShowButton onClick={onShowClickHandle}/>
            <div style={{width: '400px', height: '500px'}}>
                <Answer isVisible={isAnswerVisible}>
                    {dataBase[0].answer}
                </Answer>
            </div>
            <DoneButton onClick={onDoneClickHandle}/>
        </StyledCard>
    )
}