import { defaultCountryOption } from './formItem';

export const textValidate = (value: string) => {
  return (
    value.length < 1 ||
    /[0-9]/.test(value) ||
    /[ ~!@#$%&*()_—+\=:;"'`<>,.?^]/.test(value) ||
    /[|]/.test(value) ||
    /[/]/.test(value)
  );
};

export const dateValidate = (value: string) => {
  return value.length < 1;
};

export const selectValidate = (value: string) => {
  return value == defaultCountryOption;
};
