const addMessage = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Polina" },
    { id: 4, name: "Gleb" },
    { id: 5, name: "Nikita" },
  ],
  messageData: [
    { id: 1, name: "Me", text: "hi" },
    { id: 2, name: "Dmitry", text: "hi" },
    { id: 3, name: "Me", text: "Go walk?)" },
    { id: 4, name: "Dmitry", text: "Go))" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addMessage: {
      if (!action.text) {
        alert("Нет текста");
        return state;
      }
      return {
        ...state,
        messageData: [
          ...state.messageData,
          {
            id: "5",
            name: "Ivan",
            text: action.text,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreate = (text) => ({ type: addMessage, text });

export default dialogsReducer;
