import React, { useState } from 'react';
import { InputData } from './inputData';
import { InputAgree } from './inputAgree';
import { Select } from './select';
import { selectValidate, dateValidate, textValidate } from '../shared/vlidate';
import {
  countryNames,
  EFormItemType,
  EFormItemInvalidMessage,
  EFormItemNames,
  EFormItemTitle,
  defaultCountryOption,
} from '../shared/formItem';
import { BtnSend } from './btnSend';

export function Form(): JSX.Element {
  const [formItems, setFormItems] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    country: defaultCountryOption,
    agree: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    birthDate: false,
    country: false,
    agree: false,
  });

  const validateFirstName = (value: string) => {
    setErrors((prev) => ({
      ...prev,
      firstName: textValidate(value),
    }));
  };
  const validateLastName = (value: string) => {
    setErrors((prev) => ({
      ...prev,
      lastName: textValidate(value),
    }));
  };
  const validateBirthDate = (value: string) => {
    setErrors((prev) => ({
      ...prev,
      birthDate: dateValidate(value),
    }));
  };
  const validateCountry = (value: string) => {
    setErrors((prev) => ({
      ...prev,
      country: selectValidate(value),
    }));
  };
  const validateAgree = (value: boolean) => {
    setErrors((prev) => ({
      ...prev,
      agree: !value,
    }));
  };

  const validateFormItem = (name: string, value: string | boolean) => {
    if (name === EFormItemNames.firstName) validateFirstName(value as string);
    if (name === EFormItemNames.lastName) validateLastName(value as string);
    if (name === EFormItemNames.birthDate) validateBirthDate(value as string);
    if (name === EFormItemNames.country) validateCountry(value as string);
    if (name === EFormItemNames.agree) validateAgree(value as boolean);
  };

  const formItemsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { type, name } = event.target;
    const value =
      type === 'checkbox'
        ? (event as React.ChangeEvent<HTMLInputElement>).target.checked
        : event.target.value;

    validateFormItem(name, value);

    setFormItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !errors.firstName &&
          !errors.lastName &&
          !errors.birthDate &&
          !errors.country &&
          !errors.agree
        ) {
          console.log(formItems);
        }
      }}
    >
      <InputData
        title={EFormItemTitle.firstName}
        type={EFormItemType.text}
        name={EFormItemNames.firstName}
        value={formItems.firstName}
        onChange={formItemsChangeHandler}
        invalid={errors.firstName}
        invalidMessage={EFormItemInvalidMessage.firstName}
      />
      <InputData
        title={EFormItemTitle.lastName}
        type={EFormItemType.text}
        name={EFormItemNames.lastName}
        value={formItems.lastName}
        onChange={formItemsChangeHandler}
        invalid={errors.lastName}
        invalidMessage={EFormItemInvalidMessage.lastName}
      />
      <InputData
        title={EFormItemTitle.birthDate}
        type={EFormItemType.date}
        name={EFormItemNames.birthDate}
        value={formItems.birthDate}
        onChange={formItemsChangeHandler}
        invalid={errors.birthDate}
        invalidMessage={EFormItemInvalidMessage.birthDate}
      />
      <Select
        title={EFormItemTitle.country}
        name={EFormItemNames.country}
        value={formItems.country}
        onChange={formItemsChangeHandler}
        option={countryNames}
        invalid={errors.country}
        invalidMessage={EFormItemInvalidMessage.country}
      />
      <InputAgree
        title={EFormItemTitle.agree}
        type={EFormItemType.checkbox}
        name={EFormItemNames.agree}
        checked={formItems.agree}
        onChange={formItemsChangeHandler}
        invalid={errors.agree}
        invalidMessage={EFormItemInvalidMessage.agree}
      />
      <BtnSend
        onClick={() => {
          validateFirstName(formItems.firstName);
          validateLastName(formItems.lastName);
          validateBirthDate(formItems.birthDate);
          validateCountry(formItems.country);
          validateAgree(formItems.agree);
        }}
      />
    </form>
  );
}
