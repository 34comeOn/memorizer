import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { FieldProps } from 'formik';

export interface CardOption {
    readonly value: string;
    readonly label: string;
}

const newOptions: readonly any[] = [
    { value: 'firstValue', label: 'first' },
    { value: 'secondValue', label: 'second' },
    { value: 'thirdValue', label: 'third' }
]

export const TagInput = ({field,form,...props}: FieldProps) => {
console.log(props)
console.log(field)

    const getValue = () => {
        newOptions.find(test => test.value === field.value);
    };

  return (
    <div>
        <label style={{marginTop: '30px', display: 'block'}} className='form--label'>
            Create & add tags for current card
        </label>
      <CreatableSelect 
        className='category-item--select'
        isMulti 
        {...field}
        {...props}
        options={newOptions} 
        onChange={e => form.setFieldValue("cardTags", e)}
        value={getValue()}
      />
    </div>
  )
}