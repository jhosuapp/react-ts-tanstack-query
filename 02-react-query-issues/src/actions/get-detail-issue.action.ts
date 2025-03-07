import { githubApi } from "../api"
import { sleep } from "../helpers";
import { IssueInterface } from "../interfaces";

const getDetailIssue = async (issueNumber: number):Promise<IssueInterface> => {
     await sleep(1500);
     
    const { data } = await githubApi.get<IssueInterface>(`/issues/${issueNumber}`);

    return data;
}

export { getDetailIssue }