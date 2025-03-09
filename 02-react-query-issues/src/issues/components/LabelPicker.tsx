import { useLabelQuery } from "../../hooks";
import { Loader } from "../../shared";

interface LabelPickerProps {
  onSelectedLabels: (label: string) => void;
  selectedLabels: string[]
}

export const LabelPicker = ({ onSelectedLabels, selectedLabels }: LabelPickerProps):JSX.Element => {

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
          className={`px-2 py-1 animate-fadeIn rounded-full font-semibold hover:bg-slate-800 cursor-pointer ${selectedLabels.includes(name) && 'selected-label'}`}
          style={{ border: `1px solid #${color}` }}
          onClick={ ()=> onSelectedLabels(name) }
        >
          { name }
        </span>
      ))}
    </>
  );
};
