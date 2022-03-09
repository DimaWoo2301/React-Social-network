const addMessage = 'ADD-MESSAGE';
const updateNewMessagePostText = 'UPDATE-NEW-MESSAGE-POST-TEXT';

let initialState = {
  dialogsData: [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Polina'},
    {id: 4, name: 'Gleb'},
    {id: 5, name: 'Nikita'}
  ],
  messageData: [
    {id: 1, name: 'Me', text: 'hi'},
    {id: 2, name: 'Dmitry', text: 'hi'},
    {id: 3, name: 'Me', text: 'Go walk?)'},
    {id: 4, name: 'Dmitry', text: 'Go))'}
  ],
  newMessagePostText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addMessage:
      let newPost = {
        id: '5', name: 'Ivan', text: state.newMessagePostText
      };

      if (state.newMessagePostText === '') {
        alert('Ошибка, нет символов');
      } else {
        state.messageData.push(newPost);
      }
      state.newMessagePostText = ''
      return state;

    case updateNewMessagePostText:
      state.newMessagePostText = action.newText
      return state;

    default:
      return state;
  }
}


export const addMessageActionCreate = () => ({type: addMessage});
export const updateNewMassagePostTextActionCreate = (text) => ({type: updateNewMessagePostText, newText: text})
export default dialogsReducer;