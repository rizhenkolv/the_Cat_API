const token = 'f9aa7c7a-8d08-4d8c-a121-3f095e85a057';
const cat =  'https://api.thecatapi.com/v1/breeds';
const selectBreeds = document.querySelector('.action__select-breeds');
function getNameBreeds(){
        axios
        .get(cat, {
            timeout: 5000
        })
        .then(res => {
            // catName = JSON.stringify(res.data[0].name);
            // cat_id = JSON.stringify(res.data[0].id);
            // console.log(res);
            let nameList = [];
            res.data.forEach(function(item) {
                nameList.push(item.name);
                const createOption = document.createElement("option");
                createOption.classList.add("action__select-breed");
                selectBreeds.appendChild(createOption);
                createOption.innerHTML = `${item.name}`;
            })
            console.log(nameList);
           
    
        })
        .catch(err => console.error(err));
    } 


    getNameBreeds();
