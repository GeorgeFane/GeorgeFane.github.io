import SheetMusic from '@slnsw/react-sheet-music';

const MyComponent = () => {
  return (
    <SheetMusic
      // Textual representation of music in ABC notation
      // The string below will show four crotchets in one bar
      notation="|EGBF|"
    />
  );
};

export default MyComponent;