import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "5954a2a9-c71a-4101-bfc2-0ba10228c376",
  },
});

const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/` + userId
    );
  },
  unFollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/` + userId
    );
  },
};

export default userAPI;
