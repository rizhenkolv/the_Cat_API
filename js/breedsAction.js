const catImg = "https://api.thecatapi.com/v1/images/search?format=json&limit=15";
const galleryListfirst = document.querySelector('.gallery__list');
const galleryListsecond = document.querySelector('.gallery__list--reverse');

const getImgBreeds = () => {
        axios
        .get(catImg, {
            timeout: 5000
        })
        .then(res => {
            console.log(res);
            let idList = [];
            res.data.forEach(function(breed) {
                idList.push(breed.id);
                const createList = document.createElement("li");
                const createFigure = document.createElement("figure");
                createList.appendChild(createFigure);
                galleryListfirst.appendChild(createList);
                createFigure.innerHTML = `<img src="${breed.url}" class="list-item">`;
                
            })
            console.log(idList);
            
            
        })
        .catch(err => console.error(err));
    } 

    getImgBreeds();

