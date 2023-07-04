import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { FieldProps } from 'formik';
import { useAppSelector } from '../../../app/hooks';
import { getCurrentCollectionSelector } from '../../../store/reducers/userCollectionsReduser';

export interface CardOption {
    readonly value: string;
    readonly label: string;
}

const preventErrorValue: readonly any[] = [];

export const TagInput = ({field,form,...props}: FieldProps) => {

  const existingTagsInCurrrentCollection = useAppSelector(getCurrentCollectionSelector).collectionTags;

  const getValue = () => {
    (existingTagsInCurrrentCollection? existingTagsInCurrrentCollection: []).find(item => item.value === field.value);
  };

  return (
    <>
      <label style={{marginTop: '30px', display: 'block'}} className='form--label'>
          Create & add tags for current card
      </label>
      <CreatableSelect 
        className='category-item--select'
        isMulti 
        {...field}
        {...props}
        options={existingTagsInCurrrentCollection || preventErrorValue} 
        onChange={e => form.setFieldValue("cardTags", e)}
        value={getValue()}
      />
    </>
  )
}