import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState<number>(0);
  const [token, setToken] = useState<number>(0);
  const [catchError, setCatchError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(()=>{
    setIsLoading(true);
    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then(res => res.json())
    .then(data => { setNumber(data) })
    .catch(error => { setCatchError(error) })
    .finally(() => { setIsLoading(false) })
  },[token]);


  return (
    <>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <h1>Número {number}</h1>
      )}

      <p>{ catchError }</p>
      <button onClick={ () => setToken(token + 1) } disabled={isLoading} >Generate new number</button>
    </>
  )
}

export default App
