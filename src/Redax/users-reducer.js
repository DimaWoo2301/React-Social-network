const Un_Follow = "UN_FOLLOW";
const follow_ = "FOLLOW_";
const set_Users = "SET_USERS";
const current_Page = "CURRENT_PAGE";
const set_Total_Users_Count = "SET_TOTAL_USERS_COUNT";
const toggle_Is_Fetching = "TOGGLE_IS_FETCHING";
let initialState = {
  usersData: [],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: true,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case follow_:
      return {
        ...state,
        usersData: state.usersData.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: true };
          }
          return users;
        }),
      };
    case Un_Follow:
      return {
        ...state,
        usersData: state.usersData.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: false };
          }
          return users;
        }),
      };
    case set_Users: {
      return { ...state, usersData: [...action.users] };
    }
    case current_Page: {
      return { ...state, currentPage: action.currentPage };
    }
    case set_Total_Users_Count: {
      return { ...state, totalUserCount: action.count };
    }
    case toggle_Is_Fetching: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: follow_, userId });

export const unFollow = (userId) => ({ type: Un_Follow, userId });

export const setUsers = (users) => ({ type: set_Users, users });

export const toggleIsFetching = (isFetching) => ({
  type: toggle_Is_Fetching,
  isFetching,
});

export const setTotalUsersCount = (totalUserCount) => ({
  type: set_Total_Users_Count,
  count: totalUserCount,
});

export const setCurrentPage = (currentPage) => ({
  type: current_Page,
  currentPage,
});

export default usersReducer;