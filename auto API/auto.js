
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");

const memeImage = document.querySelector(".meme-generator img");
const memeTitle  = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
const memeDownload = document.querySelector("a button");
// const btn = document.querySelector("a");
let imagesrc;

const updateDetails =(url, title, author) => {
    memeImage.setAttribute("src", url);
    imagesrc = url;
     memeTitle.innerHTML = title;
    // memeAuthor.innerHTML = `Meme by author - ${author}`;
    // memeDownload.setAttribute("href", url);
    
};


const generateMeme = () => {

    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
        url = data.url;
    }) ;
}

generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();


