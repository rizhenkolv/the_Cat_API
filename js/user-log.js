 import { getCatt, castVote } from './index.js';
 import {cat_id} from "./index.js";
//  getCatt = require('./index');
//  castVote = require('./index');

 var catimage;


  // EVENT LISTENER
document.querySelector('.emoji-box__like').addEventListener('click', () => {castVote(1); getCatt()})
document.querySelector('.emoji-box__dislike').addEventListener('click', () => {castVote(0); getCatt()})
document.querySelector('.emoji-box__like').addEventListener('click', () => {castVote(1); userLog(1)})
document.querySelector('.emoji-box__dislike').addEventListener('click', () => {castVote(0); userLog(0)})

window.addEventListener('load', (event) => {
    console.log(event);
    getCatt();
  });

function userLog(value) {
    let text = [];
    (value === 1)? text = ["Likes","./img/img__voting/like_green.svg"]:text = ["Dislikes","./img/img__voting/dislike_yellow.svg"];
    const users = document.querySelector('.users-box');
    const createLog = document.createElement("div");
    const time = document.createElement("div");
    const content = document.createElement("div");
    const emoji = document.createElement("div");

    createLog.classList.add("users-box__user");
    users.appendChild(createLog);

    time.classList.add("users-box__user-time");
    time.innerHTML = userTime();
    
    content.classList.add("users-box__user-input");
    content.innerHTML = `Image ID: <span style="color:black"><b>${cat_id}</b></span> was added to ${text[0]}`
    
    emoji.classList.add("users-box__user-reaction");
    emoji.innerHTML = `<img src="${text[1]}">`
    createLog.appendChild(time);
    createLog.appendChild(content);
    createLog.appendChild(emoji);

}

function userTime() {
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const timeCurrent =`${hours}:${mins}`;
    return timeCurrent;
  }