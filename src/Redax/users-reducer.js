const UnFollow = "UNFOLLOW";
const follow = "FOLLOW";
const setUsers = "SETUSERS";
let initialState = {
  usersData: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case follow:
      return {
        ...state,
        usersData: state.usersData.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: true };
          }
          return users;
        }),
      };
    case UnFollow:
      return {
        ...state,
        usersData: state.usersData.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: false };
          }
          return users;
        }),
      };
    case setUsers: {
      return { ...state, usersData: [...state.usersData, ...action.users] };
    }
    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: follow, userId });
export const UnFollowAC = (userId) => ({ type: UnFollow, userId });
export const setUsersAC = (users) => ({ type: setUsers, users });
export default usersReducer;
