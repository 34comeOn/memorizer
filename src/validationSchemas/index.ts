import * as yup from 'yup';
import { 
    EMAIL_INVALID_WARNING,
    FIELD_REQUIRED_WARNING,
    LOGIN_OR_PASSWORD_WRONG_WARNING,
    MAX_COLLECTION_TITLE_LENGTH,
    MAX_LENGTH_PASSWORD, 
    MIN_LENGTH_NAME, 
    MIN_LENGTH_PASSWORD, 
    NAME_MIN_LENGTH_WARNING, 
    NAME_REGEX, 
    NAME_REGEX_WARNING, 
    PASSWORD_MATCH_WARNING, 
    PASSWORD_MAX_LENGTH_WARNING, 
    PASSWORD_MIN_LENGTH_WARNING, 
    PASSWORD_REGEX, 
    PASSWORD_WRONG_SYMBOLS_WARNING, 
    TITLE_REGEX,
    TITLE_REGEX_WARNING} from '../constants/validationConstants';

export const newCollectionFormValidationSchema = yup.object().shape({
    title: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .max(MAX_COLLECTION_TITLE_LENGTH, NAME_MIN_LENGTH_WARNING)
    .matches(TITLE_REGEX, TITLE_REGEX_WARNING),
    collectionColor: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
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
    .min(MIN_LENGTH_NAME, NAME_MIN_LENGTH_WARNING)
    .matches(NAME_REGEX, NAME_REGEX_WARNING),
    password: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .min(MIN_LENGTH_PASSWORD, PASSWORD_MIN_LENGTH_WARNING)
    .max(MAX_LENGTH_PASSWORD, PASSWORD_MAX_LENGTH_WARNING)
    .matches(PASSWORD_REGEX, PASSWORD_WRONG_SYMBOLS_WARNING),
    confirmPassword: yup
    .string()
    .required(FIELD_REQUIRED_WARNING)
    .oneOf([yup.ref('password')], PASSWORD_MATCH_WARNING)
});