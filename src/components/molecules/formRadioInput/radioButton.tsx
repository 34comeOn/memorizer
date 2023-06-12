import React from "react";

type TradioButton = {
    field: { name: string, value: string, onChange: ()=> void, onBlur: ()=> void },
    id: string,
    label: string,
    checked: boolean,
    // className,
    // ...props
}

export const RadioButton = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    checked,
    // className,
    // ...props
  }: TradioButton) => {
    return (
      <div>
        <input
          name={name}
          id={id}
          type="radio"
          value={id} // could be something else for output?
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
        //   className={classNames('radio-button')}
        //   {...props}
        />
        <label htmlFor={id}>
          {label}
        </label>
      </div>
    );
  };