import { useQuery } from "@tanstack/react-query"
import { getIssue } from "../actions";
import { State } from "../interfaces";

interface Props {
    state: State;
}

const UseIssueQuery = ({ state }:Props) => {
    const issueQuery = useQuery({
        queryKey: ['issue', { state }],
        queryFn:  ()=> getIssue(state),
        staleTime: 60 * 1000,
        refetchOnWindowFocus: true,
        retry: false
    });

    return {
        issueQuery
    }
}

export { UseIssueQuery }