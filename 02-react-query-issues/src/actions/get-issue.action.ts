import { githubApi } from "../api"
import { IssueInterface, State } from "../interfaces";

const getIssue = async (
    state: State, 
    selectedLabels: string[],
    page: number
):Promise<IssueInterface[]> => {

    const params = new URLSearchParams();

    if(state !== State.All){
        params.append('state', state)
    }

    if(selectedLabels.length > 0){
        params.append('labels', selectedLabels.join(','));
    }

    params.append('per_page', '5');
    params.append('page', `${page}`);

    const { data } = await githubApi.get<IssueInterface[]>('/issues',{
        params
    });

    return data;
}

export { getIssue }