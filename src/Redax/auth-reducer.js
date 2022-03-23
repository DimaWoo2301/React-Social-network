import userAPI from "../components/Api/Api";

const set_User_Data = "SET_USER_DATA";
const updateNewMessagePostText = "UPDATE-NEW-MESSAGE-POST-TEXT";

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
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setUserData = (userId, email, login) => ({
  type: set_User_Data,
  data: { userId, email, login },
});
export const updateNewMassagePostTextActionCreate = (text) => ({
  type: updateNewMessagePostText,
  newText: text,
});

export const loginExamination = () => {
  return (dispatch) => {
    userAPI.login().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login));
      }
    });
  };
};
export default authReducer;
