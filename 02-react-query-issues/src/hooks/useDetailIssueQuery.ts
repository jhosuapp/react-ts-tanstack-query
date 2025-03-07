import { useQuery } from "@tanstack/react-query"
import { getCommentsIssue, getDetailIssue } from "../actions";

const UseDetailIssueQuery = (issueNumber: number) => {
    const issueDetailQuery = useQuery({
        queryKey: ['issueDetail', issueNumber],
        queryFn: ({ queryKey }) => getDetailIssue(queryKey[1] as number),
        retry: false
    });

    // const issueCommentsQuery = useQuery({
    //     queryKey: ['issueComments', issueNumber, '/comments'],
    //     queryFn: ({ queryKey }) => getCommentsIssue(queryKey[1] as number),
    //     retry: false
    // });

    const issueCommentsQuery = useQuery({
        queryKey: ['issueComments', issueDetailQuery.data?.number, '/comments'],
        queryFn: ({ queryKey }) => getCommentsIssue(queryKey[1] as number),
        retry: false,
        staleTime: 1000 * 60,
        enabled: issueDetailQuery.data !== undefined
    });

    return {
        issueDetailQuery, 
        issueCommentsQuery
    }
}


export { UseDetailIssueQuery }