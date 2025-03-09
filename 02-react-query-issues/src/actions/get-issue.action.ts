import { githubApi } from "../api"
import { IssueInterface, State } from "../interfaces";

const getIssue = async (state: State):Promise<IssueInterface[]> => {

    const params = new URLSearchParams();

    if(state !== State.All){
        params.append('state', state)
    }

    const { data } = await githubApi.get<IssueInterface[]>('/issues',{
        params
    });

    return data;
}

export { getIssue }