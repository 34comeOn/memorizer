import React from 'react';
import Select from 'react-select';
import { FieldProps } from 'formik';
import { StyledErrorMessage } from './styledErrorMessage';
import './style.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const CategoryInput = ({
  field,
  form: { touched, errors, setFieldValue },
  ...props
}: FieldProps) => {

  return (
    <div>
      <Select
        defaultValue={options[0]}
        className='category-item--select'
        {...field}
        {...props}
        options={options}
        value={(options ? options.find(option => option.value === field.value) : '') as any}
        onChange={option => setFieldValue(field.name, (option as any).value)}
      />
      {touched[field.name] && errors[field.name] && (
        <StyledErrorMessage>something went wrong</StyledErrorMessage>
      )}
    </div>
  )
}