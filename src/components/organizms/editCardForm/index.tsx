import React from "react";
import { Field, Form, Formik } from "formik";
import { FormInput } from "../../molecules/formInput";
import "./style.scss";
import { RADIO_BUTTON_NAME, RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";
import { CardRadioButtonsOrganizm } from "../radioButtonsOrganizm";
import { TextArea } from "../../molecules/textArea";
import { useAppSelector } from "../../../app/hooks";
import { getEditCardSelector } from "../../../store/reducers/editReducer";
import { useEditCard } from "../../../myHooks/collectionHooks/useEditCard";
import { cardFormValidationSchema} from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";

export const EditCardForm = () => {
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const [contextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.EDIT);
    const {_id, cardTitle, cardAnswer,cardCategory,cardColor} = useAppSelector(getEditCardSelector)
    const onEditCard = useEditCard(_id, onChangeLoadingStatus, openNotification as ((descriptionText: string) => void));

    return (
        <Formik 
            initialValues={{ 
                cardTitle: cardTitle, 
                cardAnswer: cardAnswer, 
                collectionItemCategory: cardCategory, 
                collectionItemColor: cardColor, 
                cardSelectInput: '', 
                categoryRadioButtons: RADIO_BUTTON_NAME.NO_CATEGORY,
                cardTags: '',
            }}
            validationSchema={cardFormValidationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={
                onEditCard
            }
        >
            {({errors, touched, validateField, values})=>{
                return(
                    <Form className='edit-card--form-item'>
                        <>
                            {contextHolder}
                            <FormInput 
                                type='text' 
                                name='cardTitle' 
                                labelValue='Change card title'
                            />
                                {errors.cardTitle && touched.cardTitle ? (
                                <ValidationErrorBox error={errors.cardTitle} />
                            ) : null}
                            <label className='form--label' htmlFor='textArea'>
                                Change your answer
                            </label>
                            <TextArea />
                            {errors.cardAnswer && touched.cardAnswer ? (
                                <ValidationErrorBox error={errors.cardAnswer} />
                            ) : null}
                            <CustomSpinner isLoading={isLoading} />
                            <Field name="categoryRadioButtons" component={CardRadioButtonsOrganizm} />
                            <button className='submit-item--button' type='submit' onClick={() => {
                                if (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY) {
                                    validateField('collectionItemCategory')
                                }
                                }}>
                                Save changes
                            </ button>
                        </>
                    </Form>
                )
            }}
        </ Formik>
    )
}
