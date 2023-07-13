import * as yup from 'yup';
import { 
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
    email: yup.string().email().required(''), 
    userName: yup
    .string()
    .required('')
    .min(MIN_LENGTH_NAME, NAME_MIN_LENGTH_WARNING)
    .matches(NAME_REGEX, NAME_REGEX_WARNING),
    password: yup
    .string()
    .required('')
    .min(MIN_LENGTH_PASSWORD, PASSWORD_MIN_LENGTH_WARNING)
    .max(MAX_LENGTH_PASSWORD, PASSWORD_MAX_LENGTH_WARNING)
    .matches(PASSWORD_REGEX, PASSWORD_WRONG_SYMBOLS_WARNING),
    confirmPassword: yup
    .string()
    .required('')
    .oneOf([yup.ref('password')], PASSWORD_MATCH_WARNING)
  });