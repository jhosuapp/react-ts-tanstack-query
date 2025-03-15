import { useQuery } from "@tanstack/react-query"
import { getIssue } from "../actions";
import { State } from "../interfaces";

interface Props {
    state: State;
    selectedLabels: string[];
}

const useIssueInfiniteQuery = ({ state, selectedLabels }:Props) => {


    const issueQuery = useQuery({
        queryKey: ['issue', { state, selectedLabels }],
        queryFn:  ()=> getIssue(state, selectedLabels, 1),
        staleTime: 60 * 1000,
        refetchOnWindowFocus: true,
        retry: false
    });

    return {
        issueQuery,
    }
}

export { useIssueInfiniteQuery }