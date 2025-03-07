import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { FiSkipBack } from 'react-icons/fi';
import { UseDetailIssueQuery } from '../../hooks';
import { Loader } from '../../shared';

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams()
  const issueNumber = Number(params.issueNumber) ?? 0;
  //Request
  const { issueDetailQuery, issueCommentsQuery } = UseDetailIssueQuery(issueNumber);

  console.log(issueCommentsQuery.data);

  if(issueDetailQuery.isLoading){
    return <p>Cargando issue</p>
  }

  if( !issueDetailQuery.data){
    return <Navigate to={'/404'} />
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      {/* Primer comentario */}
      <IssueComment issue={ issueDetailQuery.data } />

      {/* Comentario de otros */}
      {
        issueCommentsQuery.isLoading 
        ? (<Loader />) 
        : (
          issueCommentsQuery.data?.map((issue)=>(
            <IssueComment issue={ issue } key={ issue.id } />
          ))
        )
      }
    </div>
  );
};
