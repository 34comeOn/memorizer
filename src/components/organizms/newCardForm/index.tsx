import React from "react";
import { Field, Form, Formik } from "formik";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { FormInput } from "../../molecules/formInput";
import { useCreateNewCard } from "../../../myHooks/collectionHooks/useCreateNewCard";
import "./style.scss";
import { RADIO_BUTTON_NAME, RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";
import { CardRadioButtonsOrganizm } from "../radioButtonsOrganizm";
// import { TagInput } from "../../molecules/tagInput";
import { TextArea } from "../../molecules/textArea";
import { cardFormValidationSchema } from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";

export const NewCardForm = () => {
    const [contextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.CREATE_NEW_CARD);
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const onCreateNewCard = useCreateNewCard(onChangeLoadingStatus, openNotification as ((descriptionText: string) => void));

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
            validationSchema={cardFormValidationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={
                onCreateNewCard
            }
        >
            {({errors, touched, validateField, values})=>{
                return(
                    <Form className='new-collection--form-item'>
                        <>
                            {contextHolder}
                            <FormInput 
                                type='text' 
                                name='cardTitle' 
                                placeholder='How to say "Every moment is a treasure!" in Spanish?' 
                                labelValue='Come up with title for card'
                            />
                            {errors.cardTitle && touched.cardTitle ? (
                                <ValidationErrorBox error={errors.cardTitle} />
                                ) : null}
                            <label className='form--label' htmlFor='textArea'>
                                Write down your answer
                            </label>
                            <TextArea />
                            {errors.cardAnswer && touched.cardAnswer ? (
                                <ValidationErrorBox error={errors.cardAnswer} />
                                ) : null}
                            <CustomSpinner isLoading={isLoading} />
                            <Field name="categoryRadioButtons" component={CardRadioButtonsOrganizm} />
                            {/* <Field name="cardTags" component={TagInput} /> */}
                            <button className='submit-item--button' type='submit' onClick={() => {
                                if (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY) {
                                    validateField('collectionItemCategory')
                                }
                                }}>
                                Create card
                            </ button>
                        </>
                    </Form>
                )
            }}
        </ Formik>
    )
}