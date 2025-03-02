import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";

const useLabelQuery = () => {

    const labelQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60,
        // placeholderData: [
        //     {
        //         "id":791921801,
        //         "node_id":"MDU6TGFiZWw3OTE5MjE4MDE=",
        //         "url":"https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        //         "name":"❤️",
        //         "color":"ffffff",
        //         "default":false,
        //     } satisfies GithubInterface,
        //     {
        //         "id":791921801,
        //         "node_id":"MDU6TGFiZWw3OTE5MjE4MDE=",
        //         "url":"https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        //         "name":"test 123 123 123",
        //         "color":"f4f4f4",
        //         "default":false,
        //     } satisfies GithubInterface
        // ] 
    });

    return {
        labelQuery
    }
}

export { useLabelQuery }