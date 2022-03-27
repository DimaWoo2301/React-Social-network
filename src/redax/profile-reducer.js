import { profileAPI } from "../components/Api/Api";

const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const addPost = "ADD-POST";
const set_Users_Profile = "SET_USERS_PROFILE";
const set_Status = "SET_STATUS";
let initialState = {
  postsData: [
    { id: 1, name: "Dmitry", text: "hello, i love apple", like: 12 },
    { id: 2, name: "Dmitry", text: "bay, my friends", like: 10 },
    { id: 3, name: "Gleb", text: "hi", like: 55 },
    { id: 4, name: "Polina", text: "I love you )", like: 87 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost: {
      if (!state.newPostText) {
        alert("Нет текста");
        return state;
      }
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: "5",
            name: "Ivan",
            text: state.newPostText,
            like: 0,
          },
        ],
        newPostText: "",
      };
    }
    case updateNewPostText: {
      return { ...state, newPostText: action.newText };
    }
    case set_Users_Profile: {
      return { ...state, profile: action.profile };
    }
    case set_Status: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
export const addPostActionCreate = () => ({ type: addPost });
export const setStatus = (status) => ({ type: set_Status, status });
export const updateNewPostTextActionCreate = (text) => ({
  type: updateNewPostText,
  newText: text,
});
export const setUsersProfile = (profile) => ({
  type: set_Users_Profile,
  profile,
});

export const getUsers = (userId) => {
  return (dispatch) => {
    profileAPI.profileUsers(userId).then((response) => {
      dispatch(setUsersProfile(response.data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
export default profileReducer;
