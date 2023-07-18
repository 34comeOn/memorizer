import React from "react";
import { Form, Formik } from "formik";
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { useAppSelector } from "../../../app/hooks";
import { getEditCollectionSelector } from "../../../store/reducers/editReducer";
import { useEditCollection } from "../../../myHooks/collectionHooks/useEditCollection";
import { collectionFormValidationSchema } from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";

export const EditCollectionForm = () => {
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const {_id, title, color} = useAppSelector(getEditCollectionSelector);
    const onEditCollection = useEditCollection(_id, onChangeLoadingStatus);

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
                        <CustomSpinner isLoading={isLoading} />
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