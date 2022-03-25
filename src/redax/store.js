import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, name: 'Dmitry', text: 'hello, i love apple', like: 12},
        {id: 2, name: 'Dmitry', text: 'bay, my friends', like: 10},
        {id: 3, name: 'Gleb', text: 'hi', like: 55},
        {id: 4, name: 'Polina', text: 'I love you )', like: 87}
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    },
    navbarPage: {
      linksData: [
        {path: '/profile', text: 'Profile'},
        {path: '/messages', text: 'Messages'},
        {path: '/news', text: 'News'},
        {path: '/music', text: 'Music'},
        {path: '/settings', text: 'Settings'}
      ],
      friendData: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Gleb'},
        {id: '3', name: 'Ivan'},
      ]
    }
  },
  _rerenderTree() {
    console.log('awdawd');
  },

  getState() {
    return this._state;
  },
  subscribe(observe) {
    this._rerenderTree = observe;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbarPage = navbarReducer(this._state.navbarPage, action)
    this._rerenderTree(this._state);
  }
};




export default store