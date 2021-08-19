import React, { useEffect, useState } from 'react';
import { InputText } from './inputText';
import { InputAgree } from './inputAgree';
import { Select } from './select';

interface IFormItems {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  agree: boolean;
}

export function Form(): JSX.Element {
  const [formItems, setFormItems] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    country: 'Ukraine',
    agree: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    birthDate: false,
    agree: false,
  });

  const textInputs = [
    {
      title: 'Name:',
      type: 'text',
      name: 'firstName',
      value: formItems.firstName,
      invalid: errors.firstName,
    },
    {
      title: 'Surname:',
      type: 'text',
      name: 'lastName',
      value: formItems.lastName,
      invalid: errors.lastName,
    },
    {
      title: 'BirthDate:',
      type: 'date',
      name: 'birthDate',
      value: formItems.birthDate,
      invalid: errors.birthDate,
    },
  ];

  const formItemsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { type, name } = event.target;
    const value =
      type === 'checkbox'
        ? (event as React.ChangeEvent<HTMLInputElement>).target.checked
        : event.target.value;

    setFormItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    setErrors({
      firstName: false,
      lastName: false,
      birthDate: false,
      agree: false,
    });

    if (!formItems.firstName) {
      setErrors((prev) => ({
        ...prev,
        firstName: true,
      }));
    }

    if (!formItems.lastName) {
      setErrors((prev) => ({
        ...prev,
        lastName: true,
      }));
    }

    if (!formItems.birthDate) {
      setErrors((prev) => ({
        ...prev,
        birthDate: true,
      }));
    }

    if (!formItems.agree) {
      setErrors((prev) => ({
        ...prev,
        agree: true,
      }));
    }
  };

  useEffect(() => {
    validate();
  }, [
    formItems.firstName,
    formItems.lastName,
    formItems.birthDate,
    formItems.agree,
  ]);

  const inputs = textInputs.map((item) => (
    <InputText
      title={item.title}
      type={item.type}
      name={item.name}
      value={item.value}
      onChange={formItemsChangeHandler}
      invalid={item.invalid}
    />
  ));

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!errors.firstName && !errors.lastName && !errors.birthDate) {
          console.log(formItems);
        }
      }}
    >
      {inputs}
      <Select
        title="Country:"
        name="country"
        value={formItems.country}
        onChange={formItemsChangeHandler}
        option={['Ukrain', 'Russia', 'USA']}
      />
      <InputAgree
        title="this box I argee ..."
        type="checkbox"
        name="agree"
        checked={formItems.agree}
        onChange={formItemsChangeHandler}
      />
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}
