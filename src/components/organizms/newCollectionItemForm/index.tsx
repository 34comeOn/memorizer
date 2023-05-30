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
                newFilterColor: STOCK_COLLECTION_COLOR, 
            }}
            onSubmit={
                onCreateNewItem
            }
        >
            {()=>{
                return(
                    <Form className='new-collection--form'>
                        <FormInput 
                            type='text' 
                            name='cardTitle' 
                            placeholder='' 
                            labelValue='Come up with title of your new card'
                        />
                        <FormInput 
                            width='60px'
                            type='color' 
                            name='newFilterColor' 
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