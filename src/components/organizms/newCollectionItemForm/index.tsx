import React from "react";
import { Field, Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { FormInput } from "../../molecules/formInput";
import { useCreateNewItem } from "../../../myHooks/collectionHooks/useCreateNewItem";
import "./style.scss";
import { RADIO_BUTTON_NAME } from "../../../constants/stringConstants";
import { CardRadioButtonsOrganizm } from "../radioButtonsOrganizm";

export const NewCollectionItemForm = () => {
    const onCreateNewItem = useCreateNewItem();

    return (
        <Formik 
            initialValues={{ 
                cardTitle: '', 
                cardAnswer: '', 
                collectionItemCategory: '', 
                collectionItemColor: STOCK_COLLECTION_COLOR, 
                cardSelectInput: '', 
                categoryRadioButtons: RADIO_BUTTON_NAME.NO_CATEGORY,
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
                        <Field name="categoryRadioButtons" component={CardRadioButtonsOrganizm} />
                        <button className='submit-item--button' type='submit'>
                            Create card
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}