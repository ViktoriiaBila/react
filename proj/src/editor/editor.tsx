import React from 'react';
import { ControlPanel } from './controlPanel';
import { Tools } from './tools';
import { DrawContainer } from './drawContainer';

export function Editor(): JSX.Element {
  const colors = ['red', 'blue', 'green', 'yellow', 'white', 'black'];
  const [selectedColorIndex, setSelectedColorIndex] = React.useState(0);
  const [selectedbrushWidth, setSelectedBrushWidth] = React.useState(5);

  const colorSelectHandler = (index: number) => {
    setSelectedColorIndex(index);
  };
  const brushWidthSelectHandler = (width: number) => {
    setSelectedBrushWidth(width);
  };

  return (
    <div>
      <ControlPanel />
      <Tools
        colors={colors}
        onColorSelect={colorSelectHandler}
        initialSelectedIndex={selectedColorIndex}
        onBrushWidthSelect={brushWidthSelectHandler}
        initialBrushWidth={selectedbrushWidth}
      />
      <DrawContainer
        selectedColor={colors[selectedColorIndex]}
        brushWidth={selectedbrushWidth}
      />
    </div>
  );
}
