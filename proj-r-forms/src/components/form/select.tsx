import React from 'react';

interface ISelectProps {
  title: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  option: Array<string>;
}

export function Select(props: ISelectProps): JSX.Element {
  const options = props.option.map((value) => <option>{value}</option>);

  return (
    <label htmlFor={props.name}>
      <p>{props.title}</p>
      <select
        name={props.name}
        value={props.value}
        onChange={(event) => {
          props.onChange(event);
        }}
      >
        {options}
      </select>
    </label>
  );
}
