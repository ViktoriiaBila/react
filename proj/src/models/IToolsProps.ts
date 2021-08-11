interface IToolsProps {
  colors: Array<string>;
  onColorSelect: (index: number) => void;
  initialSelectedIndex: number;

  onBrushWidthSelect: (width: number) => void;
  initialBrushWidth: number;
}
