import { useState } from 'react';
import { UseIssueQuery } from '../../hooks';
import { Loader } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { State } from '../../interfaces';

export const ListView = () => {

  const [state, setState] = useState<State>( State.All );
  const [selectedLabels, setSelectedLabels] = useState<string[]>( [] );

  const { issueQuery } = UseIssueQuery({
    state,
    selectedLabels
  });

  const issues = issueQuery.data ?? [];

  const onSelectedLabels = (label: string) => {
      if(selectedLabels.includes(label)){
        setSelectedLabels( selectedLabels.filter((l)=> l !== label ) );
      }else{
        setSelectedLabels( [ ...selectedLabels, label ]);
      }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issueQuery.isLoading ? <Loader />  : <IssueList issues={ issues }  state={ state } setState={ setState } />}
      </div>

      <div className="col-span-1 px-2 flex flex-wrap gap-2 sm:max-h-[100vh]">
        <LabelPicker
          onSelectedLabels={ onSelectedLabels }
          selectedLabels={ selectedLabels }
        />
      </div>
    </div>
  );
};
