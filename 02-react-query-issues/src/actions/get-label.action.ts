import { githubApi } from "../api";
import { sleep } from "../helpers";
import { LabelInterface } from "../interfaces";

const getLabels = async():Promise<LabelInterface[]> => {
    await sleep(1500);
  
    const { data } = await githubApi.get<LabelInterface[]>('/labels');
  
    return data;
}


export { getLabels }