import './App.css';
import { useRandomNumber } from './hooks/useRandomNumber';
function App() {

  const { randomNumber } = useRandomNumber();

  return (
    <>
      {randomNumber.isFetching ? (
        <h1>Cargando</h1>
      ) : (
        <h1>Número {randomNumber.data}</h1>
      )}

      <p>{ JSON.stringify(randomNumber.error) }</p>
      <button onClick={ () => randomNumber.refetch() } disabled={randomNumber.isFetching} >Generate new number</button>
    </>
  )
}

export default App
