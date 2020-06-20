const API_KEY = "FIgbdnF-n60hzIXHRbJJe3f0a2C-ryxyZLjCY2t09m4";
const URL = "https://api.unsplash.com/photos";
const fetchImages = async (page) => {
    const response = await fetch(`${URL}?client_id=${API_KEY}&&per_page=3&page=${page}`);
    const data = await response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    
    return data;
};

const fetchImagesStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics?client_id=${API_KEY}`);
    const data = await response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }

    return data;
}

export { fetchImages, fetchImagesStats };