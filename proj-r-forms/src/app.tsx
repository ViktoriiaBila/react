import React, { useState } from 'react';
import { Form } from './components/form';
import { CardsFieid } from './components/cardsField';

interface IFormValue {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
}

export function App(): JSX.Element {
  return <Wrapper />;
}

export function Wrapper(): JSX.Element {
  const [formValues, setFormValues] = useState<Array<IFormValue> | null>(null);

  return (
    <div>
      <Form setFormValues={setFormValues} />
      <CardsFieid formValues={formValues} />
    </div>
  );
}
