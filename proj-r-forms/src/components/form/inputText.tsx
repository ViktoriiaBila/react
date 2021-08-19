import React from 'react';

interface IInputTextProps {
  title: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalid: boolean;
}

export function InputText(props: IInputTextProps): JSX.Element {
  return (
    <label htmlFor={props.name}>
      <p>
        {props.title}
        {props.invalid && <span>* must be filled</span>}
      </p>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(event) => {
          props.onChange(event);
        }}
      />
    </label>
  );
}
