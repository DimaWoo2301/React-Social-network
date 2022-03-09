import React from 'react';
import s from './Post.module.css'
import {avatarFace1} from "../../../../img";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.text}>
        <img src={avatarFace1} alt=""/>
        <span>
          {props.name + ":"}
        </span>
        {props.messenge}
      </div>
      <div>
        <button>Like</button>
        <span>
        {props.likesQuantity}
      </span>
      </div>
    </div>
  );
};

export default Post;