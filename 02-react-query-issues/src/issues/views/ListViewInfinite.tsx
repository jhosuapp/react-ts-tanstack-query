import { useState } from 'react';
import { useIssueInfiniteQuery } from '../../hooks';
import { Loader } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { State } from '../../interfaces';

export const ListViewInfinite = () => {

  const [state, setState] = useState<State>( State.All );
  const [selectedLabels, setSelectedLabels] = useState<string[]>( [] );

  const { 
    issueQuery,
  } = useIssueInfiniteQuery({
    state,
    selectedLabels,
  });

  const issues = issueQuery?.data?.pages.flat() ?? [];

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
        {issueQuery.isLoading ? (
          <Loader />
        )  : (
          <div className='flex flex-col justify-center w-full'>
            <IssueList issues={ issues }  state={ state } setState={ setState } />

              <button 
                onClick={ ()=> issueQuery.fetchNextPage() }
                disabled={ issueQuery.isFetchingNextPage }
                className='p-2 bg-blue-500 rounded-md hover:bg-blue-800 transition-all'
              >
                {issueQuery.isFetchingNextPage ? 
                  'Cargando más elementos'
                  : 
                  'Cargar más'
                }
              </button>
          </div>
        )}
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
