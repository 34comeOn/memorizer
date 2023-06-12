import React, { useState } from "react";
import { Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { FormInput } from "../../molecules/formInput";
import { useCreateNewItem } from "../../../myHooks/collectionHooks/useCreateNewItem";
import "./style.scss";
import { RadioFormContainer } from "../radioFormContainer";
import { RADIO_BUTTON_LABEL_TEXT, RADIO_BUTTON_NAME } from "../../../constants/stringConstants";

export const NewCollectionItemForm = () => {
    const onCreateNewItem = useCreateNewItem();

    const [value, setValue] = useState(RADIO_BUTTON_NAME.NO_CATEGORY);

    const changeValue= (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
     }

    return (
        <Formik 
            initialValues={{ 
                cardTitle: '', 
                cardAnswer: '', 
                filterTitle: '', 
                filterColor: STOCK_COLLECTION_COLOR, 
                categoryRadioButtons: String('race'),
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
                        <FormInput 
                            type='text' 
                            name='filterTitle' 
                            placeholder='phrases' 
                            labelValue='Create tag for card'
                        />
                        <div>
                            <RadioFormContainer 
                                labelText={RADIO_BUTTON_LABEL_TEXT.NO_CATEGORY} 
                                labelFor={RADIO_BUTTON_NAME.NO_CATEGORY} 
                                stateValue={value} 
                                changeValue={changeValue}
                            />
                            <RadioFormContainer 
                                labelText={RADIO_BUTTON_LABEL_TEXT.SET_CATEGORY}  
                                labelFor={RADIO_BUTTON_NAME.SET_CATEGORY} 
                                stateValue={value} 
                                changeValue={changeValue}
                            />
                            <RadioFormContainer 
                                labelText={RADIO_BUTTON_LABEL_TEXT.CHOOSE_CATEGORY} 
                                labelFor={RADIO_BUTTON_NAME.CHOOSE_CATEGORY} 
                                stateValue={value} 
                                changeValue={changeValue}
                            />
                        </div>
                        <FormInput 
                            width='60px'
                            type='color' 
                            name='filterColor' 
                            labelValue='You can choose filter color'
                        />
                        <button className='submit--button' type='submit'>
                            Create card
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}