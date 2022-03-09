
let initialState = {
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
};
const navbarReducer = (state = initialState, action) => {


  return state;
}

export default navbarReducer;