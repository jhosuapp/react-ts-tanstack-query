import { useLabelQuery } from "../../hooks";
import { Loader } from "../../shared";

export const LabelPicker = ():JSX.Element => {

  const { labelQuery } = useLabelQuery(); 

  if(labelQuery.isFetching){
    return <Loader />
  }

  if(!labelQuery.data){
    return <p className="text-center w-full h-[100px] flex items-center justify-center">there are no labels</p>
  }

  return (
    <>
      {labelQuery.data.map(( { name, color } )=>(
        <span
          key={name}
          className="px-2 py-1 animate-fadeIn rounded-full font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${color}`, color: `#${color}` }}
        >
          { name }
        </span>
      ))}
    </>
  );
};
