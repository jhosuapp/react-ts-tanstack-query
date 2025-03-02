import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../helpers/sleep";

const getLabels = async():Promise<unknown[]> => {

  await sleep(100500);

  const response = await fetch('https://api.github.com/repos/facebook/react/labels')
  .then(res => res.json());

  return response;
}

export const LabelPicker = ():JSX.Element => {

  const { data, isFetching } = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels
  });

  if(isFetching){
    return <p className="text-center w-full h-[100px] flex items-center justify-center">Loading...</p>
  }

  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </>
  );
};
