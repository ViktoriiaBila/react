import React from 'react';

interface IInputAgreeProps {
  title: string;
  type: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputAgree(props: IInputAgreeProps): JSX.Element {
  return (
    <label htmlFor={props.name}>
      <p>{props.title}</p>
      <input
        type={props.type}
        name={props.name}
        checked={props.checked}
        onChange={(event) => props.onChange(event)}
      />
    </label>
  );
}
