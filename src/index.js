import './index.css';
import React from "react";
import store  from "./Redax/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

let rerenderTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App store={state}/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state);
});

