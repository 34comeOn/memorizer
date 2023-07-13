import * as yup from 'yup';
import { 
    EMAIL_INVALID_WARNING,
    FIELD_REQUIRED_WARNING,
    MAX_LENGTH_PASSWORD, 
    MIN_LENGTH_NAME, 
    MIN_LENGTH_PASSWORD, 
    NAME_MIN_LENGTH_WARNING, 
    NAME_REGEX, NAME_REGEX_WARNING, 
    PASSWORD_MATCH_WARNING, 
    PASSWORD_MAX_LENGTH_WARNING, 
    PASSWORD_MIN_LENGTH_WARNING, 
    PASSWORD_REGEX, 
    PASSWORD_WRONG_SYMBOLS_WARNING } from '../constants/validationConstants';

export const signInFormValidationSchema = yup.object().shape({
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