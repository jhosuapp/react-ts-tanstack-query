import { githubApi } from "../api";
import { sleep } from "../helpers";
import { GithubInterface } from "../interfaces";

const getLabels = async():Promise<GithubInterface[]> => {
    await sleep(1500);
  
    const { data } = await githubApi.get<GithubInterface[]>('/labels');
  
    return data;
}


export { getLabels }