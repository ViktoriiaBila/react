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

  const formItemsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { type, name } = event.target;
    const value =
      type === 'checkbox'
        ? (event as React.ChangeEvent<HTMLInputElement>).target.checked
        : event.target.value;

    validate(type, name, value);

    setFormItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (type: string, name: string, value: string | boolean) => {
    if (type === EFormItemType.text) {
      if (textValidate(value as string)) {
        setErrors((prev) => ({
          ...prev,
          [name]: true,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: false,
        }));
      }
    }
    if (type === EFormItemType.date) {
      if (dateValidate(value as string)) {
        setErrors((prev) => ({
          ...prev,
          [name]: true,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: false,
        }));
      }
    }
    if (type === EFormItemType.select) {
      if (selectValidate(value as string)) {
        setErrors((prev) => ({
          ...prev,
          [name]: true,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: false,
        }));
      }
    }
    if (type === EFormItemType.checkbox) {
      if (!value) {
        setErrors((prev) => ({
          ...prev,
          [name]: true,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: false,
        }));
      }
    }
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
      <div>
        <input
          type="submit"
          value="Send"
          onClick={() => {
            validate(
              EFormItemType.text,
              EFormItemNames.firstName,
              formItems.firstName,
            );
            validate(
              EFormItemType.text,
              EFormItemNames.lastName,
              formItems.lastName,
            );
            validate(
              EFormItemType.date,
              EFormItemNames.birthDate,
              formItems.birthDate,
            );
            validate(
              EFormItemType.select,
              EFormItemNames.country,
              formItems.country,
            );
            validate(
              EFormItemType.checkbox,
              EFormItemNames.agree,
              formItems.agree,
            );
          }}
        />
      </div>
    </form>
  );
}
