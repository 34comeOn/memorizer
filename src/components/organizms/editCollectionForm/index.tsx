import React from "react";
import { Form, Formik } from "formik";
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { useAppSelector } from "../../../app/hooks";
import { getEditCollectionSelector } from "../../../store/reducers/editReduser";
import { useEditCollection } from "../../../myHooks/collectionHooks/useEditCollection";
import { collectionFormValidationSchema } from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";

export const EditCollectionForm = () => {
    const {_id, title, color} = useAppSelector(getEditCollectionSelector);
    const onEditCollection = useEditCollection(_id);

    return (
        <Formik 
            initialValues={{ 
                title: title, 
                collectionColor: color, 
            }}
            validationSchema={collectionFormValidationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={
                onEditCollection
            }
        >
            {({errors, touched})=>{
                return(
                    <Form className='edit-collection--form'>
                        <FormInput 
                            type='text' 
                            name='title' 
                            placeholder='' 
                            labelValue='Change collection title'
                        />
                        {errors.title && touched.title ? (
                            <ValidationErrorBox error={errors.title} />
                        ) : null}
                        <FormInput 
                            width='60px'
                            type='color' 
                            name='collectionColor' 
                            labelValue='Change collection color'
                        />
                        <button className='edit-submit--button' type='submit'>
                            Save changes
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}