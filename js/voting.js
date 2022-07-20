const token = 'f9aa7c7a-8d08-4d8c-a121-3f095e85a057';
const randomcat =  'https://api.thecatapi.com/v1/images/search'
const style = "style=max-width: 150px;"

var cat_id = ""

//GET REQUEST
function getCatt(){
    axios
    .get(randomcat, {
        timeout: 5000
    })
    .then(res => {
        catimage = JSON.stringify(res.data[0].url);
        cat_id = JSON.stringify(res.data[0].id);
         let breeds = res.data;
        
        document.querySelector('.action__box-img').innerHTML = "<img src=" + catimage + 'class="img-random"' + ">";
        
        userAction();
    })
    .catch(err => console.error(err));
} 

function userAction() {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const time =`${hours}:${mins}`;
  console.log(time);
  document.querySelector('.users-box__user-time').innerHTML = `${time}`;
}

// POST REQUEST
// CUSTOM HEADERS
function castVote(value) {
    console.log('cast vote');
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
  }


  // EVENT LISTENER
//document.getElementById('catId').addEventListener('click', getCatt);

document.querySelector('.emoji-box__like').addEventListener('click', () => {castVote(1); getCatt()})
document.querySelector('.emoji-box__dislike').addEventListener('click', () => {castVote(0); getCatt()})

window.addEventListener('load', (event) => {
    console.log(event);
    getCatt();
  });

// EXAMPLE
// var data = JSON.stringify({
//     "image_id": "asf2",
//     "sub_id": "my-user-1234",
//     "value": 1
//   });
  
//   var xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
  
//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//       console.log(this.responseText);
//     }
//   });
  
//   xhr.open("POST", "https://api.thecatapi.com/v1/votes");
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.setRequestHeader("x-api-key", "DEMO-API-KEY");
  
//   xhr.send(data);

