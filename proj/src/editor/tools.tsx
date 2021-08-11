import React from 'react';

export function Tools(props: IToolsProps): JSX.Element {
  const colorButtons = props.colors.map((color, index) => {
    return (
      <button
        className={`colorButton ${
          index === props.initialSelectedIndex ? 'colorButton__selected' : ''
        }`}
        style={{ backgroundColor: color }}
        key={color}
        onClick={() => {
          props.onColorSelect(index);
        }}
      ></button>
    );
  });

  return (
    <div className="tools_wrapper">
      Color:
      <div>{colorButtons}</div>
      Brush:
      <div>
        <input
          value={props.initialBrushWidth}
          type="range"
          onChange={(ev) => props.onBrushWidthSelect(ev.target.valueAsNumber)}
        />
      </div>
    </div>
  );
}
