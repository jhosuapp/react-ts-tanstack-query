import { useQuery } from "@tanstack/react-query"
import { getIssue } from "../actions";

const UseIssueQuery = () => {
    const issueQuery = useQuery({
        queryKey: ['issue'],
        queryFn: getIssue,
        staleTime: 60 * 1000
    });

    return {
        issueQuery
    }
}

export { UseIssueQuery }