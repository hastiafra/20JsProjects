import {APIKEY} from "./env.js";

console.log(APIKEY)

const getPhotos = async () => {

  try {
    const response = await fetch(My_key);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    response.status(500).json({ status: "Error", msg: error.message });
  }
};

getPhotos();
