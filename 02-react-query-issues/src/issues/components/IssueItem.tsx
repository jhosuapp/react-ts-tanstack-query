import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { IssueInterface, State } from '../../interfaces';

type IssueProps = {
  issue: IssueInterface;
}

export const IssueItem = ({ issue }:IssueProps) => {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800">
      {
        (issue.state === State.Close)
        ? <FiCheckCircle size={30} color="green" className="min-w-10" />
        : <FiInfo size={30} color="red" className="min-w-10" />
      }
      
      <div className="flex flex-col flex-grow px-2">
        <a
          onClick={() => navigate(`/issues/issue/123`)}
          className="hover:underline"
        >
          {issue.title}
        </a>
        <span className="text-gray-500">
          #{ issue.number } opened 2 days ago by{' '}
          <span className="font-bold">{ issue.user.login }</span>
        </span>
      </div>

      <img
        src={issue.user.avatar_url}
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col mx-2 items-center">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">{ issue.comments }</span>
      </div>
    </div>
  );
};
