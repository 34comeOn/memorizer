import React from "react";
import { Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { useCreateNewCollection } from "../../../myHooks/collectionHooks/useCreateNewCollection";
import { FormInput } from "../../molecules/formInput";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { collectionFormValidationSchema } from "../../../validationSchemas";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { CustomSpinner } from "../../atoms/customSpinner";
import { RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";
import './style.scss';

export const NewCollectionForm = () => {
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const [contextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.CREATE_NEW_COLLECTION)
    
    const onCreateNewCollection = useCreateNewCollection(onChangeLoadingStatus, openNotification as ((descriptionText: string) => void));

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
                        <>
                            {contextHolder}
                            <FormInput 
                                type='text' 
                                name='title' 
                                placeholder='' 
                                labelValue='Come up with title of your new collection'
                            />
                            {errors.title && touched.title ? (
                                <ValidationErrorBox error={errors.title} />
                            ) : null}
                            <CustomSpinner isLoading={isLoading} />
                            <FormInput 
                                width='60px'
                                type='color' 
                                name='collectionColor' 
                                labelValue='You can choose color for collection cover'
                            />
                            <button className='submit--button' type='submit'>
                                Create collection
                            </ button>
                        </>
                    </Form>
                )
            }}
        </ Formik>
    )
}