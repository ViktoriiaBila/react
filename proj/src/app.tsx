import React from 'react';
import { Counter } from './counter';
import { DrawContainer } from './drawContainer';
import './style.scss'

export function App(): JSX.Element {
  return <div>
    <Editor />
  </div>;
}

export function Editor(): JSX.Element {
  const colors = ['red', 'blue', 'green', 'yellow', 'white', 'black'];
  const [selectedColorIndex, setSelectedColorIndex] = React.useState(0);
  const [selectedbrushWidth, setSelectedBrushWidth] = React.useState(5);
  return <div>
    <ControlPanel />
    <Tools
      colors = {colors}
      onColorSelect = {(index) => {
        setSelectedColorIndex(index);
      }}
      initialSelectedIndex = {selectedColorIndex}
      onBrushWidthSelect = {(width) => {
        setSelectedBrushWidth(width);
      }}
      initialBrushWidth = {selectedbrushWidth}/>
    <DrawContainer selectedColor = {colors[selectedColorIndex]} brushWidth = {selectedbrushWidth}/>
  </div>;
}

interface IToolsProps {
  colors: Array<string>;
  onColorSelect: (index: number) => void;
  initialSelectedIndex: number;

  onBrushWidthSelect: (width: number) => void;
  initialBrushWidth: number;
}

export function Tools(props: IToolsProps): JSX.Element {
  const colorButtons = props.colors.map((color, index) => {
      return <button className={`colorButton ${index === props.initialSelectedIndex ? 'colorButton__selected' : ''}`} style={{backgroundColor: color}} key = {color} onClick={() => {
        props.onColorSelect(index);
      }}></button>
    });

  return <div className="tools_wrapper">
    Color:
    <div>
      {colorButtons}
    </div>
    Brush:
    <div>
      <input value={props.initialBrushWidth} type="range" onChange={(ev) => props.onBrushWidthSelect(ev.target.valueAsNumber)}/>
    </div>
  </div>;
}

export function ControlPanel(): JSX.Element {
  return <div className="controlPanel_wrapper">
    <input className="input" type="file"/>
  </div>;
}
