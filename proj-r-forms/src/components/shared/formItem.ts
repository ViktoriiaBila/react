export enum EFormItemNames {
  firstName = 'firstName',
  lastName = 'lastName',
  birthDate = 'birthDate',
  country = 'country',
  agree = 'agree',
}

export enum EFormItemTitle {
  firstName = 'Name:',
  lastName = 'Surname:',
  birthDate = 'BirthDate:',
  country = 'Country:',
  agree = 'this box I argee ...',
}

export enum EFormItemInvalidMessage {
  firstName = 'must be filled and consist of only letters',
  lastName = 'must be filled and consist of only letters',
  birthDate = 'must be chosen',
  country = 'must be chosen',
  agree = 'must be chosen',
}

export enum EFormItemType {
  text = 'text',
  date = 'date',
  select = 'select-one',
  checkbox = 'checkbox',
}

export const countryNames = ['Ukraine', 'Russia', 'USA'];

export const defaultCountryOption = '-- select an option --';
