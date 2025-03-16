import { useInfiniteQuery } from "@tanstack/react-query"
import { getIssue } from "../actions";
import { State } from "../interfaces";

interface Props {
    state: State;
    selectedLabels: string[];
}

const useIssueInfiniteQuery = ({ state, selectedLabels }:Props) => {


    const issueQuery = useInfiniteQuery({
        queryKey: ['issue', 'infinite', { state, selectedLabels }],
        queryFn: ({ pageParam, queryKey })=> {
            const [,,args] = queryKey;
            const { state, selectedLabels } = args as Props;

            return getIssue(state, selectedLabels, pageParam);
        },
        staleTime: 60 * 1000,
        refetchOnWindowFocus: true,
        retry: false,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) =>
            lastPage.length > 0 ? pages.length + 1 : undefined,
    });

    return {
        issueQuery,
    }
}

export { useIssueInfiniteQuery }