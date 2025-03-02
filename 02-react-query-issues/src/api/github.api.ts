import axios from "axios";

const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react'
});

export { githubApi }