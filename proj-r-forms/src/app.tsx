import React, { useState } from 'react';

export function App(): JSX.Element {
  return <Form />;
}

function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(firstName, lastName);
      }}
    >
      <label htmlFor="firstName">
        Name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </label>
      <label htmlFor="lastName">
        Surname:
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </label>
      <label htmlFor="birthDate">
        BirthDate:
        <input
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(event) => {
            setBirthDate(event.target.value);
          }}
        />
      </label>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}
