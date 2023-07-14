import React from "react";
import { Field, Form, Formik } from "formik";
import { FormInput } from "../../molecules/formInput";
import "./style.scss";
import { RADIO_BUTTON_NAME } from "../../../constants/stringConstants";
import { CardRadioButtonsOrganizm } from "../radioButtonsOrganizm";
import { TextArea } from "../../molecules/textArea";
import { useAppSelector } from "../../../app/hooks";
import { getEditCardSelector } from "../../../store/reducers/editReduser";
import { useEditCard } from "../../../myHooks/collectionHooks/useEditCard";
import { cardFormValidationSchema} from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";

export const EditCardForm = () => {
    const {_id, cardTitle, cardAnswer,cardCategory,cardColor} = useAppSelector(getEditCardSelector)
    const onEditCard = useEditCard(_id);

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
                        <Field name="categoryRadioButtons" component={CardRadioButtonsOrganizm} />
                        <button className='submit-item--button' type='submit' onClick={() => {
                            if (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY) {
                                validateField('collectionItemCategory')
                            }
                            }}>
                            Save changes
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}
