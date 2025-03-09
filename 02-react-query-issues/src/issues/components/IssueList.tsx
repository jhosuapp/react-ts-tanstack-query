import { IssueInterface, State } from '../../interfaces';
import { IssueItem } from './IssueItem';

type IssuesProps = {
  issues: IssueInterface[];
  state: State;
  setState: (state: State) => void;
}

export const IssueList = ({ issues, setState, state }:IssuesProps) => {

  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className={`btn ${state === State.All ? 'active' : ''}`} onClick={ ()=> setState(State.All) }>All</button>
        <button className={`btn ${state === State.Open ? 'active' : ''}`} onClick={ ()=> setState(State.Open) }>Open</button>
        <button className={`btn ${state === State.Close ? 'active' : ''}`} onClick={ ()=> setState(State.Close) }>Closed</button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={ issue } />
        ))}
      </div>
    </>
  );
};
