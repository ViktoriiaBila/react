import React from 'react';
import { EFormItemTitle } from '../shared/formItem';

interface ICardProps {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
}

export function Card(props: ICardProps): JSX.Element {
  return (
    <div>
      <div>
        {EFormItemTitle.firstName}
        <p>{props.firstName}</p>
      </div>
      <div>
        {EFormItemTitle.lastName}
        <p>{props.lastName}</p>
      </div>
      <div>
        {EFormItemTitle.birthDate}
        <p>{props.birthDate}</p>
      </div>
      <div>
        {EFormItemTitle.country}
        <p>{props.country}</p>
      </div>
    </div>
  );
}
