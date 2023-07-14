import React from "react";
import { Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { useCreateNewCollection } from "../../../myHooks/collectionHooks/useCreateNewCollection";
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { collectionFormValidationSchema } from "../../../validationSchemas";

export const NewCollectionForm = () => {
    const onCreateNewCollection = useCreateNewCollection();

    return (
        <Formik 
            initialValues={{ 
                title: '', 
                collectionColor: STOCK_COLLECTION_COLOR, 
            }}
            validationSchema={collectionFormValidationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={
                onCreateNewCollection
            }
        >
            {({errors, touched})=>{
                return(
                    <Form className='new-collection--form'>
                        <FormInput 
                            type='text' 
                            name='title' 
                            placeholder='' 
                            labelValue='Come up with title of your new collection'
                        />
                        {errors.title && touched.title ? (
                            <ValidationErrorBox error={errors.title} />
                        ) : null}
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