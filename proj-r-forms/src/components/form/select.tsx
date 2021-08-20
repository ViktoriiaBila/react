import React from 'react';
import { defaultCountryOption } from '../shared/formItem';

interface ISelectProps {
  title: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  option: Array<string>;
  invalid: boolean;
  invalidMessage: string;
}

export function Select(props: ISelectProps): JSX.Element {
  const options = props.option.map((value) => <option>{value}</option>);

  return (
    <label htmlFor={props.name}>
      <p>
        {props.title}
        {props.invalid && <span> * {props.invalidMessage}</span>}
      </p>
      <select
        name={props.name}
        value={props.value}
        onChange={(event) => {
          props.onChange(event);
        }}
      >
        <option>{defaultCountryOption}</option>
        {options}
      </select>
    </label>
  );
}
