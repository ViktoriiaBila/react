import { defaultCountryOption } from './formItem';

export const textValidate = (value: string): boolean => {
  return (
    value.length < 1 ||
    /[0-9]/.test(value) ||
    /[ ~!@#$%&*()_—+\\=:;"'`<>,.?^]/.test(value) ||
    /[|]/.test(value) ||
    /[/]/.test(value)
  );
};

export const dateValidate = (value: string): boolean => {
  return value.length < 1;
};

export const selectValidate = (value: string): boolean => {
  return value === defaultCountryOption;
};
