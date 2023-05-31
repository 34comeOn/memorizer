import React from "react";
import { Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { useCreateNewCollection } from "../../../myHooks/collectionHooks/useCreateNewCollection";
import { FormInput } from "../../molecules/formInput";
import './style.scss';

export const NewCollectionForm = () => {
    const onCreateNewCollection = useCreateNewCollection();

    return (
        <Formik 
            initialValues={{ 
                title: '', 
                collectionColor: STOCK_COLLECTION_COLOR, 
            }}
            onSubmit={
                onCreateNewCollection
            }
        >
            {()=>{
                return(
                    <Form className='new-collection--form'>
                        <FormInput 
                            type='text' 
                            name='title' 
                            placeholder='' 
                            labelValue='Come up with title of your new collection'
                        />
                        <FormInput 
                            width='60px'
                            type='color' 
                            name='collectionColor' 
                            labelValue='You can choose color for collection cover'
                        />
                        <button className='submit--button' type='submit'>
                            Create collection
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}