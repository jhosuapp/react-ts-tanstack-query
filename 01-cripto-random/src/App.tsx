import './App.css';
import { useQuery } from '@tanstack/react-query';

const getRandomNumber = async():Promise<number> => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  .then(res => res.json())

  return Number(response);
}

function App() {

  const { isFetching, data:number, error, refetch } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getRandomNumber
  });

  return (
    <>
      {isFetching ? (
        <h1>Cargando</h1>
      ) : (
        <h1>Número {number}</h1>
      )}

      <p>{ JSON.stringify(error) }</p>
      <button onClick={ () => refetch() } disabled={isFetching} >Generate new number</button>
    </>
  )
}

export default App
