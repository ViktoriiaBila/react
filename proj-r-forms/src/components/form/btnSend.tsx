import React from 'react';

interface IBtnSendProps {
  onClick: () => void;
}

export function BtnSend(props: IBtnSendProps): JSX.Element {
  return (
    <div>
      <input type="submit" value="Send" onClick={props.onClick} />
    </div>
  );
}
