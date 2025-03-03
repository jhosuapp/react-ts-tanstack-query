import { useQuery } from "@tanstack/react-query"
import { getIssue } from "../actions";

const UseIssueQuery = () => {
    const issueQuery = useQuery({
        queryKey: ['issue'],
        queryFn: getIssue,
    });

    return {
        issueQuery
    }
}

export { UseIssueQuery }