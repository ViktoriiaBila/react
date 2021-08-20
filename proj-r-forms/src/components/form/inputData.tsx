import React from 'react';

interface IInputDataProps {
  title: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalid: boolean;
  invalidMessage: string;
}

export function InputData(props: IInputDataProps): JSX.Element {
  return (
    <label htmlFor={props.name}>
      <p>
        {props.title}
        {props.invalid && <span> * {props.invalidMessage}</span>}
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
