import { useQuery } from "@tanstack/react-query"
import { getDetailIssue } from "../actions";

const UseDetailIssueQuery = (issueNumber: number) => {
    const issueDetailQuery = useQuery({
        queryKey: ['issueDetail', issueNumber],
        queryFn: ({ queryKey }) => getDetailIssue(queryKey[1] as number),
        retry: false
    });

    return {
        issueDetailQuery
    }
}

export { UseDetailIssueQuery }