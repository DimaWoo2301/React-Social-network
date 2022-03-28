import { authAPI } from "../components/Api/Api";

const set_User_Data = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case set_User_Data: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => ({
  type: set_User_Data,
  data: { userId, email, login, isAuth },
});

export const loginExamination = () => {
  return (dispatch) => {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  console.log(email, password, rememberMe);
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(loginExamination());
      }
    });
  };
};

export const loginOut = () => {
  return (dispatch) => {
    authAPI.loginOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};
export default authReducer;
