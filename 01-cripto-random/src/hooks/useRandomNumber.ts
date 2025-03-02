import { useQuery } from "@tanstack/react-query";

const getRandomNumber = async():Promise<number> => {

    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then(res => res.json())
  
    return Number(response);
}

const useRandomNumber = () => {

    const randomNumber = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getRandomNumber,
        staleTime: 1000 * 5,
        retry: false,
        // retryDelay
    });

    return {
        randomNumber
    }
}

export { useRandomNumber }