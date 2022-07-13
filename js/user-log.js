const token = 'f9aa7c7a-8d08-4d8c-a121-3f095e85a057';
const randomcat =  'https://api.thecatapi.com/v1/images/search'
const style = "style=max-width: 150px;"

var cat_id = ""

//GET REQUEST - get a picture
function getCatt(){
    axios
    .get(randomcat, {
        timeout: 5000
    })
    .then(res => {
        catimage = JSON.stringify(res.data[0].url);
        cat_id = JSON.stringify(res.data[0].id);
        document.querySelector('.action__box-img').innerHTML = "<img src=" + catimage + 'class="img-random"' + ">";

    })
    .catch(err => console.error(err));
} 

// POST REQUEST
// CUSTOM HEADERS
function castVote(value) {
    console.log('cast vote', value);
    console.log(`id is ${cat_id}`)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': token
      }
    };
    axios
      .post(
        'https://api.thecatapi.com/v1/votes',
        {
          'image_id': cat_id,
          'sub_id': 'user_001',
          'value': value
        },
        config
      )
      .then(res => console.log(res))
      .catch(err => console.error(err));
     console.log([{'image_id': cat_id,
     'sub_id': 'user_001',
     'value': value}]) ;
  }

  // EVENT LISTENER
//document.getElementById('catId').addEventListener('click', getCatt);

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
    createLog.classList.add("users-box__user");
    users.appendChild(createLog);

    const time = document.createElement("div");
    time.classList.add("users-box__user-time");
    time.innerHTML = userTime();
    const content = document.createElement("div");
    content.classList.add("users-box__user-input");
    content.innerHTML = `Image ID: <span style="color:black"><b>${cat_id}</b></span> was added to ${text[0]}`
    const emoji = document.createElement("div");
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