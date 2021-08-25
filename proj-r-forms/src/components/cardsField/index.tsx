import React from 'react';
import { Card } from './card';

interface IFormValue {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
}

interface ICardsFieidProps {
  formValues: Array<IFormValue> | null;
}

export function CardsFieid(props: ICardsFieidProps): JSX.Element {
  const arrayCards =
    props.formValues !== null
      ? props.formValues.map((formvalue) => (
          <Card
            firstName={formvalue.firstName}
            lastName={formvalue.lastName}
            birthDate={formvalue.birthDate}
            country={formvalue.country}
          />
        ))
      : [];

  return <div>{arrayCards}</div>;
}
