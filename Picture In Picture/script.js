const video = document.getElementById("video");

const startButton = document.getElementById("stButton");

const sourceButton = document.getElementById("source");


const getVideo = async () =>{
   try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => video.play();
      } catch (error) {
        console.log(`msg: ${error}`)
      }
}


const startPIP = async () =>{
    await video.requestPictureInPicture();
}


sourceButton.addEventListener("click", getVideo);
startButton.addEventListener("click", startPIP)

