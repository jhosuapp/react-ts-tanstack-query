import { useQuery } from "@tanstack/react-query"
import { getIssue } from "../actions";
import { State } from "../interfaces";
import { useEffect, useState } from "react";

interface Props {
    state: State;
    selectedLabels: string[];
}

const UseIssueQuery = ({ state, selectedLabels }:Props) => {

    const [page, setPage] = useState<number>(1);

    const issueQuery = useQuery({
        queryKey: ['issue', { state, selectedLabels, page }],
        queryFn:  ()=> getIssue(state, selectedLabels, page),
        staleTime: 60 * 1000,
        refetchOnWindowFocus: true,
        retry: false
    });

    useEffect(()=>{
        setPage(1);
    },[state]);

    useEffect(()=>{
        setPage(1);
    },[selectedLabels]);

    const nextPage = ()=> {
        if(issueQuery.data?.length === 0) return;

        setPage( (prevPage)=> prevPage + 1);
    }

    const prevPage = () => {
        if(page === 1) return;

        setPage( (prevPage) => prevPage - 1 );
    }

    return {
        issueQuery,
        page,
        prevPage, 
        nextPage
    }
}

export { UseIssueQuery }