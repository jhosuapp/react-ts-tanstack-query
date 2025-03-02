import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../../actions";

export const LabelPicker = ():JSX.Element => {

  const { data, isFetching } = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels
  });

  console.log(data);

  if(isFetching){
    return <p className="text-center w-full h-[100px] flex items-center justify-center">Loading...</p>
  }

  if(!data){
    return <p className="text-center w-full h-[100px] flex items-center justify-center">there are no labels</p>
  }

  return (
    <>
      {data.map(( { name, color } )=>(
        <span
          className="px-2 py-1 rounded-full font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${color}`, color: `#${color}` }}
        >
          { name }
        </span>
      ))}
    </>
  );
};
