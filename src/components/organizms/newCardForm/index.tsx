import React from "react";
import { Field, Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { FormInput } from "../../molecules/formInput";
import { useCreateNewCard } from "../../../myHooks/collectionHooks/useCreateNewCard";
import "./style.scss";
import { RADIO_BUTTON_NAME } from "../../../constants/stringConstants";
import { CardRadioButtonsOrganizm } from "../radioButtonsOrganizm";
// import { TagInput } from "../../molecules/tagInput";
import { TextArea } from "../../molecules/textArea";

export const NewCardForm = () => {
    const onCreateNewCard = useCreateNewCard();

    return (
        <Formik 
            initialValues={{ 
                cardTitle: '', 
                cardAnswer: '', 
                collectionItemCategory: '', 
                collectionItemColor: STOCK_COLLECTION_COLOR, 
                cardSelectInput: '', 
                categoryRadioButtons: RADIO_BUTTON_NAME.NO_CATEGORY,
                cardTags: '',
            }}
            onSubmit={
                onCreateNewCard
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
                        <label className='form--label' htmlFor='textArea'>
                            Write down your answer
                        </label>
                        <TextArea />
                        <Field name="categoryRadioButtons" component={CardRadioButtonsOrganizm} />
                        {/* <Field name="cardTags" component={TagInput} /> */}
                        <button className='submit-item--button' type='submit'>
                            Create card
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}