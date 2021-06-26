import { Button } from './components/Button';

function App() {
  const randomNumber = Math.random();

  return (
    <Button startNumber={randomNumber} />
  );
}

export default App;
