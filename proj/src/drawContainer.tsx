import React from 'react';

interface IDrawContainerProp{
  selectedColor: string;
  brushWidth: number;
}

export function DrawContainer({selectedColor, brushWidth}: IDrawContainerProp): JSX.Element {

  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const context = canvas.current?.getContext('2d');
    if (context && canvas.current) {
      context.strokeStyle = selectedColor;
      context.lineWidth = brushWidth;

      canvas.current.onmousemove = (ev) => {
        if (ev.buttons == 1) {
          context.lineTo(ev.offsetX, ev.offsetY);
          context.stroke();
        }
      }

      canvas.current.onmousedown = (ev) => {
        if (ev.buttons == 1) {
          context.beginPath();
        }
      }

      canvas.current.onmouseup= (ev) => {
        if (ev.buttons == 1) {
          context.closePath();
        }
      }
    }
  });

  return <div>
    <canvas ref={canvas} width="640" height="480"></canvas>
  </div>;
}
