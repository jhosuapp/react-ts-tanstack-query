import axios from "axios";

const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
    }
});

export { githubApi }