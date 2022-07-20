

const token = 'f9aa7c7a-8d08-4d8c-a121-3f095e85a057';
const randomcat =  'https://api.thecatapi.com/v1/images/search';

class CatApiServise {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.thecatapi.com/v1',
            headers: {
                'X-Api-Key': 'f9aa7c7a-8d08-4d8c-a121-3f095e85a057'
            }
        });
    }

    searchBreeds = (breed) => {
        return this.api.get(`/breeds/search?q=${breed}`);
    }

    getBreedImage = (breedId) => {
        return this.api.get(`/images/search?breed_id=${breedId}&limit=1`);
    }
}


export default CatApiServise;