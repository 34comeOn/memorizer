import * as yup from 'yup';
import { 
    EMAIL_INVALID_WARNING,
    FIELD_REQUIRED_WARNING,
    LOGIN_OR_PASSWORD_WRONG_WARNING,
    MAX_LENGTH_TITLE,
    MAX_LENGTH_PASSWORD, 
    MIN_LENGTH_NAME, 
    MIN_LENGTH_PASSWORD, 
    MIN_LENGTH_NAME_WARNING, 
    NAME_REGEX, 
    NAME_REGEX_WARNING, 
    PASSWORD_MATCH_WARNING, 
    PASSWORD_MAX_LENGTH_WARNING, 
    PASSWORD_MIN_LENGTH_WARNING, 
    PASSWORD_REGEX, 
    PASSWORD_WRONG_SYMBOLS_WARNING, 
    TITLE_REGEX,
    TITLE_REGEX_WARNING,
    MAX_ANSWER_LENGTH,
    MAX_LENGTH_ANSWER_WARNING,
    MAX_LENGTH_TITLE_WARNING,
    TEXT_AREA_REGEX,
    TEXT_AREA_REGEX_WARNING,
    PASSWORD_PROHIBITED_REGEX,
    PASSWORD_PROHIBITED_SYMBOLS_WARNING} from '../constants/validationConstants';

export const collectionFormValidationSchema = yup.object().shape({
    title: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .max(MAX_LENGTH_TITLE, MAX_LENGTH_TITLE_WARNING)
    .matches(TITLE_REGEX, TITLE_REGEX_WARNING),
    collectionColor: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
});

export const cardFormValidationSchema = yup.object().shape({
    cardTitle: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .max(MAX_LENGTH_TITLE, MAX_LENGTH_TITLE_WARNING)
    .matches(TITLE_REGEX, TITLE_REGEX_WARNING),
    cardAnswer: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .max(MAX_ANSWER_LENGTH, MAX_LENGTH_ANSWER_WARNING)
    .matches(TEXT_AREA_REGEX, TEXT_AREA_REGEX_WARNING),
    collectionItemColor: yup
    .string(),
    cardSelectInput: yup
    .string(),
    categoryRadioButtons: yup
    .string(),
    cardTags: yup
    .string(),
});

export const forgotPasswordFormValidationSchema = yup.object().shape({
    email: yup.string().email(EMAIL_INVALID_WARNING).required(FIELD_REQUIRED_WARNING), 
});

export const signInFormValidationSchema = yup.object().shape({
    email: yup.string().email(EMAIL_INVALID_WARNING).required(FIELD_REQUIRED_WARNING), 
    password: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .matches(PASSWORD_REGEX, LOGIN_OR_PASSWORD_WRONG_WARNING),
});

export const signUpFormValidationSchema = yup.object().shape({
    email: yup.string().email(EMAIL_INVALID_WARNING).required(FIELD_REQUIRED_WARNING), 
    userName: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .min(MIN_LENGTH_NAME, MIN_LENGTH_NAME_WARNING)
    .matches(NAME_REGEX, NAME_REGEX_WARNING),
    password: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .min(MIN_LENGTH_PASSWORD, PASSWORD_MIN_LENGTH_WARNING)
    .max(MAX_LENGTH_PASSWORD, PASSWORD_MAX_LENGTH_WARNING)
    .matches(PASSWORD_REGEX, PASSWORD_WRONG_SYMBOLS_WARNING)
    .matches(PASSWORD_PROHIBITED_REGEX, PASSWORD_PROHIBITED_SYMBOLS_WARNING),
    confirmPassword: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .oneOf([yup.ref('password')], PASSWORD_MATCH_WARNING)
});