import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "5954a2a9-c71a-4101-bfc2-0ba10228c376",
  },
});

const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export default getUsers;
