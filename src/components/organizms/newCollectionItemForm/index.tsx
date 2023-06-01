import React from "react";
import { Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { FormInput } from "../../molecules/formInput";
import { useCreateNewItem } from "../../../myHooks/collectionHooks/useCreateNewItem";

export const NewCollectionItemForm = () => {
    const onCreateNewItem = useCreateNewItem();

    return (
        <Formik 
            initialValues={{ 
                cardTitle: '', 
                cardAnswer: '', 
                filterTitle: '', 
                filterColor: STOCK_COLLECTION_COLOR, 
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
                            labelValue='Come up with title or question'
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
                            placeholder='Spanish' 
                            labelValue='Create tag for card'
                        />
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