import React from 'react';
import Select from 'react-select';
import { FieldProps } from 'formik';
import { StyledErrorMessage } from './styledErrorMessage';
import './style.scss';
import { useAppSelector } from '../../../app/hooks';
import { getCurrentCollectionSelector } from '../../../store/reducers/userCollectionsReduser';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

export const CategoryInput = ({ field,form: { touched, errors, setFieldValue },...props}: FieldProps) => {
  const existingCategoriesInCurrrentCollection = useAppSelector(getCurrentCollectionSelector).collectionСategories;

  return (
    <>
      <Select
        defaultValue={existingCategoriesInCurrrentCollection??[0]}
        className='category-item--select'
        {...field}
        {...props}
        options={existingCategoriesInCurrrentCollection}
        value={(existingCategoriesInCurrrentCollection ? existingCategoriesInCurrrentCollection.find(option => option.value === field.value) : '') as any}
        onChange={option => setFieldValue(field.name, (option as any).value)}
      />
      {touched[field.name] && errors[field.name] && (
        <StyledErrorMessage>something went wrong</StyledErrorMessage>
      )}
    </>
  )
}