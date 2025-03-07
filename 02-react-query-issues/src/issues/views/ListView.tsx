import { UseIssueQuery } from '../../hooks';
import { Loader } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';

export const ListView = () => {

  const { issueQuery } = UseIssueQuery();
  const issues = issueQuery.data ?? [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issueQuery.isLoading ? <Loader />  : <IssueList issues={ issues } />}
      </div>

      <div className="col-span-1 px-2 flex flex-wrap gap-2 sm:max-h-[100vh]">
        <LabelPicker />
      </div>
    </div>
  );
};
