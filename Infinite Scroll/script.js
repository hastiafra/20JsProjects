
require("dotenv").config();
const My_key = process.env.apiUrl;

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
