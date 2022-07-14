
const token = 'f9aa7c7a-8d08-4d8c-a121-3f095e85a057';
const randomcat =  'https://api.thecatapi.com/v1/images/search';
// const style = "style = max-width: 150px;"
var cat_id = "";

 
// get-request
const getCatt = () => {
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

// post request
const castVote = (value) => {
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
  }

  export default '*';