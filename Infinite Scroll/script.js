import { APIKEY } from "./env.js";

const container = document.getElementById("img-container");

const loader = document.getElementById("loader");

let photosArr = [];
let count = 2;

let ready = false;
let imgsLoaded = 0;
let totalImgs = 0;

const imgLoaded = () => {
  imgsLoaded++;

  if (imgsLoaded === totalImgs) {
    ready = true;
    loader.hidden = true;
    count = 10;
  }
};

const getPhotos = async () => {
  try {
    const response = await fetch(APIKEY);
    photosArr = await response.json();

    displayPhotos();
  } catch (error) {
    console.log(error);
  }
};

const displayPhotos = () => {
  imgsLoaded = 0;

  totalImgs = photosArr.length;
  console.log(totalImgs);

  photosArr.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    let img = document.createElement("img");
    img.src = `${photo.urls.regular}`;
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    img.addEventListener("load", imgLoaded);

    item.appendChild(img);
    container.appendChild(item);
  });
};

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
getPhotos();
