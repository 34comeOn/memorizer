import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { FormInput } from "../../molecules/formInput";
import { useCreateNewItem } from "../../../myHooks/collectionHooks/useCreateNewItem";
import "./style.scss";
import { RadioFormContainer } from "../radioFormContainer";
import { RADIO_BUTTON_LABEL_TEXT, RADIO_BUTTON_NAME } from "../../../constants/stringConstants";
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import { CategoryItemSelect } from "../../molecules/categoryItemSelect";

export const NewCollectionItemForm = () => {
    const onCreateNewItem = useCreateNewItem();
    const SecondRadioButtonContent = useRef(null);
    const ThirdRadioButtonContent = useRef(null);

    const [value, setValue] = useState(RADIO_BUTTON_NAME.NO_CATEGORY);
    const [isSecondRadioContentShown, setIsSecondRadioContentShown] = useState(false);
    const [isThirdRadioContentShown, setIsThirdRadioContentShown] = useState(false);

    const changeValue= (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
     }

    return (
        <Formik 
            initialValues={{ 
                cardTitle: '', 
                cardAnswer: '', 
                collectionItemCategory: '', 
                collectionItemColor: STOCK_COLLECTION_COLOR, 
                cardSelectInput: '', 
                categoryButtons: '',
            }}
            onSubmit={
                onCreateNewItem
            }
        >
            {()=>{
                return(
                    <Form className='new-collection--form-item'>
                        <FormInput 
                            type='text' 
                            name='cardTitle' 
                            placeholder='How to say "Every moment is a treasure!" in Spanish?' 
                            labelValue='Come up with title for card'
                        />
                        <FormInput 
                            type='text' 
                            name='cardAnswer' 
                            placeholder='!Cada momento es un tesoro!' 
                            labelValue='Write down your answer'
                        />

                        <div style={{marginLeft: '-60px'}}>
                            <RadioFormContainer 
                                labelText={RADIO_BUTTON_LABEL_TEXT.NO_CATEGORY} 
                                labelFor={RADIO_BUTTON_NAME.NO_CATEGORY} 
                                stateValue={value} 
                                changeValue={changeValue}
                                name='categoryButtons'
                            />
                            <RadioFormContainer 
                                labelText={RADIO_BUTTON_LABEL_TEXT.SET_CATEGORY}  
                                labelFor={RADIO_BUTTON_NAME.SET_CATEGORY} 
                                stateValue={value} 
                                changeValue={changeValue}
                                name='categoryButtons'
                            >
                                <Transition
                                    nodeRef={SecondRadioButtonContent} 
                                    in={RADIO_BUTTON_NAME.SET_CATEGORY === value} 
                                    timeout={600}
                                    onEntering={()=> setIsSecondRadioContentShown(true)}
                                    onExited={()=> setIsSecondRadioContentShown(false)}
                                >
                                    {state => (
                                        (isSecondRadioContentShown) &&  <div 
                                            ref={SecondRadioButtonContent}
                                            className={`set-category--container-second ${state}`}
                                            >
                                                <FormInput 
                                                    type='text' 
                                                    name='collectionItemCategory' 
                                                    placeholder='phrases' 
                                                    labelValue='New category title'
                                                    disabled={RADIO_BUTTON_NAME.SET_CATEGORY !== value}
                                                /> 
                                                <FormInput 
                                                    width='60px'
                                                    type='color' 
                                                    name='collectionItemColor' 
                                                    labelValue='Choose category color'
                                                    disabled={RADIO_BUTTON_NAME.SET_CATEGORY !== value}
                                                />
                                        </div>
                                    )}
                                </Transition>
                            </ RadioFormContainer>
                            <RadioFormContainer 
                                labelText={RADIO_BUTTON_LABEL_TEXT.CHOOSE_CATEGORY} 
                                labelFor={RADIO_BUTTON_NAME.CHOOSE_CATEGORY} 
                                stateValue={value} 
                                changeValue={changeValue}
                                name='categoryButtons' 
                            >
                                <Transition
                                    nodeRef={ThirdRadioButtonContent} 
                                    in={RADIO_BUTTON_NAME.CHOOSE_CATEGORY === value} 
                                    timeout={600}
                                    onEntering={()=> setIsThirdRadioContentShown(true)}
                                    onExited={()=> setIsThirdRadioContentShown(false)}
                                >
                                    {state => (
                                        (isThirdRadioContentShown) &&  <div 
                                            ref={ThirdRadioButtonContent}
                                            className={`set-category--container-third ${state}`}
                                            >
                                                <Field name="cardSelectInput" component={CategoryItemSelect} />
                                        </div>
                                    )}
                                </Transition>
                            </ RadioFormContainer>
                        </div>
                        <button className='submit-item--button' type='submit'>
                            Create card
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}