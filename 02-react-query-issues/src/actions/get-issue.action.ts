import { githubApi } from "../api"
import { IssueInterface } from "../interfaces";

const getIssue = async ():Promise<IssueInterface[]> => {
    const { data } = await githubApi.get<IssueInterface[]>('/issues');

    return data;
}

export { getIssue }