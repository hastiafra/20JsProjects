import {APIKEY} from "./env.js";

const container = document.getElementById("img-container");

const loader = document.getElementById("loader");

let photosArr=[];




const getPhotos = async () => {
  
  try {
    const response = await fetch(APIKEY);
    photosArr = await response.json();
    // console.log(photosArr);
    displayPhotos();

  } catch (error) {
    console.log(error);
  
  }
};

const displayPhotos = () =>{
  console.log(photosArr);

  photosArr.forEach((photo)=>{

    const item = document.createElement("a");

    item.setAttribute("href", photo.links.html);
    item.setAttribute("target","_blank");
    let img = document.createElement("img");

    img.src= `${photo.urls.regular}`;
    img.setAttribute("alt",photo.alt_description);
    img.setAttribute("title",photo.alt_description);
  
    item.appendChild(img);
    container.appendChild(item);



  })
}


window.addEventListener("scroll", ()=>{
  if(window.innerHeight + window.scrollY>=document.body.offsetHeight -1000){
   
    getPhotos();
    console.log("load more")
  }
})
getPhotos();
